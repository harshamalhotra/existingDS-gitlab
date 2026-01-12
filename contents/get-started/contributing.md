---
name: Contributing
---

Contributing to the GitLab design system, Pajamas, keeps it healthy and effective. Every contribution, large or small, helps teams move faster, deliver a cohesive experience, and reduce duplicate effort.
The Design System team maintains and evolves Pajamas in partnership with contributors. Our goal is to make contributing straightforward and collaborative. Proposals should feel welcome, and contributors can expect constructive, timely feedback.

<!-- If you have suggestions for improving the process, please share them [link to feedback issue]. -->

Contributions can start in design, code, or both. However they begin, what matters is making the work visible early, opening it up for feedback, and aligning before merging. To guide this work, Pajamas is organized into two layers:

- **The core layer** represents the shared building blocks of the GitLab product. It includes widely used foundational elements, components, patterns, and guidelines that the Design System team directly owns.
- **The extended layer** provides space for reusable components and patterns that are valuable in more than one place, even if they don't need to scale across the entire product. The teams who create extended contributions own them.

Both layers depend on active contributions, and we encourage proposals of any size or scope. Contributions may involve reporting bugs, suggesting documentation changes, highlighting emerging patterns, sharing design explorations, or even asking questions that spark discussion.

<!-- [Describe how people can recognize elements in the core and extended layer on design.gitlab.com]. -->

## Contribution process

The contribution process provides structure for moving work from idea to adoption.

### 1. Create an issue or open a merge request

Start by ensuring that an issue or merge request exists. Search the [issue tracker](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues) for related work before creating a new one. While discussion can happen in many places, the formal process begins once the work is in GitLab.

- **Open a merge request** when you are proposing a specific change.
- **Create an issue** when the outcome is unclear, for example to raise a question, report a bug, or explore an idea. When in doubt, default to an issue.

Before opening a merge request, be sure to read this project's [README.md](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/README.md) for development and documentation guidance.

### 2. Classify as core or extended

After you open an issue or merge request, the Design System team will classify the contribution as core, extended, or out of scope for the design system. If you are discussing or modifying an existing element, we will continue to use its current classification. In some cases, a contribution may not have enough information to make a clear decision. These will be marked as pending classification and revisited once more details are available.

<table>
   <thead>
      <tr>
         <th>Core layer</th>
         <th>Extended layer</th>
      </tr>
   </thead>
      <tr>
         <td>
            <p>Criteria (should meet most or all):</p>
            <ul>
               <li> Broad usage across multiple domains and Design System consumers.</li>
               <li> Not clearly owned by a single domain team.</li>
               <li> Sets the system-wide standard for consistent use across domains.</li>
               <li> Mature and stable design and implementation.</li>
               <li> High risk if implemented inconsistently.</li>
            </ul>
         </td>
         <td>
            <p>Criteria (meets one or more):</p>
            <ul>
               <li> Reusable in more than one place, but not necessarily across multiple domains.</li>
               <li> May be primarily domain-owned, but valuable to share across teams.</li>
               <li> An early-stage or evolving component or pattern.</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>
            <p>Requirements:</p>
            <ul>
               <li> Fully conforms to accessibility requirements.</li>
               <li> Supports current and future requirements of teams.</li>
               <li> Includes design specs, Figma assets, code assets, and documentation.</li>
               <li> The Design System team has capacity and capability for ongoing maintenance and long-term improvement.</li>
            </ul>
         </td>
         <td>
            <p>Requirements:</p>
            <ul>
               <li> Solves current needs, but is not expected to scale across all product teams.</li>
               <li> Includes documentation and code (Figma assets and design specs optional). Code-only assets are excluded from the extended layer. </li>
               <li> The Design System team does not provide ongoing or long-term support.</li>
            </ul>
         </td>
      </tr>
</table>

### 3. Define level of support

To guide contributors, the Design System team will identify an initial level of support:

- **No support:** the contributor owns execution with no involvement from the Design System team. This is the default level of support for contributions to the extended layer.
- **Consult and review:** the contributor leads execution while the Design System team provides feedback, advice, and review. This is the default level of support for contributions to the core layer.
- **Task-specific:** the Design system team takes responsibility for a specific part of the process and provides feedback and/or deliverables (for example, producing UI kit assets or writing documentation)
- **End-to-end:** the Design System team leads execution through completion, working closely with the contributor and providing feedback, guidance, and review at every stage of the process.

If you request a higher level of support for a contribution, it will be triaged and, if accepted, incorporated into milestone planning.

#### Supporting contributions to the core layer

Any changes to the core layer require review and approval from members of the Design System team. When a contribution is classified as core, a point of contact will be assigned to work with you. This person is available to guide you through the process, help ensure changes align with guidelines and system-wide quality, and prepare the work for long-term ownership and maintenance by the Design System team.

#### Contributing to the extended layer

Extended items are generally owned by the team that created them, though in some cases they may be owned by a broader group of maintainers. When a contribution is classified as extended, the Design System team will check in to understand what support, if any, you need. You can also reference the reviewer list or proposal template to find who to engage. As the contributor, it is your responsibility to move the work forward, with optional guidance available from the Design System team.

#### Reviewing our level of support

The Design System team will review our level of support every milestone. During these reviews we may continue support if the work is progressing, or scale back or remove our involvement if the work has stalled. This helps keep our capacity focused on active contributions.

### 4. Merge your changes

After the necessary approvals, the respective owner of the layer or element can merge the change. If there are any significant changes, please share them with the wider UX and Engineering groups.

Rolling out changes is typically handled by the contributor, but the Design System team will coordinate when a change to the core layer has broad or breaking impact.

## Resources

- This project's [README.md](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/README.md) provides various technical details for contributing to our documentation.
- [Contribute to the Pajamas UI Kit](/get-started/uik-contributing)
- [Guides for contributing to GitLab UI](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/packages/gitlab-ui/CONTRIBUTING.md)

## Code of conduct

As contributors and maintainers of this project, we pledge to respect all
people who contribute through reporting issues, posting feature requests,
updating documentation, submitting pull requests or patches, and other
activities.

We are committed to making participation in this project a harassment-free
experience for everyone, regardless of level of experience, gender, gender
identity and expression, sexual orientation, disability, personal appearance,
body size, race, ethnicity, age, or religion.

Examples of unacceptable behavior by participants include the use of sexual
language or imagery, derogatory comments or personal attacks, trolling, public
or private harassment, insults, or other unprofessional conduct.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct. Project maintainers who do not
follow the Code of Conduct may be removed from the project team.

This code of conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community.

Instances of abusive, harassing, or otherwise unacceptable behavior can be
reported by emailing `contact@gitlab.com`.

This Code of Conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org),
version 1.1.0, available at [http://contributor-covenant.org/version/1/1/0/](http://contributor-covenant.org/version/1/1/0/).
