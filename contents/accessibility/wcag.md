---
name: GitLab Accessibility Conformance Report WCAG Edition
---

**Based on Version 2.4Rev**, March 2022 ([template](https://www.itic.org/policy/accessibility/vpat))

- **Name of Product/Version:** GitLab Enterprise Edition Premium version 16.0
- **Report Date:** Revised July, 2023
- **Product Description:** From project planning and source code management to CI/CD and monitoring, GitLab is a single application for [the entire DevOps lifecycle](https://about.gitlab.com/stages-devops-lifecycle/).
- **Contact information:** [ux@gitlab.com](mailto:ux@gitlab.com)
- **Notes:**
  - This evaluation only refers to GitLab the product and does not include the [about.gitlab.com](https://about.gitlab.com/) or [docs.gitlab.com](https://docs.gitlab.com/ee/) websites.
  - The latest revision evaluates **GitLab Enterprise Edition Premium version 16.0** and supersedes earlier versions of this report.
  - **Table 3: Success Criteria, Level AAA** has been removed because the GitLab product has not been evaluated for WCAG 2.0 Level AAA conformance.
  - GitLab supports the current and previous major version along with current minor version of the following browsers: Mozilla Firefox, Google Chrome, Chromium, Apple Safari, Microsoft Edge.
  - GitLab does not support running with JavaScript disabled in the browser because several features require JavaScript extensively.
  - View [GitLab installation minimum requirements](https://docs.gitlab.com/ee/install/requirements.html) for both the supported operating systems and the minimum requirements needed to install and use GitLab.
  - Known accessibility issues are linked in the tables below and may also be found by searching [GitLab.com](https://gitlab.com/) (account required).
- **Evaluation Methods Used:** Conformance to the listed accessibility standards has been evaluated by GitLab using a combination of analysis tools and manual testing with assistive technologies. These tools include, but are not limited to: [axe DevTools®](https://www.deque.com/axe/devtools/), [Lighthouse](https://developers.google.com/web/tools/lighthouse/), [NVDA](https://www.nvaccess.org/download/), and VoiceOver on macOS.

## Applicable Standards/Guidelines

This report covers the degree of conformance for the following accessibility standard/guidelines:

<table class="gl-mb-6 table-compact">
  <thead>
    <tr>
      <th>Standard/Guideline</th>
      <th>Included In Report</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a
        href="http://www.w3.org/TR/2008/REC-WCAG20-20081211"
        target="_blank"
      >Web Content Accessibility Guidelines 2.0</a> or WCAG 2.0 (ISO/IEC 40500)</td>
      <td>
        <ul>
          <li>Level A (Yes)</li>
          <li>Level AA (Yes)</li>
          <li>Level AAA (No)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><a
        href="https://www.w3.org/TR/WCAG21/"
        target="_blank"
      >Web Content Accessibility Guidelines 2.1</a> or WCAG 2.1</td>
      <td>
        <ul>
          <li>Level A (Yes)</li>
          <li>Level AA (Yes)</li>
          <li>Level AAA (No)</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Terms

The terms used in the Conformance Level information are defined as follows:

- **Supports:** The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.
- **Partially Supports:** Some functionality of the product does not meet the criterion.
- **Does Not Support:** The majority of product functionality does not meet the criterion.
- **Not Applicable:** The criterion is not relevant to the product.
- **Not Evaluated:** The product has not been evaluated against the criterion. This can only be used in WCAG 2.x Level AAA.

## WCAG 2.x Report

<note>When reporting on conformance with the WCAG 2.x Success Criteria, they are scoped for full pages, complete processes, and accessibility-supported ways of using technology as documented in the [WCAG 2.0 Conformance Requirements](https://www.w3.org/TR/WCAG20/#conformance-reqs).</note>

### Table 1: Success Criteria, Level A

<table class="gl-mb-6 table-compact">
  <thead>
    <tr>
      <th>Criteria</th>
      <th>Conformance Level</th>
      <th>Remarks and Explanations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#text-equiv-all"
          target="_blank"
        >1.1.1 Non-text Content</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product has many instances where non-text content does not have a text alternative.</p>
        <ul>
          <li>Known instances are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/567"
          target="_blank"
        >!567</a> and
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/564"
          target="_blank"
        >!564</a> epics and will continue to be addressed.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#media-equiv-av-only-alt"
          target="_blank"
        >1.2.1 Audio-only and Video-only (Prerecorded)</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product does not include prerecorded audio-only or video-only media.</p>
        <ul>
          <li>A user can upload their own media and include alternative content, such as a text transcript by using <a href="https://docs.gitlab.com/ee/user/markdown.html">GitLab Flavored Markdown</a>.</li>
          <li>There is no mechanism to verify that the user is including alternative content, therefore, we classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#media-equiv-captions"
          target="_blank"
        >1.2.2 Captions (Prerecorded)</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product does not include synchronized media.</p>
        <ul>
          <li>User generated media that includes open captions can be linked to with <a href="https://docs.gitlab.com/ee/user/markdown.html">GitLab Flavored Markdown</a>.</li>
          <li>There is no mechanism to add captions to user generated media content, or to verify that the user is including captions, therefore, we classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc"
          target="_blank"
        >1.2.3 Audio Description or Media Alternative (Prerecorded)</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product does not include prerecorded or synchronized media.</p>
        <ul>
          <li>User generated media content can include alternative media in text form by adding it with <a href="https://docs.gitlab.com/ee/user/markdown.html">GitLab Flavored Markdown</a>.</li>
          <li>There is no mechanism to verify that the user is including alternative content, therefore, we classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic"
          target="_blank"
        >1.3.1 Info and Relationships</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product has many instances where information, structure, and relationships can not be programmatically determined.</p>
        <ul>
          <li>Known instances are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/567"
          target="_blank"
        >!567</a> epic and will continue to be addressed.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#content-structure-separation-sequence"
          target="_blank"
        >1.3.2 Meaningful Sequence</a> (Level A)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>The product content is presented in a way that can be sequentially or programmatically determined.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#content-structure-separation-understanding"
          target="_blank"
        >1.3.3 Sensory Characteristics</a> (Level A)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>The product does not depend solely on sensory characteristics such as shape, size, visual location, orientation, or sound to understand content.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color"
          target="_blank"
        >1.4.1 Use of Color</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product does not primarily use colors as the only visual means of conveying information with the exception of some text links.</p>
        <ul>
          <li>Known instances are tracked in the <a
          href="https://gitlab.com/gitlab-org/gitlab-ui/-/issues/1084"
          target="_blank"
        >#1084</a> issue.</li>
          <li>Until we ensure all text links are updated, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio"
          target="_blank"
        >1.4.2 Audio Control</a> (Level A)
      </td>
      <td>
        Not applicable
      </td>
      <td>
        <p>The product does not include auto-playing audio or provide the ability for user generated audio to automatically play.</p>
      </td>
    </tr>
     <tr>
      <td>
        <a
          href="https://www.w3.org/TR/WCAG20/#keyboard-operation-keyboard-operable"
          target="_blank"
        >2.1.1 Keyboard</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product has many instances of content that is not operable through a keyboard.</p>
        <ul>
          <li>Know instances are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/565"
          target="_blank"
        >!565</a> epic.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#keyboard-operation-trapping"
          target="_blank"
        >2.1.2 No Keyboard Trap</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>In most instances a user can move focus away from a focused element using only the keyboard.</p>
        <ul>
          <li>Known instances where a user cannot navigate away from focused file editors are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/627"
          target="_blank"
        >!627</a> epic.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://www.w3.org/TR/WCAG21/#character-key-shortcuts"
          target="_blank"
        >2.1.4 Character Key Shortcuts</a> (Level A 2.1 only)
      </td>
      <td>Supports</td>
      <td>The product contains a mechanism to turn all shortcuts off.</td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#time-limits-required-behaviors"
          target="_blank"
        >2.2.1 Timing Adjustable</a> (Level A)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>The product allows administrators to adjust any timeout functionality.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#time-limits-pause"
          target="_blank"
        >2.2.2 Pause, Stop, Hide</a> (Level A)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>The product does not include any moving, blinking, or scrolling content that lasts for more than 5 seconds. Information that is auto-updated is essential for showing correct status.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#seizure-does-not-violate"
          target="_blank"
        >2.3.1 Three Flashes or Below Threshold</a> (Level A)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>The product does not use flashing interface elements that flash more than three times within a 1 second period, with the exception of user generated media which may contain flickering.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip"
          target="_blank"
        >2.4.1 Bypass Blocks</a> (Level A)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>The product provides an option to bypass the repeated navigation on each page by hitting tab on page load.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-title"
          target="_blank"
        >2.4.2 Page Titled</a> (Level A)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>Each page of the product includes a title that describes the topic or purpose.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-order"
          target="_blank"
        >2.4.3 Focus Order</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product uses a logical tab order and in most instances consistent keyboard keys are used to perform actions.</p>
        <ul>
          <li>Some components use inconsistent or non-normative keyboard controls, therefore, we classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs"
          target="_blank"
        >2.4.4 Link Purpose (In Context)</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product includes the purpose of most links.</p>
        <ul>
          <li>Known instances of unclear product links are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/620"
          target="_blank"
        >!620</a> epic.</li>
          <li>A user can add a link with <a href="https://docs.gitlab.com/ee/user/markdown.html">GitLab Flavored Markdown</a>, however, there is no mechanism to verify that the user has made a link's purpose clear. Therefore, we classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://www.w3.org/TR/WCAG21/#pointer-gestures"
          target="_blank"
        >2.5.1 Pointer Gestures</a> (Level A 2.1 only)
      </td>
      <td>Not applicable</td>
      <td>This criterion is not relevant because the product does not use pointer gestures.</td>
    </tr>
    <tr>
      <td>
        <a
          href="https://www.w3.org/TR/WCAG21/#pointer-cancellation"
          target="_blank"
        >2.5.2 Pointer Cancellation</a> (Level A 2.1 only)
      </td>
      <td>Partially supports</td>
      <td>
        <p>The product has some instances where down-events are initialized without a method to easily undo or abort.</p>
        <ul>
          <li>Known instances are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/8761"
          target="_blank"
        >!8761</a> epic.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://www.w3.org/TR/WCAG21/#label-in-name"
          target="_blank"
        >2.5.3 Label in Name</a> (Level A 2.1 only)
      </td>
      <td>Supports</td>
      <td>The product has controls where the accessible name matches visible label.</td>
    </tr>
    <tr>
      <td>
        <a
          href="https://www.w3.org/TR/WCAG21/#motion-actuation"
          target="_blank"
        >2.5.4 Motion Actuation</a> (Level A 2.1 only)
      </td>
      <td>Not applicable</td>
      <td>This criterion is not relevant because the product does not use motion actuation.</td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#meaning-doc-lang-id"
          target="_blank"
        >3.1.1 Language of Page</a> (Level A)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>The product uses the language attribute on the HTML element to specify the default language of a page.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus"
          target="_blank"
        >3.2.1 On Focus</a> (Level A)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>The product does not initiate a change of context when a component receives focus.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#consistent-behavior-unpredictable-change"
          target="_blank"
        >3.2.2 On Input</a> (Level A)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>The product does not initiate a change of context when a value setting is changed unless specified by the actionable area.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#minimize-error-identified"
          target="_blank"
        >3.3.1 Error Identification</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>In most instances, the product describes input errors to the user and identifies which item the error originated from.</p>
        <ul>
          <li>Known instances where the identification and description of an error is not always combined programmatically to help assistive technologies to identify an error are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/7341"
          target="_blank"
        >!7341</a> epic.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#minimize-error-cues"
          target="_blank"
        >3.3.2 Labels or Instructions</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product ensures that most labels or instructions are provided for inputs.</p>
        <ul>
          <li>Known instances where a label is not present are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/621"
          target="_blank"
        >!621</a> epic.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#ensure-compat-parses"
          target="_blank"
        >4.1.1 Parsing</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product has instances of non-unique ID values.</p>
        <ul>
          <li>Known instances are related to <code>.js-</code> prefixed IDs used specifically for JavaScript and are tracked in the <a
          href="https://gitlab.com/gitlab-org/gitlab/issues/17928"
          target="_blank"
        >#17928</a> issue.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#ensure-compat-rsv"
          target="_blank"
        >4.1.2 Name, Role, Value</a> (Level A)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product has many instances where the name, role, or value cannot be programmatically determined or set.</p>
        <ul>
          <li>Know instances are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/567"
          target="_blank"
        >!567</a> epic.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Table 2: Success Criteria, Level AA

<table class="table-compact">
  <thead>
    <tr>
      <th>Criteria</th>
      <th>Conformance Level</th>
      <th>Remarks and Explanations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#media-equiv-real-time-captions"
          target="_blank"
        >1.2.4 Captions (Live)</a> (Level AA)
      </td>
      <td>
        Not applicable
      </td>
      <td>
        <p>This criterion is not relevant because the product does not support live media.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc-only"
          target="_blank"
        >1.2.5 Audio Description (Prerecorded)</a> (Level AA)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product does not include synchronized media.</p>
        <ul>
          <li>User generated videos may include audio descriptions and be linked with <a href="https://docs.gitlab.com/ee/user/markdown.html">GitLab Flavored Markdown</a>.</li>
          <li>There is no mechanism to include audio descriptions, or to verify that the user is including audio descriptions, therefore, we classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://www.w3.org/TR/WCAG21/#orientation"
          target="_blank"
        >1.3.4 Orientation</a> (Level AA 2.1 only)
      </td>
      <td>Supports</td>
      <td>The product is responsive to variable viewport sizes and orientations.</td>
    </tr>
    <tr>
      <td>
        <a
          href="https://www.w3.org/TR/WCAG21/#identify-input-purpose"
          target="_blank"
        >1.3.5 Identify Input Purpose</a> (Level AA 2.1 only)
      </td>
      <td>Partially supports</td>
      <td>
        <p>The product mostly uses input types and has some instances of autocomplete attributes on input fields.</p>
        <ul>
          <li>Known instances where input fields do not implement identifying expected form input data are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/8762"
          target="_blank"
        >!8762</a> epic.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast"
          target="_blank"
        >1.4.3 Contrast (Minimum)</a> (Level AA)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product has some instances where the contrast ratio of text (enabled) is not at least 4.5:1.</p>
        <ul>
          <li>Known instances are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/562"
          target="_blank"
        >!562</a> epic.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-scale"
          target="_blank"
        >1.4.4 Resize text</a> (Level AA)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>In most instances the product supports the use of standard zoom capabilities built into modern web browsers.</p>
        <ul>
          <li>Known instances where text is clipped or inaccessible when zoomed are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/563"
          target="_blank"
        >!563</a> epic.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation"
          target="_blank"
        >1.4.5 Images of Text</a> (Level AA)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product may include decorative images or illustrations that contain text.</p>
        <ul>
          <li>An image of text may be added in user generated content with <a href="https://docs.gitlab.com/ee/user/markdown.html">GitLab Flavored Markdown</a> and there is the capability to add alternative text.</li>
          <li>Known instances are tracked in the <a href="https://gitlab.com/groups/gitlab-org/-/epics/10943">!10943</a> epic.</li>
          <li>There is no mechanism to verify that the user has included alternative text, or that if included, it's accurate. Therefore, we classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://www.w3.org/TR/WCAG21/#reflow"
          target="_blank"
        >1.4.10 Reflow</a> (Level AA 2.1 only)
      </td>
      <td>Supports</td>
      <td>The product is responsive to variable viewport sizes.</td>
    </tr>
    <tr>
      <td>
        <a
          href="https://www.w3.org/TR/WCAG21/#non-text-contrast"
          target="_blank"
        >1.4.11 Non-text Contrast</a> (Level AA 2.1 only)
      </td>
      <td>Partially supports</td>
      <td>
        <p>The product has some instances where non-text contrast ratio is not at least 3:1.</p>
        <ul>
          <li>Known instances are being tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/8763"
          target="_blank"
        >!8763</a> epic.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://www.w3.org/TR/WCAG21/#text-spacing"
          target="_blank"
        >1.4.12 Text Spacing</a> (Level AA 2.1 only)
      </td>
      <td>Supports</td>
      <td>The product adapts to increases in text spacing.</td>
    </tr>
    <tr>
      <td>
        <a
          href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus"
          target="_blank"
        >1.4.13 Content on Hover or Focus</a> (Level AA 2.1 only)
      </td>
      <td>Supports</td>
      <td>The product supports control for content on hover or focus.</td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc"
          target="_blank"
        >2.4.5 Multiple Ways</a> (Level AA)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>The product provides multiple ways to locate and navigate to a page.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive"
          target="_blank"
        >2.4.6 Headings and Labels</a> (Level AA)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>In most instances the product uses descriptive headings and labels to describe the purpose or topic on a page.</p>
        <ul>
          <li>Know instances where headings and labels could be improved are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/566"
          target="_blank"
        >!566</a> epic.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-visible"
          target="_blank"
        >2.4.7 Focus Visible</a> (Level AA)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product uses visual changes to elements to indicate the current focus position.</p>
        <ul>
          <li>There are instances where a state change happens but does not include a visible focus indicator.</li>
          <li>There are other instances where the default browser focus ring is present and may lack sufficient contrast.</li>
          <li>Until an assessment can be completed to determine the impact, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#meaning-other-lang-id"
          target="_blank"
        >3.1.2 Language of Parts</a> (Level AA)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>The product uses the language attribute on the HTML element to specify the default language of a page.</p>
        <ul>
          <li>There is no mechanism to specify different languages for subsets of a page. For example, if a user were to enter a comment in a different language, therefore, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-locations"
          target="_blank"
        >3.2.3 Consistent Navigation</a> (Level AA)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>The product consistently repeats navigation controls across pages.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-functionality"
          target="_blank"
        >3.2.4 Consistent Identification</a> (Level AA)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>The product uses components that have consistent functionality across pages.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#minimize-error-suggestions"
          target="_blank"
        >3.3.3 Error Suggestion</a> (Level AA)
      </td>
      <td>
        Partially supports
      </td>
      <td>
        <p>In most instances the product provides suggestion for how to mitigate input errors.</p>
        <ul>
          <li>Known instances where error remedies are not provided or are not programmatically associated to help assistive technologies are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/7341"
          target="_blank"
        >!7341</a> epic.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="http://www.w3.org/TR/WCAG20/#minimize-error-reversible"
          target="_blank"
        >3.3.4 Error Prevention (Legal, Financial, Data)</a> (Level AA)
      </td>
      <td>
        Supports
      </td>
      <td>
        <p>The product ensure that when legal commitments or financial transactions occur users have the ability to correct validated input errors, review and confirm submission prior to submitting data, or reverse the submission.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://www.w3.org/TR/WCAG21/#status-messages"
          target="_blank"
        >4.1.3 Status Messages</a> (Level AA 2.1 only)
      </td>
      <td>Partially supports</td>
      <td>
        <p>In most cases the product uses roles to provide status messages to assistive technologies without receiving focus.</p>
        <ul>
          <li>Known instances of visual responses to user actions that use a status message, but are not perceptive to assistive technologies are tracked in the <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/8764"
          target="_blank"
        >!8764</a> epic.</li>
          <li>Until all known instances have been addressed, we will classify this as partially supports.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Table 3: Success Criteria, Level AAA

<note>The GitLab product has not been evaluated for WCAG 2.0 Level AAA conformance.</note>

## GitLab Legal Disclaimer

This document is provided for information purposes only and the contents hereof are subject to change without notice. GitLab does not warrant that this document is error-free, nor does it provide any other warranties or conditions, whether expressed orally or implied in law, including implied warranties and conditions of merchantability or fitness for a particular purpose. GitLab specifically disclaims any liability with respect to this document and no contractual obligations are formed either directly or indirectly by this document. GitLab further makes no representation concerning the ability of assistive technologies or other products to interoperate with GitLab products. This document addresses the named product(s) only and not prerequisite products for which GitLab supplies restricted use licenses.
