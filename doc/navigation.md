# Navbar configuration

## How to populate the navigation

The navigation is populated via a [JSON configuration file](../nav.json).

The configuration file consists of a list of objects that each define a single item in the navigation.
Each item should have a `title` and a `path`. In the example below, **My page** can be accessed at
`/my-page`:

```json
[
  {
    "title": "My page",
    "path": "my-page"
  }
]
```

Each item can have children that will be toggled with a `<button>`. Such items should define
an `items` property. `path` is optional for parent items. In the following example,
**My nested page** is accessible at `/my-nested-page` and is nested under **My category** in the
navigation:

```json
[
  {
    "title": "My category",
    "items": [
      {
        "title": "My nested page",
        "path": "my-nested-page"
      }
    ]
  }
]
```

If a parent item defines a `path`, all of its children will inherit it. For example, with this
configuration, **My nested page** will be available at `/my-category/my-nested-page`:

```json
[
  {
    "title": "My category",
    "path": "my-category",
    "items": [
      {
        "title": "My nested page",
        "path": "my-nested-page"
      }
    ]
  }
]
```

### Nesting limitations

Only one level of nesting is supported. In other words, the following `nav.json` configuration isn't currently supported:

```json
// bad
[
  {
    "title": "My category",
    "path": "my-category",
    "items": [
      {
        "title": "My nested page",
        "path": "my-nested-page",
        "items": [
          {
            "title": "My deeply nested page",
            "path": "my-deeply-nested-page"
          }
        ]
      }
    ]
  }
]
```

## Tying the navigation items to Markdown contents

When configuring paths in the navigation, make sure that they match the Markdown contents structure.

For example, if you had the following structure in the `contents/` directory:

```
.
└── foo
    └── bar.md  
```

Nuxt would generate the following structure:

```
.
└── foo
    └── bar
        └── index.html
```

Which, when running the app, would be accessible at `/foo/bar`. So you'd need to configure a nav
item accordingly:

```json
[
  {
    "title": "Foo",
    "path": "foo",
    "items": [
      {
        "title": "Bar",
        "path": "bar"
      }
    ]
  }
]
```
