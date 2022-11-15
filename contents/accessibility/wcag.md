---
name: GitLab Accessibility Conformance Report WCAG Edition
---

**Based on Version 2.4Rev**, March 2022 ([template](https://www.itic.org/policy/accessibility/vpat))

- **Name of Product/Version:** GitLab 15.0
- **Report Date:** Revised September, 2022
- **Product Description:** From project planning and source code management to CI/CD and monitoring, GitLab is a single application for [the entire DevOps lifecycle](https://about.gitlab.com/stages-devops-lifecycle/).
- **Contact information:** [ux@gitlab.com](mailto:ux@gitlab.com)
- **Notes:**
  - This evaluation only refers to GitLab the product and does not include the [about.gitlab.com](https://about.gitlab.com/) or [docs.gitlab.com](https://docs.gitlab.com/ee/) websites.
  - The latest revision evaluates GitLab 15.0 and supersedes earlier versions of this report.
  - **Table 3: Success Criteria, Level AAA** has been removed because the GitLab product has not been evaluated for WCAG 2.0 Level AAA conformance.
  - GitLab supports the current and previous major version along with current minor version of the following browsers: Mozilla Firefox, Google Chrome, Chromium, Apple Safari, Microsoft Edge.
  - GitLab does not support running with JavaScript disabled in the browser because several features require JavaScript extensively.
  - View [GitLab installation minimum requirements](https://docs.gitlab.com/ee/install/requirements.html) for both the supported operating systems and the minimum requirements needed to install and use GitLab.
  - Known accessibility issues are linked in the tables below and may also be found by searching [GitLab.com](https://gitlab.com/) (account required).
- **Evaluation Methods Used:** Conformance to the listed accessibility standards has been evaluated by GitLab using a combination of analysis tools and manual testing with assistive technologies. These tools include, but are not limited to: [axe DevTools®](https://www.deque.com/axe/devtools/), [Lighthouse](https://developers.google.com/web/tools/lighthouse/), [NVDA](https://www.nvaccess.org/download/), and VoiceOver on macOS.

### Applicable Standards/Guidelines

This report covers the degree of conformance for the following accessibility standard/guidelines:

<table class="gl-mb-6">
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

### Terms

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
        <p>The product has many instances where non-text content does not have a text alternative:
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/567"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/567</a>,
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/564"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/564</a></p>
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
        Supports
      </td>
      <td>
        <p>The product does not include any audio-only or video-only media.</p>
        <p>However, users have the ability to upload their own media. In these cases, users have the ability to include alternative representations, such as text transcripts.</p>
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
        <p>The product does not include any audio-only or video-only media.</p>
        <p>However, users have the ability to upload their own media. Captions are supported for videos provided by third-party tools that offer this capability. The product does not provide capabilities for captioning user generated audio or video content.
        <a
          href="https://gitlab.com/gitlab-org/gitlab/issues/25796"
          target="_blank"
        >https://gitlab.com/gitlab-org/gitlab/issues/25796</a></p>
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
        Not applicable
      </td>
      <td>
        <p>The product does not use synchronized media.</p>
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
        <p>The product has many instances where information, structure, and relationships can not be programmatically determined:
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/567"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/567</a></p>
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
        <p>The product does not use colors as the only visual means of conveying information. The exception is for text links which do still rely on color:
        <a
          href="https://gitlab.com/gitlab-org/gitlab-ui/-/issues/1084"
          target="_blank"
        >https://gitlab.com/gitlab-org/gitlab-ui/-/issues/1084</a></p>
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
        <p>The product has many instances of content that is not operable through a keyboard:
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/565"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/565</a></p>
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
        <p>The product ensures that users can move their focus away from a focused component using only the keyboard.</p>
        <p>A few instances were discovered where the user could not navigate away from focused file editors: <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/627"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/627</a></p>
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
        <p>The product does not include any moving, blinking, or scrolling content that lasts for more than 5 seconds.</p>
        <p>Information that is auto-updated is essential for showing correct status.</p>
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
        <p>The product does not use flashing interface elements that flash more than three times within a 1 second period.</p>
        <p>Users have the ability to upload content that may contain flickering.</p>
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
        <p>Each page of the product includes titles that describe the topic or purpose.</p>
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
        <p>The product uses a logical tab order and consistent keyboard keys to perform actions.</p>
        <p>Some components use inconsistent or non-normative keyboard controls.</p>
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
        <p>The product includes the purpose of each link.</p>
        <p>A few instances were discovered where the link purpose was not clear: <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/620"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/620</a></p>
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
        <p>The product has some instances where down-events are initialized without a method to easily undo or abort:
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/8761"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/8761</a></p>
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
        <p>The product describes input errors to the user and identifies which item the error originated from.</p>
        <p>However, the identification and description of an error is not combined programmatically to help assistive technologies to identify an error and provide error information to the user:
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/7341"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/7341</a></p>
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
        <p>The product ensures that labels or instructions are provided for inputs.</p>
        <p>A few instances were discovered where a label was not present: <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/621"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/621</a></p>
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
        <p>The product has instances of non-unique ID values. Some of which are related to <code>.js-</code> prefixed IDs used specifically for JavaScript.
        <a
          href="https://gitlab.com/gitlab-org/gitlab/issues/17928"
          target="_blank"
        >https://gitlab.com/gitlab-org/gitlab/issues/17928</a></p>
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
        <p>The product has many instances where the name, role, or value cannot be programmatically determined or set.
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/567"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/567</a></p>
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
        <p>This criterion is not relevant because the product does not use synchronized media.</p>
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
        Not applicable
      </td>
      <td>
        <p>This criterion is not relevant because the product does not use synchronized media.</p>
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
      <td>The product is reponsive to variable viewport sizes and orientations.</td>
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
        <p>The product uses input types and has some instances of autocomplete attributes on input fields.</p>
        <p>However, not all input fields implement identifying expected form input data:
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/8762"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/8762</a></p>
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
        <p>The product has some instances where the contrast ratio of text (enabled) is not at least 4.5:1.
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/562"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/562</a></p>
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
        <p>The product supports the use of standard zoom capabilities built into modern web browsers.</p>
        <p>However, there are a few instances where text is clipped or inaccessible when zoomed:
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/563"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/563</a></p>
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
        Supports
      </td>
      <td>
        <p>The product does not use images of text.</p>
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
      <td>The product is reponsive to variable viewport sizes.</td>
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
        <p>The product has some instances where non-text contrast ratio is not at least 3:1:
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/8763"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/8763</a></p>
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
        <p>The product uses descriptive headings and labels to describe the purpose or topic on a page.</p>
        <p>A few instances are known where headings could be utilized to better describe the sections of the page: <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/566"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/566</a></p>
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
        <p>There are instances where a state change happens but does not include a visible focus indicator. There are other instances where the default browser focus ring is present and may lack sufficient contrast.</p>
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
        Does not support
      </td>
      <td>
        <p>The product uses the language attribute on the HTML element to specify the default language of a page. However, there is no mechanism to specify different languages for subsets of a page. For example, if a user were to enter a comment in a different language.</p>
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
        <p>The product provides suggestion for how to mitigate input errors.</p>
        <p>However, the identification and description of an error is not combined programmatically to help assistive technologies to identify an error and provide remedy suggestions to the user:
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/7341"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/7341</a></p>
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
        <p>The product uses roles to provide status messages to assistive technologies without receiving focus.</p>
        <p>However, not all visual responses to user actions use a status message perceptive to assitive technologies:
        <a
          href="https://gitlab.com/groups/gitlab-org/-/epics/8764"
          target="_blank"
        >https://gitlab.com/groups/gitlab-org/-/epics/8764</a></p>
      </td>
    </tr>
  </tbody>
</table>

### Table 3: Success Criteria, Level AAA

<note>The GitLab product has not been evaluated for WCAG 2.0 Level AAA conformance.</note>

## GitLab Legal Disclaimer

This document is provided for information purposes only and the contents hereof are subject to change without notice. GitLab does not warrant that this document is error-free, nor does it provide any other warranties or conditions, whether expressed orally or implied in law, including implied warranties and conditions of merchantability or fitness for a particular purpose. GitLab specifically disclaims any liability with respect to this document and no contractual obligations are formed either directly or indirectly by this document. GitLab further makes no representation concerning the ability of assistive technologies or other products to interoperate with GitLab products. This document addresses the named product(s) only and not prerequisite products for which GitLab supplies restricted use licenses.
