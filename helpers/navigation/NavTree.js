import { Node } from './NavNode';

export class NavTree {
  constructor(items, initialRoute) {
    this.nodes = [];

    this.initNodes(items);
    this.activateNodeWithRoute(initialRoute);
  }

  get topLevelNodes() {
    return this.nodes.filter((node) => node.depth === 0);
  }

  /**
   * Creates a flat list of Node instances representing the nav tree.
   *
   * @param {array}  items  The nav items to be added to the list.
   * @param {Node}   parent The items' parent if any.
   * @param {number} depth  The current depth-level in the tree.
   */
  initNodes(items = [], parent = null, depth = 0) {
    if (!items.length) {
      return;
    }
    items.forEach((item) => {
      const node = new Node({ ...item, parent, depth });
      this.nodes.push(node);
      parent?.addChild(node);
      this.initNodes(item.items, node, depth + 1);
    });
  }

  /**
   * Activates a node based on a route.
   *
   * @param {String} route The route to be matched with a node.
   */
  activateNodeWithRoute(route = '') {
    if (!route) {
      return;
    }
    const fragments = route.replace(/^\//, '').split('/').reverse();
    const activeNode = this.getNodeWithPaths(fragments);
    if (!activeNode) {
      return;
    }
    this.activateNode(activeNode);
  }

  /**
   * Toggles a node's state.
   *
   * @param {Node} node
   */
  toggleNode(node) {
    if (!node.isActive) {
      return this.activateNode(node);
    }
    return node.deactivate();
  }

  /**
   * Activates a node.
   * This starts by deactivating all nodes so that only one branch can be expanded at a time. The
   * given node and all of its parents are then activated.
   *
   * @param {Node} node
   */
  activateNode(node) {
    this.deactivateAllNodes();
    node.activate();
  }

  /**
   * Deactives all nodes.
   */
  deactivateAllNodes() {
    this.nodes.filter(({ isActive }) => isActive).forEach((node) => node.deactivate());
  }

  /**
   * Attempts to find the node that matches a list of paths.
   * Since, multiple nodes could have the same path, we also check all of the matching node's
   * parents to make sure the whole branch matches the paths list.
   *
   * @param {Array} paths Paths to be matched against.
   * @returns {Node} The matched node.
   */
  getNodeWithPaths(paths = []) {
    const [path, ...rest] = paths;
    let leaves = this.nodes.filter((node) => node.path === path);

    const removeSimilarLeaves = (nodes, remainingPaths) => {
      if (!remainingPaths.length) {
        return;
      }
      const [currentPath, ...currentRemainingPaths] = remainingPaths;
      nodes.forEach((node) => {
        const { parent } = node;
        if (parent) {
          if (parent.path === currentPath) {
            removeSimilarLeaves([parent], currentRemainingPaths);
          } else if (parent.path === undefined) {
            removeSimilarLeaves([parent], remainingPaths);
          } else {
            leaves = leaves.filter(({ id }) => id !== node.id);
          }
        }
      });
    };
    removeSimilarLeaves(leaves, rest);

    return leaves?.[0];
  }
}
