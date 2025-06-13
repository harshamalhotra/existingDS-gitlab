## What does this MR do?

<!--
Describe in detail what your merge request does and why.

Please keep this description up-to-date with any discussion that takes
place so that reviewers can understand your intent. This is especially
important if they didn't participate in the discussion.

-->

%{first_multiline_commit}

## Screenshots or screen recordings

<!--
If your merge request contains visual changes, please include any relevant screenshots or screen
recordings that will assist reviewers and future readers.
-->

## Integrations

<!--
If your merge request requires migration in one of the main projects that rely on `@gitlab/ui`,
please list the integration merge requests below.
-->

- [ ] **[GitLab](https://gitlab.com/gitlab-org/gitlab)**: mr_url
- [ ] **[CustomersDot](https://gitlab.com/gitlab-org/customers-gitlab-com/)**: mr_url
- [ ] **[Duo UI](https://gitlab.com/gitlab-org/duo-ui)**: mr_url
- [ ] **[Status Page](https://gitlab.com/gitlab-org/status-page)**: mr_url
- [ ] **[Docs](https://gitlab.com/gitlab-org/technical-writing/docs-gitlab-com)**: mr_url
- [ ] **[Switchboard](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/switchboard/)**: mr_url

## Does this MR meet the acceptance criteria?

This checklist encourages the authors, reviewers, and maintainers of merge requests (MRs) to confirm
changes were analyzed for conformity with the project's guidelines, security and accessibility.

<details>

<summary>Toggle the acceptance checklist</summary>

### Conformity

- [ ] The “What does this MR do?” section in the MR description is filled out, explaining the reasons for and scope of the proposed changes, per [“Say why not just what”][transparency].
  - For example, if the MR is focused on _usage guidelines_, addressing _accessibility challenges_ could be added in a separate MR.
- [ ] Relevant label(s) are applied to the MR.
- [ ] The MR is added to a milestone.
- [ ] Added the `~"component:*"` label(s) if applicable.

### Components

- [ ] [GitLab UI's contributing guidelines](contributing).
- [ ] If the MR changes a component's API, integration MR(s) have been opened (see [integrations](#integrations) above).

### Documentation

- [ ] If creating a new component page [from scratch][writing-documentation], it follows the [page template structure][page-template].
- [ ] Content follows the [Pajamas voice and tone guidelines][voice-and-tone], falling back on the [GitLab Documentation Style Guide][style-guide] when needed.
- [ ] Related pages are cross-linked, where helpful. Component pages have [related components and patterns][related] defined in their Markdown front matter.
- [ ] If [embedding a Figma file][figma-embed], it follows the [Figma embed guide][figma-embed-guide].
- [ ] Review requested from any [GitLab designer][design-reviewer] or directly from a [maintainer or trainee maintainer][pajamas-assignments].
- [ ] Maintainer review follows the [Pajamas UX maintainer review checklist][pajamas-maintainer-checklist].

### Security

If this MR contains changes to processing or storing of credentials or tokens, authorization and
authentication methods and other items described in [the security review guidelines](https://about.gitlab.com/handbook/engineering/security/#when-to-request-a-security-review):

- [ ] Label as ~security and @ mention `@gitlab-com/gl-security/appsec`
- [ ] Security reports checked/validated by a reviewer from the AppSec team

### Accessibility

If this MR adds or modifies a component, take a few moments to review the following:

- [ ] All actions and functionality can be done with a [keyboard](https://design.gitlab.com/accessibility-audits/2-keyboard-only).
- [ ] Links, buttons, and controls have a visible [focus state](https://design.gitlab.com/accessibility-audits/2-keyboard-only#focus-states).
- [ ] All content is presented in text or with a text equivalent. For example, alt text for SVG, or
      `aria-label` for icons that have meaning or perform actions.
- [ ] Changes in a component’s state are announced by a screen reader. For example, changing
      `aria-expanded="false"` to `aria-expanded="true"` when an accordion is expanded.
- [ ] Color combinations have [sufficient contrast](https://design.gitlab.com/product-foundations/colors#accessibility).

</details>

/assign me

[contributing]: https://gitlab.com/gitlab-org/gitlab-ui/-/blob/main/CONTRIBUTING.md
[transparency]: https://about.gitlab.com/handbook/values/#say-why-not-just-what
[writing-documentation]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com#writing-component-documentation
[page-template]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/pages/components/template.md
[voice-and-tone]: https://design.gitlab.com/content/voice-tone
[style-guide]: https://docs.gitlab.com/ee/development/documentation/styleguide/index.html
[related]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/pages/components/template.md#L27-36
[design-reviewer]: https://about.gitlab.com/handbook/engineering/ux/pajamas-design-system/design-review/#reviewer
[pajamas-assignments]: https://about.gitlab.com/handbook/engineering/projects/#design.gitlab.com
[figma-embed]: https://www.figma.com/developers/embed
[figma-embed-guide]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/figma-embed.md
[pajamas-maintainer-checklist]: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/maintainer-checklist.md
