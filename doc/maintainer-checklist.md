# Pajamas UX maintainer review checklist

## General guidance
- Focus your review on content, website user experience, and information architecture (IA).
- If you know of any related or similar issues/MRs, note them and verify the proposed changes all work together seamlessly.
- It's okay (and preferred) to ask others for help when you don't know something yourself.
- If the updates refer specifically to designs that have been created, double check everything matches what's in Figma. Create follow up issues as needed.
- Supporting visuals are as simplified as possible and follow conventions set in the [Pajamas visual examples](https://www.figma.com/file/2XRq1MnIG69iti76Mh9HpJ/Pajamas-visual-examples) Figma file.
- Component demos should be used whenever possible. If not possible yet, a TODO should be used instead.
- Add related components as applicable (alternative components or components that are usually paired).
- If the status page is being updated, ensure the related content pages match the updated status. (For example, complete vue docs should not have the banner that states the component does not conform to pajamas. A separate issue/MR should be created to remove the banner if we are updating the status to complete. Complete usage docs should also not have todo banners.)
- Component accessibility:
   - Keyboard navigation is documented.
   - Text to be read out loud by screen readers is documented.

## In the copy, ensure
- There are no grammar or spelling errors.
- Writing follows our [voice and tone guidelines](https://docs.gitlab.com/ee/development/documentation/styleguide/).
- Text follows the [punctuation guidelines](https://docs.gitlab.com/ee/development/documentation/styleguide/#punctuation/). Don't forget those Oxford commas!
- Headings are correctly nested and don’t end with a period or a colon. Pages that utilize a template will inherit the h1 from the `name` specified on the template, so the content should start with an h2.
- Keep an eye on section and paragraph length. Neither should be too long.
- _Emphasis_ and **strong** are used sparingly.
- Text is as simple and clear as possible. Everything in Pajamas should be understandable even without additional background information.
- All links work as intended. In addition, if a link is changed in the MR, make sure there are no references to it outside of the diff that also need to be updated. Component references also need to be cross-linked to their respective component pages (for example, mentions of Alerts should link to the Alerts component page).
- Use `For example` instead of `e.g`.
- Avoid using should statements. Just tell people what to do instead.
- Use full, descriptive sentences so that readers don't have to go back and reference the section title to understand the content within a section. For example, rather than `Use to highlight...`, instead try: `Use cross-column colors to highlight...`
- Content that is similar or related in meaning is grouped together, if possible.
- Terminology, such as technical or GitLab-specific, is used correctly.
- Components and users are referenced using the singular instead of plural. For example, instead of `Badges can have an icon`, use `A badge can have an icon`; instead of `Users can press the element`, use `A user can press the element`.
- Component documentation follows the [component template](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/pages/components/template.md?plain=1). An empty or incomplete required section has a todo for future completion.
- Extra spaces and comments have been removed.

## For the MR itself, ensure
- That at least the first commit message is formatted according to [conventional commit standards](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/doc/commits.md)
- That you review the MR locally, either through checking out the branch or looking at the review app to ensure the content is formatted appropriately.
