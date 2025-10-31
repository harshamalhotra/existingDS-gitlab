---
name: GitLab Accessibility Conformance Report International Edition
---

**Based on VPAT® Version 2.5, International Edition** [(template)](https://www.itic.org/policy/accessibility/vpat)<br>April 2025

* **Name of Product/Version:** GitLab 18
* **Report Date:** September 10, 2025
* **Product Description:** GitLab is The DevSecOps Platform that empowers organizations to maximize the overall return on software development by delivering software faster and efficiently, while strengthening security and compliance. With GitLab, every team in your organization can collaboratively plan, build, secure, and deploy software to drive business outcomes faster with complete transparency, consistency, and traceability across [the DevSecOps lifecycle](https://about.gitlab.com/stages-devops-lifecycle/).
* **Contact information:** [accessibility@gitlab.com](mailto:accessibility@gitlab.com)
* **General notes:**
  * This report was created by Deque Systems Inc. upon completion of an accessibility evaluation and validation performed between December 9, 2024 and August 8, 2025.
  * This evaluation only refers to GitLab the product and does not include the [about.gitlab.com](https://about.gitlab.com/) or [docs.gitlab.com](https://docs.gitlab.com/ee/) websites.
  * The latest report provides a new evaluation of GitLab Ultimate version 18. New success criteria from the VPAT 2.5 template have also been added. This revision supersedes earlier versions of this report.
  * GitLab supports the current and previous major version along with current minor version of the following browsers: Mozilla Firefox, Google Chrome, Chromium, Apple Safari, Microsoft Edge.
  * GitLab does not support running with JavaScript disabled in the browser because several features require JavaScript extensively.
  * View [GitLab installation minimum requirements](https://docs.gitlab.com/ee/install/requirements.html) for both the supported operating systems and the minimum requirements needed to install and use GitLab.
  * Known accessibility issues are linked in the tables below and may also be found by searching [GitLab.com](https://gitlab.com/) (account required).
* **WCAG 2.2 notes:**
  * When reporting on conformance with the WCAG 2.2 Success Criteria, the criteria are scoped for full pages, complete processes, and accessibility-supported ways of using technology as documented in the [WCAG 2.2 Conformance Requirements](https://www.w3.org/TR/WCAG22/#conformance-reqs).
  * Table 3: Success Criteria, Level AAA has been removed because the GitLab product has not been evaluated for WCAG 2.2 Level AAA conformance.
* **Section 508 notes:**
  * The ICT covered by this report is not hardware. As such, the requirements of this chapter do not apply.

## Evaluation Methods Used

A combination of automated and manual testing techniques was employed for the accessibility assessment. Manual assessment was performed using [Chrome](https://www.google.com/chrome/dr/download/) 131.0.6778.205 on Windows 11 and included exclusive use of the keyboard. Automated tools used included [axe Auditor](https://www.deque.com/axe/auditor-accessibility-testing/) and the [axe Dev Tools](https://www.deque.com/axe/devtools/) browser extension. Assistive technologies employed included [NVDA](https://www.nvaccess.org/download/) v.2024.4

## Scope of Evaluation

The pages and components in the following table were evaluated as part of the assessment on which this report is based.

<table class="gl-mb-6 table-compact">
  <thead>
    <tr>
      <th>Page Title</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p>About your company</p></td>
      <td><p>https://gitlab.com/users/sign_up/company/new?jobs_to_be_done_other=&amp;registration_objective=ci&amp;role=devops_engineer</p></td>
    </tr>
    <tr>
      <td><p>Access Token</p></td>
      <td><p>[url]/-/user_settings/personal_access_tokens</p></td>
    </tr>
    <tr>
      <td><p>Account</p></td>
      <td><p>[url]/-/profile/account</p></td>
    </tr>
    <tr>
      <td><p>Activity - All Tab</p></td>
      <td><p>[url]/demo-group/project-1/activity</p></td>
    </tr>
    <tr>
      <td><p>Add new Access token</p></td>
      <td><p>[url]/demo-group/project-1/-/settings/access_tokens</p></td>
    </tr>
    <tr>
      <td><p>Admin Dashboard</p></td>
      <td><p>[url]/admin</p></td>
    </tr>
    <tr>
      <td><p>Background - Corn</p></td>
      <td><p>[url]/admin/background_jobs</p></td>
    </tr>
    <tr>
      <td><p>Background jobs - Dashboard</p></td>
      <td><p>[url]/admin/background_jobs</p></td>
    </tr>
    <tr>
      <td><p>Billing</p></td>
      <td><p>https://gitlab.com/-/profile/billings</p></td>
    </tr>
    <tr>
      <td><p>Branches</p></td>
      <td><p>[url]/demo-group/project-1/-/branches</p></td>
    </tr>
    <tr>
      <td><p>Bulk Edit</p></td>
      <td><p>[url]/demo-group/project-1/-/issues</p></td>
    </tr>
    <tr>
      <td><p>CI/CD Analytics</p></td>
      <td><p>[url]/demo-group/project-1/-/pipelines/charts</p></td>
    </tr>
    <tr>
      <td><p>Commits</p></td>
      <td><p>[url]/demo-group/project-1/-/commits/master?ref_type=heads</p></td>
    </tr>
    <tr>
      <td><p>Compare revisions</p></td>
      <td><p>[url]/demo-group/project-1/-/compare/master..master</p></td>
    </tr>
    <tr>
      <td><p>Configure feature flags dialog</p></td>
      <td><p>[url]/demo-group/project-1/-/feature_flags</p></td>
    </tr>
    <tr>
      <td><p>Container Registry</p></td>
      <td><p>[url]/demo-group/project-3/container_registry?orderBy=UPDATED&amp;sort=asc</p></td>
    </tr>
    <tr>
      <td><p>Create a blank Project</p></td>
      <td><p>[url]/projects/new#blank_project</p></td>
    </tr>
    <tr>
      <td><p>Create a Cluster</p></td>
      <td><p>[url]/demo-group/project-1/-/clusters/new_cluster_docs</p></td>
    </tr>
    <tr>
      <td><p>Create or import your first project</p></td>
      <td><p>https://gitlab.com/users/sign_up/groups/new</p></td>
    </tr>
    <tr>
      <td><p>Dashboard</p></td>
      <td><p>[url]/</p></td>
    </tr>
    <tr>
      <td><p>Dependencies</p></td>
      <td><p>[url]/demo-group/project-1/-/dependencies</p></td>
    </tr>
    <tr>
      <td><p>DevOps Reports</p></td>
      <td><p>[url]/admin/dev_ops_reports</p></td>
    </tr>
    <tr>
      <td><p>Edit Profile</p></td>
      <td><p>[url]/-/user_settings/profile</p></td>
    </tr>
    <tr>
      <td><p>Email address</p></td>
      <td><p>[url]/-/profile/emails</p></td>
    </tr>
    <tr>
      <td><p>Environments</p></td>
      <td><p>[url]/demo-group/project-1/-/environments</p></td>
    </tr>
    <tr>
      <td><p>Explore Projects</p></td>
      <td><p>[url]/explore/projects?archived=true</p></td>
    </tr>
    <tr>
      <td><p>Explore snippets</p></td>
      <td><p>[url]/explore/snippets</p></td>
    </tr>
    <tr>
      <td><p>Explore Topics</p></td>
      <td><p>[url]/explore/projects/topics</p></td>
    </tr>
    <tr>
      <td><p>Feature Flags</p></td>
      <td><p>[url]/demo-group/project-1/-/feature_flags</p></td>
    </tr>
    <tr>
      <td><p>General</p></td>
      <td><p>[url]/demo-group/project-1/edit</p></td>
    </tr>
    <tr>
      <td><p>Get started with GitLab Pages</p></td>
      <td><p>https://gitlab.com/demo/Test/pages/new</p></td>
    </tr>
    <tr>
      <td><p>GitLab Duo Chat</p></td>
      <td><p>[url]/demo-group/crtest/container_registry</p></td>
    </tr>
    <tr>
      <td><p>GitLab is better with colleagues!' dialog</p></td>
      <td><p>https://gitlab.com/test5482950/test/-/learn_gitlab</p></td>
    </tr>
    <tr>
      <td><p>Give feedback</p></td>
      <td><p>[url]/demo-group/crtest/container_registry</p></td>
    </tr>
    <tr>
      <td><p>Google Cloud</p></td>
      <td><p>https://gitlab.com/demo/Test/-/google_cloud/configuration</p></td>
    </tr>
    <tr>
      <td><p>Groups</p></td>
      <td><p>[url]/dashboard/groups</p></td>
    </tr>
    <tr>
      <td><p>Help Flyout</p></td>
      <td><p>[url]/demo-group/project-1/-/ci/editor?branch_name=master</p></td>
    </tr>
    <tr>
      <td><p>Instance subscription</p></td>
      <td><p>[url]/admin/subscription</p></td>
    </tr>
    <tr>
      <td><p>Integrations</p></td>
      <td><p>[url]/demo-group/project-1/-/settings/integrations</p></td>
    </tr>
    <tr>
      <td><p>Issue Boards</p></td>
      <td><p>[url]/demo-group/project-1/-/boards</p></td>
    </tr>
    <tr>
      <td><p>Issue details</p></td>
      <td><p>[url]/demo-group/project-1/-/issues/60</p></td>
    </tr>
    <tr>
      <td><p>Issues list</p></td>
      <td><p>[url]/demo-group/project-1/-/issues</p></td>
    </tr>
    <tr>
      <td><p>Job Details</p></td>
      <td><p>[url]/demo-group/project-1/-/jobs/84</p></td>
    </tr>
    <tr>
      <td><p>Jobs - All</p></td>
      <td><p>[url]/admin/jobs</p></td>
    </tr>
    <tr>
      <td><p>Keyboard Shortcuts dialog</p></td>
      <td><p>[url]/</p></td>
    </tr>
    <tr>
      <td><p>Kubernetes Cluster</p></td>
      <td><p>[url]/demo-group/project-1/-/clusters</p></td>
    </tr>
    <tr>
      <td><p>Labels - All tab</p></td>
      <td><p>[url]/demo-group/project-1/-/labels</p></td>
    </tr>
    <tr>
      <td><p>Learn Git Lab</p></td>
      <td><p>https://gitlab.com/tech3171450/test-1/-/learn_gitlab</p></td>
    </tr>
    <tr>
      <td><p>Login</p></td>
      <td><p>[url]/</p></td>
    </tr>
    <tr>
      <td><p>Members</p></td>
      <td><p>[url]/demo-group/project-1/-/project_members</p></td>
    </tr>
    <tr>
      <td><p>Merge requests details - Changes tab</p></td>
      <td><p>[url]/demo-group/project-1/-/merge_requests/12/diffs</p></td>
    </tr>
    <tr>
      <td><p>Merge requests details - Overview tab</p></td>
      <td><p>[url]/demo-group/project-1/-/merge_requests/12</p></td>
    </tr>
    <tr>
      <td><p>Merge requests details - Pipelines tab</p></td>
      <td><p>[url]/demo-group/project-1/-/merge_requests/12/pipelines</p></td>
    </tr>
    <tr>
      <td><p>Merge requests details -Commits tab</p></td>
      <td><p>[url]/demo-group/project-1/-/merge_requests/12/commits</p></td>
    </tr>
    <tr>
      <td><p>Merge requests list - All tab</p></td>
      <td><p>[url]/demo-group/project-1/-/merge_requests?scope=all&amp;state=all</p></td>
    </tr>
    <tr>
      <td><p>Merger Request</p></td>
      <td><p>[url]/demo-group/project-1/-/settings/merge_requests</p></td>
    </tr>
    <tr>
      <td><p>Milestones</p></td>
      <td><p>[url]/demo-group/project-1/-/milestones</p></td>
    </tr>
    <tr>
      <td><p>Monitor Settings</p></td>
      <td><p>[url]/demo-group/project-1/-/settings/operations</p></td>
    </tr>
    <tr>
      <td><p>New Feature Flag</p></td>
      <td><p>[url]/demo-group/project-1/-/feature_flags/new</p></td>
    </tr>
    <tr>
      <td><p>New issue</p></td>
      <td><p>[url]/demo-group/project-1/-/issues/new</p></td>
    </tr>
    <tr>
      <td><p>New Label</p></td>
      <td><p>[url]/demo-group/project-1/-/labels/new</p></td>
    </tr>
    <tr>
      <td><p>New Merge Request</p></td>
      <td><p>[url]/demo-group/project-1/-/merge_requests/new</p></td>
    </tr>
    <tr>
      <td><p>New project</p></td>
      <td><p>[url]/projects/new</p></td>
    </tr>
    <tr>
      <td><p>New Tag</p></td>
      <td><p>[url]/demo-group/project-1/-/tags/new</p></td>
    </tr>
    <tr>
      <td><p>New value stream dialog</p></td>
      <td><p>[url]/demo-group/project-1/-/value_stream_analytics</p></td>
    </tr>
    <tr>
      <td><p>Notifications</p></td>
      <td><p>[url]/-/profile/notifications</p></td>
    </tr>
    <tr>
      <td><p>Pipe Line Editor</p></td>
      <td><p>[url]/demo-group/project-1/-/ci/editor?branch_name=master</p></td>
    </tr>
    <tr>
      <td><p>Pipeline</p></td>
      <td><p>[url]/demo-group/project-1/-/pipelines</p></td>
    </tr>
    <tr>
      <td><p>Pipelines details</p></td>
      <td><p>[url]/demo-group/project-3/-/pipelines/3</p></td>
    </tr>
    <tr>
      <td><p>Policies</p></td>
      <td><p>[url]/demo-group/project-1/-/security/policies</p></td>
    </tr>
    <tr>
      <td><p>Preferences</p></td>
      <td><p>[url]/-/profile/preferences</p></td>
    </tr>
    <tr>
      <td><p>Profile</p></td>
      <td><p>[url]/root</p></td>
    </tr>
    <tr>
      <td><p>Project audit events</p></td>
      <td><p>[url]/demo-group/project-1/-/audit_events</p></td>
    </tr>
    <tr>
      <td><p>Project Overview</p></td>
      <td><p>[url]/demo-group/test-wcag/-/tree/main</p></td>
    </tr>
    <tr>
      <td><p>Projects Details</p></td>
      <td><p>[url]/demo-group/project-1</p></td>
    </tr>
    <tr>
      <td><p>Releases</p></td>
      <td><p>[url]/demo-group/project-1/-/releases</p></td>
    </tr>
    <tr>
      <td><p>Repository</p></td>
      <td><p>[url]/demo-group/project-1/-/tree/master</p></td>
    </tr>
    <tr>
      <td><p>Repository Analytics</p></td>
      <td><p>[url]/demo-group/project-1/-/graphs/master/charts</p></td>
    </tr>
    <tr>
      <td><p>Repository Graph</p></td>
      <td><p>[url]/demo-group/project-1/-/network/master?ref_type=heads</p></td>
    </tr>
    <tr>
      <td><p>Run Pipe Line</p></td>
      <td><p>[url]/demo-group/project-1/-/pipelines/new</p></td>
    </tr>
    <tr>
      <td><p>Schedule new pipeline</p></td>
      <td><p>[url]/demo-group/project-1/-/pipeline_schedules/new</p></td>
    </tr>
    <tr>
      <td><p>Security configuration</p></td>
      <td><p>[url]/demo-group/project-3/-/security/configuration</p></td>
    </tr>
    <tr>
      <td><p>Security dashboard</p></td>
      <td><p>[url]/demo-group/project-1/-/security/dashboard</p></td>
    </tr>
    <tr>
      <td><p>Start your Free Ultimate Trial</p></td>
      <td><p>https://gitlab.com/-/trial_registrations/new</p></td>
    </tr>
    <tr>
      <td><p>Terraform init command dialog</p></td>
      <td><p>[url]/demo-group/project-1/-/terraform</p></td>
    </tr>
    <tr>
      <td><p>Usage Quotas</p></td>
      <td><p>[url]/-/profile/usage_quotas</p></td>
    </tr>
    <tr>
      <td><p>Usage Quotas</p></td>
      <td><p>[url]/demo-group/project-1/-/usage_quotas</p></td>
    </tr>
    <tr>
      <td><p>Users</p></td>
      <td><p>[url]/admin/users</p></td>
    </tr>
    <tr>
      <td><p>Value Stream Analytics</p></td>
      <td><p>[url]/demo-group/project-1/-/value_stream_analytics</p></td>
    </tr>
    <tr>
      <td><p>Verify Screen</p></td>
      <td><p>https://gitlab.com/users/identity_verification</p></td>
    </tr>
    <tr>
      <td><p>Vulnerability report</p></td>
      <td><p>[url]/demo-group/project-1/-/security/vulnerability_report</p></td>
    </tr>
    <tr>
      <td><p>Web Hooks</p></td>
      <td><p>[url]/demo-group/project-1/-/hooks</p></td>
    </tr>
    <tr>
      <td><p>Welcome page</p></td>
      <td><p>NA</p></td>
    </tr>
    <tr>
      <td><p>What's new flyout</p></td>
      <td><p>[url]/demo-group/project-1/-/ci/editor?branch_name=master</p></td>
    </tr>
    <tr>
      <td><p>Security Capabilities</p></td>
      <td><p>[url]/demo-user/project-1/-/security/discover</p></td>
    </tr>
  </tbody>
</table>

## Applicable Standards/Guidelines

This report covers the degree of conformance for the following accessibility standard/guidelines:

<table class="gl-mb-6 table-compact">
  <thead>
    <tr>
      <th>Standard/Guideline</th>
      <th style="text-align: center; width: 25%;">Included In Report</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211" rel="nofollow noopener noreferrer" target="_blank">Web Content Accessibility Guidelines 2.0</a></td>
      <td style="text-align: center;">Level A (Yes)<br>Level AA (Yes)<br>Level AAA (No)</td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/WCAG21" rel="nofollow noopener noreferrer" target="_blank">Web Content Accessibility Guidelines 2.1</a></td>
      <td style="text-align: center;">Level A (Yes)<br>Level AA (Yes)<br>Level AAA (No)</td>
    </tr>
    <tr>
      <td><a href="https://www.w3.org/TR/WCAG22/" rel="nofollow noopener noreferrer" target="_blank">Web Content Accessibility Guidelines 2.2</a></td>
      <td style="text-align: center;">Level A (Yes)<br>Level AA (Yes)<br>Level AAA (No)</td>
    </tr>
    <tr>
      <td><a href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines" rel="nofollow noopener noreferrer" target="_blank">Revised Section 508 standards published January 18, 2017 and corrected January 22, 2018</a></td>
      <td style="text-align: center;">(Yes)</td>
    </tr>
    <tr>
      <td><a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.01.01_60/en_301549v030101p.pdf" rel="nofollow noopener noreferrer" target="_blank">EN 301 549 Accessibility requirements for ICT products and services - V3.1.1 (2019-11)</a>&nbsp;<br><em>AND</em> <a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf" rel="nofollow noopener noreferrer" target="_blank">EN 301 549 Accessibility requirements for ICT products and services - V3.2.1 (2021-03)</a></td>
      <td style="text-align: center;">(Yes)</td>
    </tr>
  </tbody>
</table>

## Terms

The terms used in the Conformance Level information are defined as follows:

* **Supports**: The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.

* **Partially Supports**: Some functionality of the product does not meet the criterion.
* **Does Not Support**: The majority of product functionality does not meet the criterion.
* **Not Applicable**: The criterion is not relevant to the product.
* **Not Evaluated**: The product has not been evaluated against the criterion. This can be used only in WCAG Level AAA criteria.

## WCAG 2.2 Report

Tables 1 and 2 also document conformance with:

* EN 301 549:  Chapter 9 \- Web, Sections 10.1-10.4 of Chapter 10 \- Non-Web documents, and Sections 11.1-11.4 and 11.8.2 of Chapter 11 \- Non-Web Software (open and closed functionality), and Sections 12.1.2 and 12.2.4 of Chapter 12 – Documentation  
* Revised Section 508: Chapter 5 – 501.1 Scope, 504.2 Content Creation or Editing, and Chapter 6 – 602.3 Electronic Support Documentation.

Note: When reporting on conformance with the WCAG 2.2 Success Criteria, the criteria are scoped for full pages, complete processes, and accessibility-supported ways of using technology as documented in the [WCAG 2.2 Conformance Requirements](https://www.w3.org/TR/WCAG22/#conformance-reqs).

### Table 1: Success Criteria, Level A

<table class="gl-mb-6 table-compact">
  <thead>
    <tr>
      <th style="width: 40%;">Criteria</th>
      <th>Conformance Level</th>
      <th>Remarks and Explanations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><strong><a href="http://www.w3.org/TR/WCAG20/#text-equiv-all" rel="nofollow noopener noreferrer" target="_blank">1.1.1 Non-text Content</a></strong> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.1.1 (Web)</li>
          <li>10.1.1.1 (Non-web document)</li>
          <li>11.1.1.1.1 (Open Functionality Software)</li>
          <li>11.1.1.1.2 (Closed Functionality Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td><p>Web: Most non-text content has text alternatives or a text alternate that serves an equivalent purpose. The following exceptions exist:</p>
        <ul>
          <li>A complex image does not have a long description to convey the information presented by the image, so people who are blind and/or use a screen reader will not be able to understand the information presented by the image. This occurs on the following page(s): Repository Graph; Background jobs - Dashboard; Repository Analytics.</li>
          <li>A decorative image is not hidden from screen readers, so people who are blind and/or use a screen reader will have to navigate through unnecessary and duplicative text. This occurs on the following page(s): Vulnerability report; Dependencies.</li>
          <li>An image has a text alternative that is different than what the image represents, so people who are blind and/or use a screen reader will be given different information than sighted users. This occurs on the following page(s): Dashboard.</li>
          <li>A complex image has a short text alternative that is not meaningful, so people who are blind and/or use a screen reader may not be able to understand the information available in the image. This occurs on the following page(s): Background jobs - Dashboard; Repository Analytics.</li>
          <li>A complex image does not have a text alternative, so people who are blind and/or use a screen reader will not be able to understand the information available in the image. This occurs on the following page(s): Security dashboard; CI/CD Analytics.</li>
          <li>Text alternative for the informative image is missing. This occurs on the following page(s):  Background jobs - Dashboard; Instance subscription.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#media-equiv-av-only-alt" rel="nofollow noopener noreferrer" target="_blank"><strong>1.2.1 Audio-only and Video-only (Prerecorded)</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.2.1 (Web)</li>
          <li>10.1.2.1 (Non-web document)</li>
          <li>11.1.2.1.1 (Open Functionality Software)</li>
          <li>11.1.2.1.2.1 and 11.1.2.1.2.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
        </td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: Prerecorded audio-only files are not present.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#media-equiv-captions" rel="nofollow noopener noreferrer" target="_blank"><strong>1.2.2 Captions (Prerecorded)</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.2.2 (Web)</li>
          <li>10.1.2.2 (Non-web document)</li>
          <li>11.1.2.2 (Open Functionality Software)</li>
          <li>11.1.2.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: Prerecorded videos are not present.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc" rel="nofollow noopener noreferrer" target="_blank"><strong>1.2.3 Audio Description or Media Alternative (Prerecorded)</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.2.3 (Web)</li>
          <li>10.1.2.3 (Non-web document)</li>
          <li>11.1.2.3.1 (Open Functionality Software)</li>
          <li>11.1.2.3.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>  
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: Prerecorded videos are not present, so audio description is not required.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic" rel="nofollow noopener noreferrer" target="_blank"><strong>1.3.1 Info and Relationships</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.3.1 (Web)</li>
          <li>10.1.3.1 (Non-web document)</li>
          <li>11.1.3.1.1 (Open Functionality Software)</li>
          <li>11.1.3.1.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Web: Most, if not all, information, structure, and relationships conveyed through presentation cannot be programmatically determined or are not available in text. The following issues exist:</p>
        <ul>
          <li>A group of form controls is not programmatically associated with their group label, so the purpose of individual controls in the group cannot be understood by people who are blind and/or use a screen reader. This occurs on the following page(s): Notifications; Preferences; Compare revisions; Integrations; General; Pipelines details; Create a Cluster.</li>
          <li>A heading level is out of order, so the structure of the content is not properly conveyed to assistive technologies and people who are blind and/or use a screen reader. This occurs on the following page(s): Users; Profile; Notifications; GitLab Duo Chat; Issue Boards; Repository; Learn Git Lab; Add new Access token; Environments; Email address; CI/CD Analytics; Merger Request; Value Stream Analytics; Instance subscription; Monitor Settings; Access Token; Project audit events; Feature Flags.</li>
          <li>Content that is visually presented as a list is not properly marked up as a list, so the structure of the list is not correctly conveyed to assistive technologies and people who are blind and/or use a screen reader. This occurs on the following page(s): Search and Filter; Merge requests details - Overview tab; Sidebar; Merge requests details -Commits tab; Milestones.</li>
          <li>A block of text is marked up as a heading but is not a heading, so the structure of the content is misrepresented to assistive technologies and people who are blind and/or use a screen reader. This occurs on the following page(s): Issue Boards; Compare revisions; Add new Access token; Background jobs - Dashboard; CI/CD Analytics; Merger Request; General; Date Picker; Repository Analytics; Container Registry; Admin Dashboard; Explore Topics; Groups; Policies; Usage Quotas; Dependencies; Account.</li>
          <li>Text that visually functions as a heading is not marked up as a heading, so the structure of the content is not properly conveyed to assistive technologies and people who are blind and/or use a screen reader. This occurs on the following page(s): Preferences; GitLab Duo Chat; Issues list; Edit Profile; Search and Filter; Project Overview; Merge requests details - Overview tab; Repository Analytics; Pipelines details.</li>
          <li>Content that is visually presented as a list is not marked up as a list, so the presence and structure of the list are not conveyed to assistive technologies and people who are blind and/or use a screen reader. This occurs on the following page(s): Search and Filter; DevOps Reports; Projects Details; Keyboard Shortcuts dialog.</li>
          <li>Data is arranged visually like a data table, but the programmatic table header markup is missing or incomplete. People who are blind and/or use a screen reader will not be aware of the association between the table headers and their related data. This occurs on the following page(s): Google Cloud.</li>
          <li>Content that does not visually function as a list is marked up as a list, so the structure of the page is misrepresented to and people who are blind and/or use a screen reader or other assistive technology. This occurs on the following page(s): Repository; Merge requests details - Overview tab.</li>
          <li>A block of content has incorrect semantic markup, so its meaning, structure, or relationships is not conveyed to people who are blind and/or use a screen reader. This occurs on the following page(s): Background - Corn.</li>
          <li>One or more data cells is incorrectly marked up as a header cell in a table, so the table structure and the header/data relationship between the cell(s) and other cells in the table will be incorrectly conveyed to people who are blind and/or use a screen reader. This occurs on the following page(s): Vulnerability report.</li>
          <li>An element's programmatic role requires one or more child element(s) but the child element(s) is/are missing, so people who are blind and/or use a screen reader or other assistive technology may not be able to understand the purpose or content of the element or its related content. This occurs on the following page(s): Environments; Kubernetes Cluster.</li>
          <li>An HTML list element contains content that is visually presented as a part of the list, but the content's HTML coding does not include it programmatically in that list, so the structure of the list is not correctly conveyed to people who are blind and/or use a screen reader or other assistive technology. This occurs on the following page(s): Issue Boards; Issues list; Milestones.</li>
          <li>Content that is visually presented as a list is not properly marked up as a list, so the structure of the list is not correctly conveyed to assistive technologies and people who are blind and/or use a screen reader. This occurs on the following page(s): Issue Boards; Labels - All tab; Merge requests details - Overview tab.</li>
          <li>Group of radio buttons not associated with group label. This occurs on the following page(s):  Preferences; Issue Boards; Issue details; Merger Request; Create or import your first project; Schedule new pipeline; Welcome page; Create a blank Project.</li>
          <li>Group of checkboxes not associated with group label. This occurs on the following page(s):  Add new Access token; Merger Request; Create a blank Project.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#content-structure-separation-sequence" rel="nofollow noopener noreferrer" target="_blank"><strong>1.3.2 Meaningful Sequence</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.3.2 (Web)</li>
          <li>10.1.3.2 (Non-web document)</li>
          <li>11.1.3.2.1 (Open Functionality Software)</li>
          <li>11.1.3.2.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: The reading and navigation order of most content is logical and intuitive. The following exceptions exist:</p>
        <ul>
          <li>Screen readers can read content outside the modal dialog, so people who are blind and/or use a screen reader may become disoriented or confused. This occurs on the following page(s): What's new flyout.</li>
          <li>Some visually hidden content is announced by a screen reader, so people who are blind and/or use a screen reader may be misled or confused when hearing content that is not intended to be part of the reading order on the page. This occurs on the following page(s): Merge requests details - Changes tab; Issue details; General; Monitor Settings; Start your Free Ultimate Trial; Get started with GitLab Pages.</li>
          <li>The order that the screen reader announces static content does not match the visual order of the content and changes the meaning of that content, so the intended meaning of the content will be lost or changed for people who are blind and/or use a screen reader. This occurs on the following page(s): Releases; Rich text editor; Merge requests details - Changes tab; Container Registry.</li>
          <li>The screen reader skips and does not announce informative static content (text or images), so the intended meaning of that content will be lost or changed for people who are blind and/or use a screen reader. This occurs on the following page(s): Issue Boards; Merge requests details - Overview tab.</li>
          <li>The correct reading order of dynamically changing content is not programmatically determinable by screen readers, so people who are blind and/or use a screen reader may not be made aware of new or changed content that is dynamically added to a page. This occurs on the following page(s): Billing.</li>
          <li>Screen reader focus is lost or misplaced due to user interaction or content update, making navigation difficult or impossible for people who are blind and/or use a screen reader or other assistive technology. This occurs on the following page(s): New value stream dialog.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#content-structure-separation-understanding" rel="nofollow noopener noreferrer" target="_blank"><strong>1.3.3 Sensory Characteristics</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.3.3 (Web)</li>
          <li>10.1.3.3 (Non-web document)</li>
          <li>11.1.3.3 (Open Functionality Software)</li>
          <li>11.1.3.3 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: Instructions to operate and/or understand content do not rely on sensory characteristics of components such as shape, color, size, and visual location.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color" rel="nofollow noopener noreferrer" target="_blank"><strong>1.4.1 Use of Color</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.4.1 (Web)</li>
          <li>10.1.4.1 (Non-web document)</li>
          <li>11.1.4.1 (Open Functionality Software)</li>
          <li>11.1.4.1 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Web: For most if not all content, color is the only method used to convey information, indicate an action, prompt a response, or distinguish visual elements. The following issues exist:</p>
        <ul>
          <li>Color is used as the only method to convey information, so that information will not be available to people who are colorblind and people who are blind and/or use a screen reader. This occurs on the following page(s): Profile; Security dashboard; CI/CD Analytics; Value Stream Analytics.</li>
          <li>Color is the only visual method used to identify a link, and a link text's contrast ratio with the color of the surrounding text is less than 3:1, so people who are colorblind or have low vision may not be able to identify the link. This occurs on the following page(s): Pipe Line Editor; Issue details; Environments; Kubernetes Cluster; Project Overview; Merge requests details - Overview tab; General; Create or import your first project; Projects Details; Monitor Settings; Activity - All Tab; Policies; Configure feature flags dialog; Account; Verify Screen; Help Flyout; Terraform init command dialog.</li>
          <li>Color is used as the only method to convey the state (such as "checked," "pressed," or "selected")  of a control, so that information will not be available to people who are colorblind and people who are blind and/or use a screen reader. This occurs on the following page(s): Users; Issue Boards; Vulnerability report; Branches; Search and Filter; Create or import your first project; Create a Cluster; Project audit events; Members.</li>
          <li>Color is the only visual method used to identify a link, and a link text's contrast ratio with the color of the surrounding text is less than 3:1, so people who are colorblind or have low vision may not be able to identify the link. This occurs on the following page(s): Login; GitLab Duo Chat; Pipe Line Editor; Jobs - All; Vulnerability report; Compare revisions; Run Pipe Line; Releases; Repository; Security configuration; Background - Corn; Edit Profile; Security dashboard; Learn Git Lab; Add new Access token; Issue details; Environments; GitLab is better with colleagues!' dialog; Integrations; DevOps Reports; New issue; Project Overview; Background jobs - Dashboard; Merge requests details - Overview tab; Email address; Merger Request; General; Container Registry; Admin Dashboard; Instance subscription; Monitor Settings; Web Hooks; Start your Free Ultimate Trial; Access Token; New Tag; Keyboard Shortcuts dialog; Billing; Usage Quotas; Create a Cluster; New Label; Dependencies; Create a blank Project; New project; Feature Flags; Security Capabilities; Help Flyout.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio" rel="nofollow noopener noreferrer" target="_blank"><strong>1.4.2 Audio Control</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.4.2 (Web)</li>
          <li>10.1.4.2 (Non-web document)</li>
          <li>11.1.4.2 (Open Functionality Software)</li>
          <li>11.1.4.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: The tested application does not contain audio content that plays automatically for more than 3 seconds.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#keyboard-operation-keyboard-operable" rel="nofollow noopener noreferrer" target="_blank"><strong>2.1.1 Keyboard</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.1.1 (Web)</li>
          <li>10.2.1.1 (Non-web document)</li>
          <li>11.2.1.1.1 (Open Functionality Software)</li>
          <li>11.2.1.1.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: On most pages, all functionality is available using only the keyboard (unless that functionality cannot be accomplished in any known way using a keyboard). If shortcut keys and accesskeys present, some may conflict with existing browser and screen reader shortcuts, and some functionality based on custom gestures may not be available when a screen reader is turned on. The following exceptions exist:</p>
        <ul>
          <li>An action cannot be performed when using a screen reader, so people who are blind and others who use a screen reader cannot perform this action. This occurs on the following page(s): Date Picker.</li>
          <li>A function cannot be performed using only the keyboard, so people who use the keyboard alone to navigate and operate content cannot use this function. This occurs on the following page(s): Users; Profile; Issue Boards; Pipe Line Editor; Issues list; Repository Graph; Rich text editor; Merge requests details - Changes tab; Security dashboard; Issue details; Labels - All tab; Background jobs - Dashboard; Merge requests details - Overview tab; CI/CD Analytics; Value Stream Analytics; Date Picker; Repository Analytics; Container Registry; Groups; Merge requests list - All tab; Sidebar; Dependencies.</li>
          <li>The content in a scrollable region cannot be accessed using a keyboard, so people who use a keyboard to navigate will not be able to view this content. This occurs on the following page(s): Repository Graph.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#keyboard-operation-trapping" rel="nofollow noopener noreferrer" target="_blank"><strong>2.1.2 No Keyboard Trap</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.1.2 (Web)</li>
          <li>10.2.1.2 (Non-web document)</li>
          <li>11.2.1.2 (Open Functionality Software)</li>
          <li>11.2.1.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: Keyboard focus is never locked or trapped in a particular area, and the user is able to navigate to and from all navigable elements using only a keyboard.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG21/#character-key-shortcuts" rel="nofollow noopener noreferrer" target="_blank"><strong>2.1.4 Character Key Shortcuts</strong></a> (Level A 2.1 and 2.2)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.1.4 (Web)</li>
          <li>10.2.1.4 (Non-web document)</li>
          <li>11.2.1.4.1 (Open Functionality Software)</li>
          <li>11.2.1.4.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: In most cases when a single character key shortcut exists, then the single character key shortcut can be turned off or remapped, or it is only active when the relevant user interface component is in focus. The following exceptions exist:</p>
        <ul>
          <li>Single character key shortcuts exist and cannot be modified or turned off, so people who use the keyboard or speech input to navigate and operate content may accidentally trigger a command. This occurs on the following page(s): Project wide.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#time-limits-required-behaviors" rel="nofollow noopener noreferrer" target="_blank"><strong>2.2.1 Timing Adjustable</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.2.1 (Web)</li>
          <li>10.2.2.1 (Non-web document)</li>
          <li>11.2.2.1 (Open Functionality Software)</li>
          <li>11.2.2.1 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: In most cases when a time limit exists, the user is given an option to turn off, adjust, or extend the time limit. The following exceptions exist:</p>
        <ul>
          <li>Some content visually appears and disappears with no ability to adjust how long the content is visible, potentially preventing people who are blind, have low vision, or have mobility or cognitive disabilities from locating or reading the content. This occurs on the following page(s): Preferences; Job Details; Issue details; About your company.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#time-limits-pause" rel="nofollow noopener noreferrer" target="_blank"><strong>2.2.2 Pause, Stop, Hide</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.2.2 (Web)</li>
          <li>10.2.2.2 (Non-web document)</li>
          <li>11.2.2.2 (Open Functionality Software)</li>
          <li>11.2.2.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: On most pages where moving, blinking, scrolling, or auto-updating information is present, that information can be paused, stopped, hidden, or otherwise controlled by the user. The following exceptions exist:</p>
        <ul>
          <li>The user cannot pause, stop, or hide content that automatically moves, blinks, or scrolls, so people who cannot read text quickly, have attention deficit disorders or other cognitive disabilities, or use a screen reader may not be able to read or understand the content. This occurs on the following page(s): What's new flyout; Background jobs - Dashboard.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#seizure-does-not-violate" rel="nofollow noopener noreferrer" target="_blank"><strong>2.3.1 Three Flashes or Below Threshold</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.3.1 (Web)</li>
          <li>10.2.3.1 (Non-web document)</li>
          <li>11.2.3.1 (Open Functionality Software)</li>
          <li>11.2.3.1 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: The tested application does not contain flashing content.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip" rel="nofollow noopener noreferrer" target="_blank"><strong>2.4.1 Bypass Blocks</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.4.1 (Web)</li>
          <li>10.2.4.1 (Non-web document) – Does not apply</li>
          <li>11.2.4.1 (Open Functionality Software) – Does not apply</li>
          <li>11.2.4.1 (Closed Software) – Does not apply</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software) – Does not apply to non-web software</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs) – Does not apply to non-web docs</li>
        </ul>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: A method is provided to skip navigation and other page elements that are repeated across web pages.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-title" rel="nofollow noopener noreferrer" target="_blank"><strong>2.4.2 Page Titled</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.4.2 (Web)</li>
          <li>10.2.4.2 (Non-web document)</li>
          <li>11.2.4.2 (Open Functionality Software) - Does not apply</li>
          <li>11.2.4.2 (Closed Software) – Does not apply</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: Most pages have descriptive and informative titles. The following exceptions exist:</p>
        <ul>
          <li>Page TITLE element does not identify purpose of page. This occurs on the following page(s):  Environments; Create or import your first project; About your company; Welcome page; Create a blank Project.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-order" rel="nofollow noopener noreferrer" target="_blank"><strong>2.4.3 Focus Order</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.4.3 (Web)</li>
          <li>10.2.4.3 (Non-web document)</li>
          <li>11.2.4.3 (Open Functionality Software)</li>
          <li>11.2.4.3 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: The navigation order of most interactive elements (such as links, buttons, or form elements) is logical and preserves meaning and operability. The following exceptions exist:</p>
        <ul>
          <li>Keyboard focus or touch screen swiping goes to an element that is hidden or empty, so people who use the keyboard to navigate content (including screen reader users) may become disoriented or confused. This occurs on the following page(s): Merge requests details - Changes tab; Issue details; New issue; General; Monitor Settings; Get started with GitLab Pages.</li>
          <li>Keyboard focus does not follow the visual focus order, or it does not move to the intended target, so people who use the keyboard to navigate content (including screen reader users) may become disoriented on the page. This occurs on the following page(s): Get started with GitLab Pages; Help Flyout.</li>
          <li>Keyboard focus is not confined within a modal, so people who use the keyboard to navigate content (including screen reader users) will be able to navigate outside of the modal, which may cause them to become disoriented. This occurs on the following page(s): What's new flyout.</li>
          <li>The focus order is not logical and presents content in an order that misrepresents its meaning or operability, so people who use a keyboard, switch control, or other assistive technology to navigate content may become disoriented or confused. This occurs on the following page(s): Pipe Line Editor; Container Registry; Get started with GitLab Pages.</li>
          <li>When a modal closes, keyboard focus is not returned to the control that opened the modal or to another logical location, so people who use the keyboard to navigate content (including screen reader users) may become disoriented on the page. This occurs on the following page(s): New value stream dialog; What's new flyout; Help Flyout.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs" rel="nofollow noopener noreferrer" target="_blank"><strong>2.4.4 Link Purpose (In Context)</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.4.4 (Web)</li>
          <li>10.2.4.4 (Non-web document)</li>
          <li>11.2.4.4 (Open Functionality Software)</li>
          <li>11.2.4.4 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: The purpose of most links can be determined from the link text alone or from the link text and its programmatic context.  The following exceptions exist:</p>
        <ul>
          <li>The purpose of the link is not made clear by its text or the context provided by the content that immediately surrounds it, so people who are blind and/or use a screen reader will not know where the link goes. This occurs on the following page(s): Dashboard; Preferences; Job Details; Vulnerability report; Environments; New issue; Merge requests details - Overview tab; CI/CD Analytics; Admin Dashboard; Explore Topics; Projects Details.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG21/#pointer-gestures" rel="nofollow noopener noreferrer" target="_blank"><strong>2.5.1 Pointer Gestures</strong></a> (Level A 2.1 and 2.2)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.5.1 (Web)</li>
          <li>10.2.5.1 (Non-web document)</li>
          <li>11.2.5.1 (Open Functionality Software)</li>
          <li>11.2.5.1 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: All functionality that can be operated with a pointer can be operated with single-point actions.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG21/#pointer-cancellation" rel="nofollow noopener noreferrer" target="_blank"><strong>2.5.2 Pointer Cancellation</strong></a> (Level A 2.1 and 2.2)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.5.2 (Web)</li>
          <li>10.2.5.2 (Non-web document)</li>
          <li>11.2.5.2 (Open Functionality Software)</li>
          <li>11.2.5.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Supports</p></td>
      <td>
        <p>Web: For functionality that can be operated using a single pointer, at least one of the following is true:</p>
        <ul>
          <li>The action is not triggered on the down event.</li>
          <li>The action triggers on the up event, and a mechanism is available to abort the function before completion or to undo the function after completion.</li>
          <li>The up-event reverses any outcome of the preceding down-event.</li>
          <li>Completing the function on the down-event is essential.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG21/#label-in-name" rel="nofollow noopener noreferrer" target="_blank"><strong>2.5.3 Label in Name</strong></a> (Level A 2.1 and 2.2)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.5.3 (Web)</li>
          <li>10.2.5.3 (Non-web document)</li>
          <li>11.2.5.3.1 (Open Functionality Software)</li>
          <li>11.2.5.3.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: For most user interface components that include visible text labels, the accessible name matches (or includes) the visible text in the label. The following exceptions exist:</p>
        <ul>
          <li>The accessible name of an interactive element (such as a link, button, or form input) does not contain the visible label, so people who use speech input to navigate and operate content will not be able to access the element. This occurs on the following page(s): Notifications; Dashboard; Vulnerability report; New Feature Flag; New value stream dialog; Edit Profile; Issue details; New issue; General; Value Stream Analytics; Create or import your first project; Schedule new pipeline; New Tag; Policies; Usage Quotas; Get started with GitLab Pages; Project audit events; Members.</li>
          <li>An interactive element (such as a link, button, or form input) does not have an accessible name because its visible label is not programmatically associated with the element, so people who use speech input to navigate and operate content will not be able to access the element. This occurs on the following page(s): Preferences; Background - Corn; Issue details; GitLab is better with colleagues!' dialog; New issue; Bulk Edit; Background jobs - Dashboard; Merger Request; General; Create or import your first project; Get started with GitLab Pages.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG21/#motion-actuation" rel="nofollow noopener noreferrer" target="_blank"><strong>2.5.4 Motion Actuation</strong></a> (Level A 2.1 and 2.2)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.5.4 (Web)</li>
          <li>10.2.5.4 (Non-web document)</li>
          <li>11.2.5.4 (Open Functionality Software)</li>
          <li>11.2.5.4 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: Functionality that can be triggered by device motion or user motion detected by a device can be disabled, and the functionality can be operated without using motion.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#meaning-doc-lang-id" rel="nofollow noopener noreferrer" target="_blank"><strong>3.1.1 Language of Page</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.3.1.1 (Web)</li>
          <li>10.3.1.1 (Non-web document)</li>
          <li>11.3.1.1.1 (Open Functionality Software)</li>
          <li>11.3.1.1.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: On most pages, the language of the page is correct and can be determined programmatically. The following exceptions exist:</p>
        <ul>
          <li>The page does not have a valid language assigned, so screen readers may mispronounce content. This occurs on the following page(s): Project Overview.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus" rel="nofollow noopener noreferrer" target="_blank"><strong>3.2.1 On Focus</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.3.2.1 (Web)</li>
          <li>10.3.2.1 (Non-web document)</li>
          <li>11.3.2.1 (Open Functionality Software)</li>
          <li>11.3.2.1 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: When an element receives focus, a change in context (such as a substantial change to the page, the spawning of a pop-up window, or a change in focus) that may disorient the user does not occur.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#consistent-behavior-unpredictable-change" rel="nofollow noopener noreferrer" target="_blank"><strong>3.2.2 On Input</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.3.2.2 (Web)</li>
          <li>10.3.2.2 (Non-web document)</li>
          <li>11.3.2.2 (Open Functionality Software)</li>
          <li>11.3.2.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: In most cases, when a user inputs information or interacts with a control, it does not result in a substantial change to the page that could disorient the user, or the user is informed about the change ahead of time. The following exceptions exist:</p>
        <ul>
          <li>When a user changes the setting of a user interface control (such as entering text in an input field or selecting a checkbox or radio button), it results in an unanticipated context change (such as opening a new window, moving focus to another element, or submitting a form), so people who have cognitive disabilities and others may be confused or disoriented. This occurs on the following page(s): Notifications; Preferences; Background - Corn; Repository Graph; Background jobs - Dashboard.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG22/#consistent-help" rel="nofollow noopener noreferrer" target="_blank"><strong>3.2.6 Consistent Help</strong></a> (Level A 2.2 only)</p>
        <p>EN 301 549 Criteria – Does not apply</p>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: On web pages that contain help features (including human or automated contact options or self-help options), those features occur in the same order relative to other page content unless the user changes that order.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#minimize-error-identified" rel="nofollow noopener noreferrer" target="_blank"><strong>3.3.1 Error Identification</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.3.3.1 (Web)</li>
          <li>10.3.3.1 (Non-web document)</li>
          <li>11.3.3.1.1 (Open Functionality Software)</li>
          <li>11.3.3.1.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: For most form controls where an input error is automatically detected, a text message or alert is provided that identifies the field/control where the error was detected and describes the error. The following exceptions exist:</p>
        <ul>
          <li>A form field with an error is not identified in the text error message or a text alternative for an image, and the error message with the field name is not programmatically associated with the form field (so it is announced when a screen reader user navigates to the field), so people who are blind and/or use a screen reader will not be able to identify in which form field the error occurred. This occurs on the following page(s): Issue Boards; Create or import your first project.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#minimize-error-cues" rel="nofollow noopener noreferrer" target="_blank"><strong>3.3.2 Labels or Instructions</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.3.3.2 (Web)</li>
          <li>10.3.3.2 (Non-web document)</li>
          <li>11.3.3.2 (Open Functionality Software)</li>
          <li>11.3.3.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: For most form controls/input fields requiring user input, labels, instructions, and/or error messages are provided to identify the controls/input fields in the form so that users know what input data is expected. The following exceptions exist:</p>
        <ul>
          <li>The label of an element is not persistent (always visible on the page), so the element's purpose may be difficult to discover. This occurs on the following page(s): Run Pipe Line; Repository Graph; Issue details; New issue; Bulk Edit; Merge requests details - Overview tab; Schedule new pipeline; Explore Topics; Get started with GitLab Pages; Commits; Milestones.</li>
          <li>The label for a form field is missing, so the field's purpose is not clear. This occurs on the following page(s): Notifications; Vulnerability report; Compare revisions; Run Pipe Line; Background - Corn; Labels - All tab; Kubernetes Cluster; Merger Request; General; Value Stream Analytics; Schedule new pipeline; Get started with GitLab Pages; Pipeline; Milestones; Project audit events; Configure feature flags dialog; Members.</li>
          <li>Some visible Instructions for a form input field are not available for people who use assistive technology. This occurs on the following page(s): Get started with GitLab Pages.</li>
          <li>Select or dropdown control missing a visible label. This occurs on the following page(s):  Releases; Background - Corn; Search and Filter; Rich text editor; Background jobs - Dashboard; Date Picker.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <a href="https://www.w3.org/TR/WCAG22/#redundant-entry" rel="nofollow noopener noreferrer" target="_blank"><strong>3.3.7 Redundant Entry</strong></a> (Level A 2.2 only)
        </p>
        <p>EN 301 549 Criteria – Does not apply</p>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: If information previously entered by, or provided to, the user is required to be entered again in the same process, that information is either automatically populated or available for the user to select unless the previously entered information is no longer valid or re-entering the information is essential or required to ensure security.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#ensure-compat-parses" rel="nofollow noopener noreferrer" target="_blank"><strong>4.1.1 Parsing</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>WCAG 2.0 and 2.1 – Always answer "Supports"</p>
        <p>WCAG 2.2 (obsolete and removed) - Does not apply</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.4.1.1 (Web)</li>
          <li>10.4.1.1 (Non-web document)</li>
          <li>11.4.1.1.1 (Open Functionality Software)</li>
          <li>11.4.1.1.2 (Closed Software) – Does not apply</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: For WCAG 2.0, 2.1, EN 301 549, and Revised 508 Standards, the September 2023 errata update indicates this criterion is always supported. See the <a href="https://www.w3.org/WAI/WCAG20/errata/#editorial" rel="nofollow noopener noreferrer" target="_blank">WCAG 2.0 Editorial Errata</a> and the <a href="https://www.w3.org/WAI/WCAG21/errata/#editorial" rel="nofollow noopener noreferrer" target="_blank">WCAG 2.1 Editorial Errata</a>. This criterion was removed from WCAG 2.2.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#ensure-compat-rsv" rel="nofollow noopener noreferrer" target="_blank"><strong>4.1.2 Name, Role, Value</strong></a> (Level A)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.4.1.2 (Web)</li>
          <li>10.4.1.2 (Non-web document)</li>
          <li>11.4.1.2.1 (Open Functionality Software)</li>
          <li>11.4.1.2.2 (Closed Software) – Does not apply</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Web: The name, role, state, and/or value of most, if not all, user interface components cannot be programmatically determined. The following issues exist:</p>
        <ul>
          <li>A button does not have a programmatic role, so its role (usually button, but sometimes link or something else) is not conveyed to screen readers and other assistive technologies and will not be available to people who use those technologies. This occurs on the following page(s): Users; Profile; Issue Boards; Jobs - All; Issues list; Branches; Issue details; Merge requests details - Overview tab; Value Stream Analytics; Container Registry; Admin Dashboard; Instance subscription; Merge requests list - All tab; Explore Projects; Commits.</li>
          <li>A button does not have a programmatic role and name, so its role (usually button, but sometimes link or something else) and its name (such as "Submit" or "Cancel") are not conveyed to screen readers and other assistive technologies and will not be available to people who use those technologies. This occurs on the following page(s): Pipe Line Editor; Security dashboard; Background jobs - Dashboard; Sidebar.</li>
          <li>When a button is pressed, its pressed state is not conveyed programmatically, so people who are blind and/or use a screen reader or other assistive technology will not be informed that the button is pressed. This occurs on the following page(s): Rich text editor; Security dashboard; CI/CD Analytics; Value Stream Analytics; Project audit events.</li>
          <li>An element that appears and functions like a combobox does not have the required attributes in its HTML code needed to provide its programmatic role, name, state, and other properties to assistive technology, so people who are blind and/or use a screen reader or other assistive technology may not be able to understand the name, purpose, or content of the element or how to interact with it. This occurs on the following page(s): GitLab Duo Chat; Issue Boards; Pipe Line Editor; Vulnerability report; Compare revisions; Repository Graph; Edit Profile; Search and Filter; Rich text editor; GitLab is better with colleagues!' dialog; Bulk Edit; General; Repository Analytics; New Merge Request; Commits; Create a blank Project; Members.</li>
          <li>An element that appears and functions like a modal dialog does not have the required attributes in its HTML code needed to provide its programmatic role, name, state, and other properties to assistive technology, so people who are blind and/or use a screen reader or other assistive technology may not be able to understand the name, purpose, or content of the element or how to interact with it. This occurs on the following page(s): What's new flyout.</li>
          <li>An element does not have an attribute in its HTML code that will provide its programmatic role to assistive technology or the role assigned is not correct (like assigning a button the role of "checkbox"), so people who are blind and/or use a screen reader or other assistive technology may not be able to understand the name, purpose, or content of the element or how to interact with it. This occurs on the following page(s): Rich text editor.</li>
          <li>The programmatic state of an element that reveals or hides content ("expanded" or"collapsed") is missing or is used incorrectly, so people who are blind and/or use a screen reader or other assistive technology will not be informed of the current state of the element or the state will be misrepresented. This occurs on the following page(s): Job Details; Issue Boards; Pipe Line Editor; Releases; Background - Corn; Search and Filter; Rich text editor; Merge requests details - Changes tab; Merge requests details - Pipelines tab; Merge requests details - Overview tab; Merge requests list - All tab; Sidebar; Pipeline; Dependencies.</li>
          <li>For an element that allows a user either to select or not select a single option (like a checkbox or radio buttons) or to select from among 2 or more options (like a select dropdown), the state (such as checked/unchecked or selected/not selected) is not conveyed to assistive technology, so people who are blind and/or use a screen reader or other assistive technology may not be able to understand the purpose of the element, the options available, and whether the element or an option is currently checked. This occurs on the following page(s): Users; Pagination; Dashboard; Preferences; Run Pipe Line; Background - Corn; Branches; Edit Profile; Merge requests details - Changes tab; Issue details; Labels - All tab; DevOps Reports; New issue; Background jobs - Dashboard; Merge requests details - Overview tab; Date Picker; Create or import your first project; Projects Details; Google Cloud; Activity - All Tab; Pipelines details; Explore Projects; Milestones.</li>
          <li>The content of a tooltip cannot be accessed using a screen reader, so people who are blind and others who use a screen reader will not be able to read this content. This occurs on the following page(s): Profile; Issue Boards; Pipe Line Editor; Issues list; Repository Graph; Background jobs - Dashboard; Merge requests details - Overview tab; CI/CD Analytics; Value Stream Analytics; Repository Analytics.</li>
          <li>A link does not have a programmatic role, so people who are blind and/or use a screen reader or other assistive technology may not be able to understand the purpose and function of the link or how to interact with it. This occurs on the following page(s): Repository Graph; Value Stream Analytics.</li>
          <li>The HTML code for a link or button is nested inside the code of another link or button, so assistive technologies may not be able to determine the function of the element. This occurs on the following page(s): Pipe Line Editor; Issue details; Merge requests details - Pipelines tab; Merge requests details - Overview tab; Pipeline.</li>
          <li>A form field does not have a programmatic name, so people who are blind and/or use a screen reader or other assistive technology may not be able to understand the purpose of the form field or what input it requires. This occurs on the following page(s): Search and Filter; New issue.</li>
          <li>A link does not have discernible link text, so people who are blind and/or use a screen reader or other assistive technology may not be able to understand the destination or function of the link. This occurs on the following page(s): Repository Graph.</li>
          <li>An element with a "link," "button," or "menuitem" role is missing or has an incorrect programmatic name, so people who are blind and/or use a screen reader or other assistive technology may not be able to determine the name of the element and may not understand its purpose or content or how to interact with it. This occurs on the following page(s): Merge requests details - Changes tab.</li>
          <li>A form input element does not have a programmatic name, so people who are blind and/or use a screen reader or other assistive technology may not be able to determine the name of the element and may not understand its purpose or how to interact with it. This occurs on the following page(s): Project Overview.</li>
          <li>An element that is focusable or contains one or more focusable elements is programmatically hidden, so people who use the keyboard to navigate as well as people who are blind and/or use a screen reader or other assistive technology will not be able to perceive or interact with the element. This occurs on the following page(s): Releases; Repository; DevOps Reports; Project Overview; Instance subscription; Get started with GitLab Pages.</li>
          <li>A link does not have discernible text, so people who are blind and/or use a screen reader or other assistive technology may not be able to understand the destination or function of the link. This occurs on the following page(s): Job Details; New Feature Flag; Security configuration; Edit Profile; Merge requests details - Changes tab; Labels - All tab; General; Admin Dashboard; Pipeline.</li>
          <li>A progressbar element does not have a programmatic name, so people who are blind and/or use a screen reader or other assistive technology may not be able to determine the name of the element and may not understand its purpose or the information it conveys. This occurs on the following page(s): Releases; Usage Quotas.</li>
          <li>An iframe does not have a programmatic title that is conveyed to assistive technology, so people who are blind and/or use a screen reader or other assistive technology may not be able to understand the purpose or content of the iframe without browsing its content. This occurs on the following page(s): Background - Corn; Background jobs - Dashboard.</li>
          <li>The HTML code for a link or button is nested inside the code of another link or button, so assistive technologies may not be able to determine the function of the element. This occurs on the following page(s): Job Details; Issue Boards; Issue details; Usage Quotas.</li>
          <li>A form input element does not have a programmatic name, so people who are blind and/or use a screen reader or other assistive technology may not be able to determine the name of the element and may not understand its purpose or how to interact with it. This occurs on the following page(s): GitLab is better with colleagues!' dialog.</li>
          <li>A tooltip element does not have a programmatic name, so people who are blind and/or use a screen reader or other assistive technology may not be able to determine the name of the element and may not understand its purpose or the information it conveys. This occurs on the following page(s): Repository Analytics.</li>
          <li>Authored Content (Rich text editor): The product does not allow authors to provide accessible name of the checkboxes. This occurs on the following page(s):  Rich text editor.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Table 2: Success Criteria, Level AA

Notes:

<table class="gl-mb-6 table-compact">
  <thead>
    <tr>
      <th style="width: 40%;">Criteria</th>
      <th>Conformance Level</th>
      <th>Remarks and Explanations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#media-equiv-real-time-captions" rel="nofollow noopener noreferrer" target="_blank"><strong>1.2.4 Captions (Live)</strong></a> (Level AA)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.2.4 (Web)</li>
          <li>10.1.2.4 (Non-web document)</li>
          <li>11.1.2.4 (Open Functionality Software)</li>
          <li>11.1.2.4 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: Live multimedia files with audio are not present, so synchronized captions are not required.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc-only" rel="nofollow noopener noreferrer" target="_blank"><strong>1.2.5 Audio Description (Prerecorded)</strong></a> (Level AA)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.2.5 (Web)</li>
          <li>10.1.2.5 (Non-web document)</li>
          <li>11.1.2.5 (Open Functionality Software)</li>
          <li>11.1.2.5 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: Prerecorded multimedia files are not present, so audio descriptions are not required.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG21/#orientation" rel="nofollow noopener noreferrer" target="_blank"><strong>1.3.4 Orientation</strong></a> (Level AA 2.1 and 2.2)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.3.4 (Web)</li>
          <li>10.1.3.4 (Non-web document)</li>
          <li>11.1.3.4 (Open Functionality Software)</li>
          <li>11.1.3.4 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: Orientation of the content is not locked to either landscape or portrait unless a specific orientation is essential for the functionality.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG21/#identify-input-purpose" rel="nofollow noopener noreferrer" target="_blank"><strong>1.3.5 Identify Input Purpose</strong></a> (Level AA 2.1 and 2.2)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.3.5 (Web)</li>
          <li>10.1.3.5 (Non-web document)</li>
          <li>11.1.3.5.1 (Open Functionality Software)</li>
          <li>11.1.3.5.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: The purpose of most input fields that collect an individual's personal data are programmatically defined based on the WCAG list of Input Purposes for User Interface Components. The following exceptions exist:</p>
        <ul>
          <li>No programmatic purpose is provided for an input element (like a text input field), so browsers or assistive technology are not able to automatically suggest information to fill in the input. This occurs on the following page(s): Edit Profile; Email address; Start your Free Ultimate Trial; About your company.</li>
          <li>The programmatic purpose provided for an input element (like a text input field) is not accurate, so information automatically suggested by the browser or assistive technology to fill in the input will be incorrect. This occurs on the following page(s): Create or import your first project.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast" rel="nofollow noopener noreferrer" target="_blank"><strong>1.4.3 Contrast (Minimum)</strong></a> (Level AA)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.4.3 (Web)</li>
          <li>10.1.4.3 (Non-web document)</li>
          <li>11.1.4.3 (Open Functionality Software)</li>
          <li>11.1.4.3 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: Most text and images of regular text have the required color contrast ratio with their backgrounds. The following exceptions exist:</p>
        <ul>
          <li>The color contrast ratio between placeholder text in an input and the input's background is less than 4.5:1, so people who are colorblind or have low vision may have difficulty reading the placeholder text. This occurs on the following page(s): Users; GitLab Duo Chat; Pipe Line Editor; Vulnerability report; Run Pipe Line; Edit Profile; Search and Filter; Merge requests details - Changes tab; Issue details; GitLab is better with colleagues!' dialog; DevOps Reports; New issue; Bulk Edit; Merger Request; Schedule new pipeline; Explore Topics; Monitor Settings; Get started with GitLab Pages.</li>
          <li>The color contrast ratio between text and its background is less than 4.5:1, so people who are colorblind or have low vision may have difficulty reading the text. This occurs on the following page(s): Project wide; GitLab Duo Chat; Pipe Line Editor; Issues list; Issue details; GitLab is better with colleagues!' dialog; DevOps Reports; General; Get started with GitLab Pages.</li>
          <li>The color contrast ratio on hover or focus between a control's text label and its background is less than 4.5:1, so people who are colorblind or have low vision may have difficulty reading the text label of the control. This occurs on the following page(s): GitLab Duo Chat; Background - Corn; Rich text editor; Labels - All tab; New issue; Project Overview; Background jobs - Dashboard.</li>
          <li>The color contrast ratio between text and its background is less than 4.5:1 (or less than 3:1 for large text), so people who are colorblind or have low vision may have difficulty reading the text. This occurs on the following page(s): Preferences; Issue Boards; Issues list; Background - Corn; Merge requests details - Changes tab; Issue details; Labels - All tab; Background jobs - Dashboard; Merge requests details - Overview tab; Repository Analytics; Schedule new pipeline; New Merge Request; Get started with GitLab Pages.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-scale" rel="nofollow noopener noreferrer" target="_blank"><strong>1.4.4 Resize text</strong></a> (Level AA)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.4.4 (Web)</li>
          <li>10.1.4.4 (Non-web document)</li>
          <li>11.1.4.4.1 (Open Functionality Software)</li>
          <li>11.1.4.4.2 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: Most content is readable and functional when browser zoom is set to 200% of its initial size. The following exceptions exist:</p>
        <ul>
          <li>Content is lost, clipped, or obscured when the page is zoomed to 200%, so people who have low vision and need to enlarge text to read it may not have access to that content. This occurs on the following page(s): Pipe Line Editor; Learn Git Lab; DevOps Reports.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation" rel="nofollow noopener noreferrer" target="_blank"><strong>1.4.5 Images of Text</strong></a> (Level AA)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.4.5 (Web)</li>
          <li>10.1.4.5 (Non-web document)</li>
          <li>11.1.4.5.1 (Open Functionality Software)</li>
          <li>11.1.4.5.2 (Closed Software) – Does not apply</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: When content can be presented visually using only text, an image of text is not used to present that text.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG21/#reflow" rel="nofollow noopener noreferrer" target="_blank"><strong>1.4.10 Reflow</strong></a> (Level AA 2.1 and 2.2)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.4.10 (Web)</li>
          <li>10.1.4.10 (Non-web document)</li>
          <li>11.1.4.10 (Open Functionality Software)</li>
          <li>11.1.4.10 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: The content of most pages is viewable without scrolling horizontally when the viewport is set to 320 CSS pixels wide. The following exceptions exist:</p>
        <ul>
          <li>When the page is adjusted to an equivalent width of 320 pixels and content reflows to fit within the viewport, some content does not fit horizontally, so it cannot be viewed without scrolling. People with low vision who increase the size of text and other content using the browser zoom may have difficulty accessing the content that can only be seen by horizontal scrolling. This occurs on the following page(s): Notifications; Preferences; Instance subscription; Projects Details.</li>
          <li>When the page is adjusted to an equivalent width of 320 pixels and content reflows to fit within the viewport, some content or functionality becomes unavailable, so people with low vision who increase the size of text and other content using the browser zoom will not be able to access all of the page's content and/or functionality. This occurs on the following page(s): Pipe Line Editor; Vulnerability report; Releases; Repository; Learn Git Lab; Add new Access token; Kubernetes Cluster; DevOps Reports; Project Overview; Merge requests details - Overview tab; Groups; Monitor Settings; Activity - All Tab; Keyboard Shortcuts dialog.</li>
          <li>When the page is adjusted to an equivalent width of 320 pixels and content reflows to fit within the viewport, some content overlaps and cannot be seen or understood, so the overlapping content is not available to people with low vision who increase the size of text and other content using the browser zoom. This occurs on the following page(s): Value Stream Analytics; Feature Flags.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG21/#non-text-contrast" rel="nofollow noopener noreferrer" target="_blank"><strong>1.4.11 Non-text Contrast</strong></a> (Level AA 2.1 and 2.2)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.4.11 (Web)</li>
          <li>10.1.4.11 (Non-web document)</li>
          <li>11.1.4.11 (Open Functionality Software)</li>
          <li>11.1.4.11 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: Most of the boundaries and indicators of the visual state(s) of each active user component and any graphics required to understand content have a 3:1 color contrast ratio with adjacent color(s) or their background. The following exceptions exist:</p>
        <ul>
          <li>The visual boundary of an interactive element (like a radio button or input field) does not have a 3:1 color contrast ratio with the background, so people who are colorblind or have low vision may have difficulty perceiving the boundaries of the interactive element. This occurs on the following page(s): New Label.</li>
          <li>An icon (or part of the icon required to understand its content) does not have a 3:1 color contrast ratio with the background or adjacent colors, so people who are colorblind or have low vision may not be able understand the information presented by the icon. This occurs on the following page(s): New value stream dialog; Add new Access token; Issue details; New issue; Bulk Edit.</li>
          <li>The indicator for the state of an interactive element (like a checkbox or radio button) does not have a 3:1 color contrast ratio with the background, so people who are colorblind or have low vision may have difficulty perceiving the state of the interactive element. This occurs on the following page(s): Rich text editor; Merge requests details - Changes tab; New issue; Pipelines details.</li>
          <li>An image or graphic (like a chart) or part of the image/graphic required to understand its content does not have a 3:1 color contrast ratio with the background or adjacent colors, so people who are colorblind or have low vision may not be able understand the information presented by the image/graphic. This occurs on the following page(s): Profile.</li>
          <li>The focus indicator of an interactive element (like a button or input field) does not have a 3:1 color contrast ratio with the background, so people who are colorblind or have low vision may have difficulty perceiving when the interactive element is receiving focus. This occurs on the following page(s): GitLab Duo Chat.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG21/#text-spacing" rel="nofollow noopener noreferrer" target="_blank"><strong>1.4.12 Text Spacing</strong></a> (Level AA 2.1 and 2.2)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.4.12 (Web)</li>
          <li>10.1.4.12 (Non-web document)</li>
          <li>11.1.4.12 (Open Functionality Software)</li>
          <li>11.1.4.12 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: The spacing between letters, words, lines of text and paragraphs can be adjusted with no loss of content or functionality.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus" rel="nofollow noopener noreferrer" target="_blank"><strong>1.4.13 Content on Hover or Focus</strong></a> (Level AA 2.1 and 2.2)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.1.4.13 (Web)</li>
          <li>10.1.4.13 (Non-web document)</li>
          <li>11.1.4.13 (Open Functionality Software)</li>
          <li>11.1.4.13 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: In most cases when additional content is triggered by pointer hover or keyboard focus, that additional content can be dismissed and hovered over, and the content persists until the user dismisses it. The following exceptions exist:</p>
        <ul>
          <li>Content that appears on mouse hover or keyboard focus (such as tooltips, drop-down menus, or popups) is not dismissible, so it obscures all or part of the original content on the page. This occurs on the following page(s): Repository Graph; Security dashboard; Background jobs - Dashboard; Sidebar.</li>
          <li>Content that appears on mouse hover (such as tooltips, drop-down menus, or popups) disappears when the mouse pointer is moved over that content, meaning people with disabilities, especially people with low vision who need to magnify text, may not be able to read the additional content. This occurs on the following page(s): Repository Graph; Security dashboard; Background jobs - Dashboard; CI/CD Analytics; Repository Analytics; Sidebar; Pipelines details.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc" rel="nofollow noopener noreferrer" target="_blank"><strong>2.4.5 Multiple Ways</strong></a> (Level AA)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.4.5 (Web)</li>
          <li>10.2.4.5 (Non-web document) – Does not apply</li>
          <li>11.2.4.5 (Open Functionality Software) – Does not apply</li>
          <li>11.2.4.5 (Closed Software) – Does not apply</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>R501 (Web)(Software) – Does not apply to non-web software</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs) – Does not apply to non-web docs</li>
        </ul>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: Multiple ways are available to find other pages on the site.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive" rel="nofollow noopener noreferrer" target="_blank"><strong>2.4.6 Headings and Labels</strong></a> (Level AA)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.4.6 (Web)</li>
          <li>10.2.4.6 (Non-web document)</li>
          <li>11.2.4.6 (Open Functionality Software)</li>
          <li>11.2.4.6 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: Most headings and labels for form and interactive controls are informative. The following exceptions exist:</p>
        <ul>
          <li>A programmatic label for a control or form input field does not convey the purpose of the control or input, so people who are blind and/or use a screen reader may not understand what the control does or what data to enter. This occurs on the following page(s): Users; Notifications; GitLab Duo Chat; Issue Boards; New Feature Flag; Repository; Branches; Search and Filter; Merge requests details - Changes tab; DevOps Reports; Project Overview; Value Stream Analytics; Date Picker; New Tag; Policies; Get started with GitLab Pages; Dependencies; Members.</li>
          <li>Multiple buttons have identical programmatic labels but different functionality, and there is no programmatic context, so people who are blind and/or use a screen reader will not know or may be confused or misled about what each button does. This occurs on the following page(s): Users; Issue Boards; Pipe Line Editor; Jobs - All; Vulnerability report; Run Pipe Line; Releases; New Feature Flag; Repository; New value stream dialog; Security configuration; Background - Corn; Search and Filter; Merge requests details - Changes tab; Issue details; Labels - All tab; Environments; Kubernetes Cluster; DevOps Reports; New issue; Project Overview; Merge requests details - Pipelines tab; Merge requests details - Overview tab; General; Schedule new pipeline; Monitor Settings; Web Hooks; Pipelines details; New Merge Request; Get started with GitLab Pages; Commits; Pipeline; Merge requests details -Commits tab; Milestones; Project audit events; Feature Flags; Members.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-visible" rel="nofollow noopener noreferrer" target="_blank"><strong>2.4.7 Focus Visible</strong></a> (Level AA)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.2.4.7 (Web)</li>
          <li>10.2.4.7 (Non-web document)</li>
          <li>11.2.4.7 (Open Functionality Software)</li>
          <li>11.2.4.7 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: In most cases, it is visually apparent which page element is currently receiving keyboard focus. The following exceptions exist:</p>
        <ul>
          <li>An interactive element (such as a link, button, or form input) does not have a visual focus indicator, so sighted people who use a keyboard to navigate content will not know when that element is receiving focus. This occurs on the following page(s): Create or import your first project.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum" rel="nofollow noopener noreferrer" target="_blank"><strong>2.4.11 Focus Not Obscured (Minimum)</strong></a> (Level AA 2.2 only)</p>
        <p>EN 301 549 Criteria – Does not apply</p>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: When most user interface components receive keyboard focus, each component is not entirely hidden due to author-created content. The following exceptions exist:</p>
        <ul>
          <li>A focused element is completely covered by other author-created content, which may cause people who use the keyboard to navigate content to become disoriented. This occurs on the following page(s): Users; GitLab Duo Chat; Jobs - All; Vulnerability report; Repository; Background - Corn; Issue details; Environments; New issue; Bulk Edit; Merge requests details - Overview tab; Admin Dashboard; Instance subscription; Pipelines details.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG22/#dragging-movements" rel="nofollow noopener noreferrer" target="_blank"><strong>2.5.7 Dragging Movements</strong></a> (Level AA 2.2 only)</p>
        <p>EN 301 549 Criteria – Does not apply</p>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: Most functionality that uses a dragging movement can be achieved by a single pointer without dragging, unless dragging is essential or the functionality is determined by the user agent and not modified by the author. The following exceptions exist:</p>
        <ul>
          <li>Some functionality relies on a dragging movement with no single-pointer, single touch alternative, making it difficult or impossible for persons with motor difficulties and users of assistive technology to perform the gesture on the following page(s): Labels - All tab.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG22/#target-size-minimum" rel="nofollow noopener noreferrer" target="_blank"><strong>2.5.8 Target Size (Minimum)</strong></a> (Level AA 2.2 only)</p>
        <p>EN 301 549 Criteria – Does not apply</p>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: The size of the target for most clickable controls is at least 24 by 24 CSS pixels, except where the target size is determined by the user agent; there is a different control with equivalent functionality; the target is inline with text; the presentation of the target is essential to the function or otherwise exempted under the rule; or each control is spaced such that a 24-pixel circle placed around the bounding box of the control will not intersect any similar circle for another control. The following exceptions exist:</p>
        <ul>
          <li>A target's hit area does not meet minimum 24x24 pixel size or spacing. making it difficult for users with hand tremors and those who have difficulty with fine motor movement to activate them accurately. This occurs on the following page(s): Issues list; Merge requests details - Overview tab; Merge requests list - All tab.</li>
          <li>A target's hit area does not meet minimum 24x24 pixel size or spacing. making it difficult for users with hand tremors and those who have difficulty with fine motor movement to activate them accurately on the following page(s): Users; Job Details; Issue Boards; Issues list; Vulnerability report; Background - Corn; Branches; Merge requests details - Changes tab; Issue details; Integrations; Project Overview; Merge requests details - Overview tab; Usage Quotas; Pipeline.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#meaning-other-lang-id" rel="nofollow noopener noreferrer" target="_blank"><strong>3.1.2 Language of Parts</strong></a> (Level AA)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.3.1.2 (Web)</li>
          <li>10.3.1.2 (Non-web document)</li>
          <li>11.3.1.2 (Open Functionality Software) – Does not apply</li>
          <li>11.3.1.2 (Closed Software) – Does not apply</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: On most pages, the language of each section of content that is different from the default language of the page is correctly identified and can be determined programmatically. The following exceptions exist:</p>
        <ul>
          <li>A portion of content on a page that is in a different language from the rest of the content on the page is not programmatically assigned the language for that portion of content, so screen readers may mispronounce that part of the content. This occurs on the following page(s): Preferences; Language drop-down.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-locations" rel="nofollow noopener noreferrer" target="_blank"><strong>3.2.3 Consistent Navigation</strong></a> (Level AA)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.3.2.3 (Web)</li>
          <li>10.3.2.3 (Non-web document) – Does not apply</li>
          <li>11.3.2.3 (Open Functionality Software) – Does not apply</li>
          <li>11.3.2.3 (Closed Software) – Does not apply</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software) – Does not apply to non-web software</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs) – Does not apply to non-web docs</li>
        </ul>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: Navigation patterns that are repeated on web pages are presented in the same relative order each time they appear and do not change order when navigating through the site.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-functionality" rel="nofollow noopener noreferrer" target="_blank"><strong>3.2.4 Consistent Identification</strong></a> (Level AA)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.3.2.4 (Web)</li>
          <li>10.3.2.4 (Non-web document) – Does not apply</li>
          <li>11.3.2.4 (Open Functionality Software) – Does not apply</li>
          <li>11.3.2.4 (Closed Software) – Does not apply</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software) – Does not apply to non-web software</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs) – Does not apply to non-web docs</li>
        </ul>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: Labels, names, and text alternatives for content that have the same functionality across multiple web pages are consistently identified.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#minimize-error-suggestions" rel="nofollow noopener noreferrer" target="_blank"><strong>3.3.3 Error Suggestion</strong></a> (Level AA)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.3.3.3 (Web)</li>
          <li>10.3.3.3 (Non-web document)</li>
          <li>11.3.3.3 (Open Functionality Software)</li>
          <li>11.3.3.3 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: If input errors are automatically detected, suggestions are provided in text for correcting the input in a timely and accessible manner before the data is submitted to the server.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="http://www.w3.org/TR/WCAG20/#minimize-error-reversible" rel="nofollow noopener noreferrer" target="_blank"><strong>3.3.4 Error Prevention (Legal, Financial, Data)</strong></a> (Level AA)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.3.3.4 (Web)</li>
          <li>10.3.3.4 (Non-web document)</li>
          <li>11.3.3.4 (Open Functionality Software)</li>
          <li>11.3.3.4 (Closed Software)</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508</p>
        <ul>
          <li>501 (Web)(Software)</li>
          <li>504.2 (Authoring Tool)</li>
          <li>602.3 (Support Docs)</li>
        </ul>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: If the user can change or delete legal transactions, financial transactions, student exam responses, or data transactions that are unrecoverable or unintentionally modify or delete data, the changes and/or deletions are reversible, verified, or confirmed.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum" rel="nofollow noopener noreferrer" target="_blank"><strong>3.3.8 Accessible Authentication (Minimum)</strong></a> (Level AA 2.2 only)</p>
        <p>EN 301 549 Criteria – Does not apply</p>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: A cognitive function test (such as remembering a password or solving a puzzle) is not required for any step in an authentication process unless either another method is available that does not rely on a cognitive function test; help is available to assist the user in completing the test; or the test is to recognize objects or identify non-text content the user provided to the Web site.</p></td>
    </tr>
    <tr>
      <td>
        <p><a href="https://www.w3.org/TR/WCAG21/#status-messages" rel="nofollow noopener noreferrer" target="_blank"><strong>4.1.3 Status Messages</strong></a> (Level AA 2.1 and 2.2)</p>
        <p>Also applies to:</p>
        <p>EN 301 549 Criteria</p>
        <ul>
          <li>9.4.1.3 (Web)</li>
          <li>10.4.1.3 (Non-web document)</li>
          <li>11.4.1.3 (Open Functionality Software)</li>
          <li>11.4.1.3 (Closed Software) – Does not apply</li>
          <li>11.8.2 (Authoring Tool)</li>
          <li>12.1.2 (Product Docs)</li>
          <li>12.2.4 (Support Docs)</li>
        </ul>
        <p>Revised Section 508 – Does not apply</p>
      </td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Web: Most, if not all, status messages cannot be programmatically determined and presented by assistive technologies without receiving focus. The following issues exist:</p>
        <ul>
          <li>A status message is not automatically announced by the screen reader, so people who are blind and/or use a screen reader or other assistive technology may completely miss the status message or they may not hear it in a timely fashion. This occurs on the following page(s): Users; Project wide; Preferences; GitLab Duo Chat; Issue Boards; Pipe Line Editor; Issues list; Vulnerability report; Compare revisions; New Feature Flag; Repository; New value stream dialog; Repository Graph; Edit Profile; Search and Filter; Rich text editor; Merge requests details - Changes tab; Add new Access token; Kubernetes Cluster; GitLab is better with colleagues!' dialog; Integrations; New issue; Project Overview; Merge requests details - Pipelines tab; Merger Request; General; Repository Analytics; Create or import your first project; Schedule new pipeline; Explore Topics; Groups; Merge requests list - All tab; Monitor Settings; Give feedback; New Tag; Keyboard Shortcuts dialog; New Merge Request; Policies; Get started with GitLab Pages; Pipeline; Dependencies; Create a blank Project; Project audit events; Members; Verify Screen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Table 3: Success Criteria, Level AAA

Notes: Not evaluated

## Revised Section 508 Report

### Chapter 3: [Functional Performance Criteria](https://www.access-board.gov/ict/#chapter-3-functional-performance-criteria) (FPC)

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
      <td><p>302.1 Without Vision</p></td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Web: Most, if not all, functionality is not usable without vision. Examples are noted in:</p>
        <ul>
          <li>1.1.1 Non-Text Content</li>
          <li>1.3.1 Info and Relationships</li>
          <li>1.3.2 Meaningful Sequence</li>
          <li>1.4.1 Use of Color</li>
          <li>2.1.1 Keyboard</li>
          <li>2.2.1 Timing Adjustable</li>
          <li>2.4.2 Page Titled</li>
          <li>2.4.3 Focus Order</li>
          <li>2.4.4 Link Purpose (in context)</li>
          <li>2.4.6 Headings and Labels</li>
          <li>3.1.1 Language of Page</li>
          <li>3.1.2 Language of Parts</li>
          <li>3.2.2 On Input</li>
          <li>4.1.2 Name, Role, Value</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>302.2 With Limited Vision</p></td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Web: Most, if not all, functionality is not usable with limited vision. Examples are noted in:</p>
        <ul>
          <li>1.1.1 Non-Text Content</li>
          <li>1.3.1 Info and Relationships</li>
          <li>1.3.2 Meaningful Sequence</li>
          <li>1.4.1 Use of Color</li>
          <li>1.4.3 Contrast (minimum)</li>
          <li>1.4.4 Resize Text</li>
          <li>2.1.1 Keyboard</li>
          <li>2.2.1 Timing Adjustable</li>
          <li>2.4.2 Page Titled</li>
          <li>2.4.3 Focus Order</li>
          <li>2.4.4 Link Purpose (in context)</li>
          <li>2.4.6 Headings and Labels</li>
          <li>2.4.7 Focus Visible</li>
          <li>3.1.1 Language of Page</li>
          <li>3.1.2 Language of Parts</li>
          <li>3.2.2 On Input</li>
          <li>3.3.1 Error Identification</li>
          <li>3.3.2 Labels or Instructions</li>
          <li>4.1.2 Name, Role, Value</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>302.3 Without Perception of Color</p></td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: Most functionality is usable without perception of color. Exceptions are noted in:</p>
        <ul>
          <li>1.4.1 Use of Color</li>
          <li>1.4.3 Contrast (minimum)</li>
          <li>3.3.1 Error Identification</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>302.4 Without Hearing</p></td>
      <td><p>Supports</p></td>
      <td><p>All functionality in the website is usable without hearing.</p></td>
    </tr>
    <tr>
      <td><p>302.5 With Limited Hearing</p></td>
      <td><p>Supports</p></td>
      <td><p>All functionality in the website is usable with limited hearing.</p></td>
    </tr>
    <tr>
      <td>302.6 Without Speech</td>
      <td>Not Applicable</td>
      <td>The product does not require the use of speech.</td>
    </tr>
    <tr>
      <td><p>302.7 With Limited Manipulation</p></td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Web: Most, if not all, functionality is not usable with limited manipulation and/or requires fine motor control or simultaneous manual operations. Examples are noted in:</p>
        <ul>
          <li>2.1.1 Keyboard</li>
          <li>2.2.1 Timing Adjustable</li>
          <li>2.4.2 Page Titled</li>
          <li>2.4.3 Focus Order</li>
          <li>2.4.4 Link Purpose (in context)</li>
          <li>2.4.6 Headings and Labels</li>
          <li>2.4.7 Focus Visible</li>
          <li>4.1.2 Name, Role, Value</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>302.8 With Limited Reach and Strength</p></td>
      <td><p>Supports</p></td>
      <td><p>All functionality is usable with limited reach and strength.</p></td>
    </tr>
    <tr>
      <td><p>302.9 With Limited Language, Cognitive, and Learning Abilities</p></td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Web: Most, if not all, functionality is not usable by people with limited language, cognitive, and learning abilities. People with cognitive disabilities have varying needs for features that allow them to adapt content and work with assistive technology. Examples are noted in:</p>
        <ul>
          <li>1.1.1 Non-Text Content</li>
          <li>1.3.1 Info and Relationships</li>
          <li>1.3.2 Meaningful Sequence</li>
          <li>1.4.1 Use of Color</li>
          <li>2.1.1 Keyboard</li>
          <li>2.2.1 Timing Adjustable</li>
          <li>2.2.2 Pause, Stop, Hide</li>
          <li>2.4.2 Page Titled</li>
          <li>2.4.3 Focus Order</li>
          <li>2.4.4 Link Purpose (in context)</li>
          <li>2.4.6 Headings and Labels</li>
          <li>2.4.7 Focus Visible</li>
          <li>3.1.1 Language of Page</li>
          <li>3.1.2 Language of Parts</li>
          <li>3.2.2 On Input</li>
          <li>3.3.1 Error Identification</li>
          <li>3.3.2 Labels or Instructions</li>
          <li>4.1.2 Name, Role, Value</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Chapter 4: [Hardware](https://www.access-board.gov/ict/#chapter-4-hardware)

Notes: The ICT covered by this report is not hardware. As such, the requirements of this chapter do not apply.

### Chapter 5: [Software](https://www.access-board.gov/ict/#chapter-5-software)

<table class="gl-mb-6 table-compact">
  <thead>
    <tr>
      <th style="width: 40%;">Criteria</th>
      <th>Conformance Level</th>
      <th>Remarks and Explanations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p>501.1 Scope – Incorporation of WCAG 2.0 AA</p></td>
      <td><p>See <a href="#wcag-22-report">WCAG 2.2</a> section</p></td>
      <td><p>See information in WCAG 2.2 section</p></td>
    </tr>
    <tr>
      <td><p><a href="https://www.access-board.gov/ict/#502-interoperability-assistive-technology" rel="nofollow noopener noreferrer" target="_blank"><strong><em>502 Interoperability with Assistive Technology</em></strong></a></p></td>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p>502.2.1 User Control of Accessibility Features</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>This Web site is not platform software, so this requirement does not apply.</p></td>
    </tr>
    <tr>
      <td><p>502.2.2 No Disruption of Accessibility Features</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>This website does not have accessibility features.</p></td>
    </tr>
    <tr>
      <td><strong><em><p>502.3 Accessibility Services</p></em></strong></td>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p>502.3.1 Object Information</p></td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Web: The role, state(s), properties, boundary, name, and description of most, if not all, objects cannot be programmatically determined, so those attributes cannot be perceived and conveyed by assistive technology. Examples are noted in:</p>
        <ul>  
          <li>4.1.2. Name, Role, Value</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>502.3.2 Modification of Object Information</p></td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: For most objects that allow the user to set their respective properties and/or state, the act of setting a property or state is available programmatically, so that it can be perceived and performed using assistive technology. Exceptions are noted in:</p>
        <ul>  
          <li>4.1.2. Name, Role, Value</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>502.3.3 Row, Column, and Headers</p></td>
      <td><p>Web: Partially Supports</p></td>
      <td><p>In most instances when a data table is present, all information in the data cells and the row and/or column headers associated with each data cell are available programmatically, so they can be perceived and conveyed by assistive technology. Exceptions are noted in:</p>
      <ul>  
        <li>1.3.1 Info and Relationships</li>
      </ul>
    </td>
    </tr>
    <tr>
      <td><p>502.3.4 Values</p></td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: For most objects that have a current value or have a set or range of values associated with the object, the value(s) is available programmatically, so it can be perceived and conveyed by assistive technology. Exceptions include:</p>
        <ul>  
          <li>4.1.2. Name, Role, Value</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>502.3.5 Modification of Values</p></td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: For most objects that allow the user to set or modify its value, the act of setting a value is available programmatically, so that it can be perceived and performed using assistive technology. Exceptions include:</p>
        <ul>  
          <li>4.1.2. Name, Role, Value</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>502.3.6 Label Relationships</p></td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: For most elements that act as a label for another element and elements that are labeled by another element, the labeling relationship is programmatically determinable, so it can be perceived and conveyed by assistive technology. Exceptions are noted in:</p>
        <ul>  
          <li>1.3.1 Info and Relationships</li>
          <li>4.1.2. Name, Role, Value</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>502.3.7 Hierarchical Relationships</p></td>
      <td><p>Web: Partially Supports</p></td>
      <td><p>For most elements that have a parent-child relationship, those relationships are programmatically determinable, so they can be perceived by assistive technology. Exceptions are noted in:</p>
      <ul>  
        <li>1.3.1 Info and Relationships</li>
      </ul>
    </td>
    </tr>
    <tr>
      <td><p>502.3.8 Text</p></td>
      <td><p>Web: Supports</p></td>
      <td><p>All text, text attributes (such as whether text is static or editable), and text boundaries (such as when text receives visual focus) are programmatically determinable, so they can be perceived and conveyed by assistive technology.</p></td>
    </tr>
    <tr>
      <td><p>502.3.9 Modification of Text</p></td>
      <td><p>Web: Supports</p></td>
      <td><p>When text can be set by the user (such as by typing in an input field), the act of adding or modifying text is available programmatically, so that it can be perceived and performed using assistive technology.</p></td>
    </tr>
    <tr>
      <td><p>502.3.10 List of Actions</p></td>
      <td><p>Web: Partially Supports</p></td>
      <td><p>For most of the elements on which one or more actions may be performed, all of those actions are programmatically determinable, so that each action can be perceived and conveyed by assistive technology. Exceptions are noted in:</p>
      <ul>  
        <li>4.1.2. Name, Role, Value</li>
      </ul>
    </td>
    </tr>
    <tr>
      <td><p>502.3.11 Actions on Objects</p></td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>For most of the elements on which one or more actions may be performed, all of those actions are available programmatically, so that each action can be performed using assistive technology. Exceptions include:</p>
        <ul>  
          <li>2.1.1 Keyboard</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>502.3.12 Focus Cursor</p></td>
      <td><p>Web: Supports</p></td>
      <td><p>The position and content of the focus indicator, text insertion point, and/or text selector are programmatically determinable, so that focus position and content can be perceived and conveyed by assistive technology.</p></td>
    </tr>
    <tr>
      <td><p>502.3.13 Modification of Focus Cursor</p></td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>This web site does not allow modification of the focus indicator, text insertion point, or text selector indicator.</p></td>
    </tr>
    <tr>
      <td><p>502.3.14 Event Notification</p></td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Most, if not all, status messages relevant to user interactions are not available to, and are not presented by, assistive technology. Examples are noted in:</p>
        <ul>  
          <li>4.1.3 Status Messages</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>502.4 Platform Accessibility Features</p></td>
      <td>Web: Not Applicable</td>
      <td><p>Web: The website is not platform software, so this requirement does not apply.</p></td>
    </tr>
    <tr>
      <p>
        <td><a href="https://www.access-board.gov/ict/#503-applications" rel="nofollow noopener noreferrer" target="_blank"><strong><em>503 Applications</em></strong></a></td>
      </p>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p>503.2 User Preferences</p></td>
      <td><p>Not Applicable</p></td>
      <td></td>
    </tr>
    <tr>
      <td><p>503.3 Alternative User Interfaces</p></td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: The website or application does not offer an alternative user interface.</p></td>
    </tr>
    <tr>
      <td><p><strong><em>503.4 User Controls for Captions and Audio Description</em></strong></p></td>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p>503.4.1 Caption Controls</p></td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: This web site does not contain media with an audio component that has closed captions.</p></td>
    </tr>
    <tr>
      <td><p>503.4.2 Audio Description Controls</p></td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: This website does not contain media with a video component that offers audio descriptions.</p></td>
    </tr>
    <tr>
      <td><p><a href="https://www.access-board.gov/ict/#504-authoring-tools" rel="nofollow noopener noreferrer" target="_blank"><strong><em>504 Authoring Tools</em></strong></a></p></td>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p>504.2 Content Creation or Editing</p></td>
      <td><p>See <a href="#wcag-22-report">WCAG 2.2</a> section</p></td>
      <td><p>See information in WCAG 2.2 section</p></td>
    </tr>
    <tr>
      <td><p>504.2.1 Preservation of Information Provided for Accessibility in Format Conversion</p></td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: This web site is not an authoring tool.</p></td>
    </tr>
    <tr>
      <td><p>504.2.2 PDF Export</p></td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: This web site is not an authoring tool.</p></td>
    </tr>
    <tr>
      <td><p>504.3 Prompts</p></td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: This web site is not an authoring tool.</p></td>
    </tr>
    <tr>
      <td>504.4 Templates</td>
      <td>Web: Not Applicable</td>
      <td>Web: This web site is not an authoring tool.</td>
    </tr>
  </tbody>
</table>

### Chapter 6: [Support Documentation and Services](https://www.access-board.gov/ict/#chapter-6-support-documentation-and-services)

<table class="gl-mb-6 table-compact">
  <thead>
    <tr>
      <th style="width: 40%;">Criteria</th>
      <th>Conformance Level</th>
      <th>Remarks and Explanations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p><strong><em>601.1 Scope</em></strong></p></td>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p><a href="https://www.access-board.gov/ict/#602-support-documentation" rel="nofollow noopener noreferrer" target="_blank"><strong><em>602 Support Documentation</em></strong></a></p></td>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p>602.2 Accessibility and Compatibility Features</p></td>
      <td><p>Not Applicable</p></td>
      <td></td>
    </tr>
    <tr>
      <td><p>602.3 Electronic Support Documentation</p></td>
      <td><p>See <a href="#wcag-22-report">WCAG 2.2</a> section</p></td>
      <td><p>See information in WCAG 2.2 section</p></td>
    </tr>
    <tr>
      <td><p>602.4 Alternate Formats for Non-Electronic Support Documentation</p></td>
      <td><p>Not Applicable</p></td>
      <td></td>
    </tr>
    <tr>
      <td><p><a href="https://www.access-board.gov/ict/#603-support-services" rel="nofollow noopener noreferrer" target="_blank"><strong><em>603 Support Services</em></strong></a></p></td>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p>603.2 Information on Accessibility and Compatibility Features</p></td>
      <td><p>Not Applicable</p></td>
      <td></td>
    </tr>
    <tr>
      <td><p>603.3 Accommodation of Communication Needs</p></td>
      <td><p>Not Applicable</p></td>
      <td></td>
    </tr>
  </tbody>
</table>

## EN 301 549 Report

### Chapter 4: [Functional Performance Statements](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=20) (FPS)

<table class="gl-mb-6 table-compact">
  <thead>
    <tr>
      <th style="width: 40%;">Criteria</th>
      <th>Conformance Level</th>
      <th>Remarks and Explanations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p>4.2.1 Usage without vision</p></td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Web: Most, if not all, functionality is not usable without vision. Examples are noted in:</p>
        <ul>
          <li>1.1.1 Non-Text Content</li>
          <li>1.3.1 Info and Relationships</li>
          <li>1.3.2 Meaningful Sequence</li>
          <li>1.4.1 Use of Color</li>
          <li>2.1.1 Keyboard</li>
          <li>2.1.4 Character Key Shortcuts</li>
          <li>2.2.1 Timing Adjustable</li>
          <li>2.4.2 Page Titled</li>
          <li>2.4.3 Focus Order</li>
          <li>2.4.4 Link Purpose (in context)</li>
          <li>2.4.6 Headings and Labels</li>
          <li>3.1.1 Language of Page</li>
          <li>3.1.2 Language of Parts</li>
          <li>3.2.2 On Input</li>
          <li>3.3.1 Error Identification</li>
          <li>4.1.2 Name, Role, Value</li>
          <li>4.1.3 Status Messages</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>4.2.2 Usage with limited vision</p></td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Web: Most, if not all, functionality is not usable with limited vision. Examples are noted in:</p>
        <ul>
          <li>1.1.1 Non-Text Content</li>
          <li>1.3.1 Info and Relationships</li>
          <li>1.3.2 Meaningful Sequence</li>
          <li>1.4.1 Use of Color</li>
          <li>1.4.3 Contrast (minimum)</li>
          <li>1.4.4 Resize Text</li>
          <li>1.4.10 Non-Text Contrast</li>
          <li>1.4.11 Non-Text Contrast</li>
          <li>1.4.13 Content on Hover or Focus</li>
          <li>2.1.1 Keyboard</li>
          <li>2.2.1 Timing Adjustable</li>
          <li>2.4.2 Page Titled</li>
          <li>2.4.3 Focus Order</li>
          <li>2.4.4 Link Purpose (in context)</li>
          <li>2.4.6 Headings and Labels</li>
          <li>2.4.7 Focus Visible</li>
          <li>3.1.1 Language of Page</li>
          <li>3.1.2 Language of Parts</li>
          <li>3.2.2 On Input</li>
          <li>3.3.1 Error Identification</li>
          <li>3.3.2 Labels or Instructions</li>
          <li>4.1.2 Name, Role, Value</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>4.2.3 Usage without perception of colour</p></td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: Most functionality is usable without perception of color. Exceptions are noted in:</p>
        <ul>
          <li>1.4.1 Use of Color</li>
          <li>1.4.3 Contrast (minimum)</li>
          <li>1.4.11 Non-Text Contrast</li>
          <li>3.3.1 Error Identification</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>4.2.4 Usage without hearing</p></td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: All functionality in the website is usable without hearing.</p></td>
    </tr>
    <tr>
      <td><p>4.2.5 Usage with limited hearing</p></td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: All functionality in the website is usable with limited hearing.</p></td>
    </tr>
    <tr>
      <td><p>4.2.6 Usage with no or limited vocal capability</p></td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: The product does not require the use of speech or other vocal output.</p></td>
    </tr>
    <tr>
      <td><p>4.2.7 Usage with limited manipulation or strength</p></td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Web: Most, if not all, functionality is not usable by people with limited manipulation and/or requires manipulation, simultaneous action, or hand strength. Examples are noted in:</p>
        <ul>
          <li>1.3.5 Identify Input Purpose</li>
          <li>1.4.13 Content on Hover or Focus</li>
          <li>2.1.1 Keyboard</li>
          <li>2.1.4 Character Key Shortcuts</li>
          <li>2.2.1 Timing Adjustable</li>
          <li>2.4.2 Page Titled</li>
          <li>2.4.3 Focus Order</li>
          <li>2.4.4 Link Purpose (in context)</li>
          <li>2.4.6 Headings and Labels</li>
          <li>2.4.7 Focus Visible</li>
          <li>2.5.3 Label in Name</li>
          <li>4.1.2 Name, Role, Value</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>4.2.8 Usage with limited reach</p></td>
      <td><p>Web: Partially Supports</p></td>
      <td>
        <p>Web: All functionality is usable by people with limited reach.</p>
        <ul>
          <li>1.3.5 Identify Input Purpose</li>
          <li>1.4.13 Content on Hover or Focus</li>
          <li>2.1.4 Character Key Shortcuts</li>
          <li>2.5.3 Label in Name</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>4.2.9 Minimize photosensitive seizure triggers</p></td>
      <td><p>Web: Supports</p></td>
      <td><p>Web: All functionality may be operated in a mode that minimizes the potential for triggering photosensitive seizures.</p></td>
    </tr>
    <tr>
      <td><p>4.2.10 Usage with limited cognition, language or learning</p></td>
      <td><p>Web: Does Not Support</p></td>
      <td>
        <p>Web: Most, if not all, functionality is not usable by people with limited language, cognitive, and learning abilities. People with cognitive disabilities have varying needs for features that allow them to adapt content and work with assistive technology. Examples are noted in:</p>
        <ul>
          <li>1.1.1 Non-Text Content</li>
          <li>1.3.1 Info and Relationships</li>
          <li>1.3.2 Meaningful Sequence</li>
          <li>1.3.5 Identify Input Purpose</li>
          <li>1.4.1 Use of Color</li>
          <li>1.4.10 Non-Text Contrast</li>
          <li>1.4.13 Content on Hover or Focus</li>
          <li>2.1.1 Keyboard</li>
          <li>2.1.4 Character Key Shortcuts</li>
          <li>2.2.1 Timing Adjustable</li>
          <li>2.2.2 Pause, Stop, Hide</li>
          <li>2.4.2 Page Titled</li>
          <li>2.4.3 Focus Order</li>
          <li>2.4.4 Link Purpose (in context)</li>
          <li>2.4.6 Headings and Labels</li>
          <li>2.4.7 Focus Visible</li>
          <li>2.5.3 Label in Name</li>
          <li>3.1.1 Language of Page</li>
          <li>3.1.2 Language of Parts</li>
          <li>3.2.2 On Input</li>
          <li>3.3.1 Error Identification</li>
          <li>3.3.2 Labels or Instructions</li>
          <li>4.1.2 Name, Role, Value</li>
          <li>4.1.3 Status Messages</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><p>4.2.11 Privacy</p></td>
      <td><p>Web: Not Applicable</p></td>
      <td><p>Web: The web pages do not contain any privacy features.</p></td>
    </tr>
  </tbody>
</table>

### Chapter [5: Generic Requirements](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=23)

<table class="gl-mb-6 table-compact">
  <thead>
    <tr>
      <th style="width: 40%;">Criteria</th>
      <th>Conformance Level</th>
      <th>Remarks and Explanations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><p><strong><em>5.1 Closed functionality</em></strong></p></td>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p><strong><em>5.1.2 General</em></strong></p></td>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p><strong><em>5.1.2.1 Closed functionality</em></strong></p></td>
      <td><p>See 5.2 through 13</p></td>
      <td><p>See information in 5.2 through 13</p></td>
    </tr>
    <tr>
      <td><p><strong><em>5.1.2.2 Assistive technology</em></strong></p></td>
      <td><p>See 5.1.3 through 5.1.6</p></td>
      <td><p>See information in 5.1.3 through 5.1.6</p></td>
    </tr>
    <tr>
      <td><p><strong><em>5.1.3 Non-visual access</em></strong></p></td>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.1 Audio output of visual information</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.2 Auditory output delivery including speech</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.3 Auditory output correlation</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.4 Speech output user control</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.5 Speech output automatic interruption</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.6 Speech output for non-text content</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.7 Speech output for video information</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.8 Masked entry</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.9 Private access to personal data</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.10 Non-interfering audio output</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.11 Private listening volume</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.12 Speaker volume</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.13 Volume reset</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.14 Spoken languages</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.15 Non-visual error identification</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.3.16 Receipts, tickets, and transactional outputs</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.4 Functionality closed to text enlargement</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.5 Visual output for auditory information</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p><strong><em>5.1.6 Operation without keyboard interface</em></strong></p></td>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p><strong><em>5.1.6.1 Closed functionality</em></strong></p></td>
      <td><p>See 5.1.3.1 through 5.1.3.16</p></td>
      <td><p>See information in 5.1.3.1 through 5.1.3.16</p></td>
    </tr>
    <tr>
      <td><p>5.1.6.2 Input focus</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.1.7 Access without speech</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have closed functionality.</p></td>
    </tr>
    <tr>
      <td><p>5.2 Activation of accessibility features</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not have specific documented accessibility features.</p></td>
    </tr>
    <tr>
      <td><p>5.3 Biometrics</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>Biometrics are not used to access or use the website.</p></td>
    </tr>
    <tr>
      <td><p>5.4 Preservation of accessibility information during conversion</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not convert content.</p></td>
    </tr>
    <tr>
      <td><p><strong><em>5.5 Operable parts</em></strong></p></td>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p>5.5.1 Means of operation</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product has only non-mechanical operable parts, such as on-screen buttons, which do not require grasping, pinching, or twisting of the wrist to operate</p></td>
    </tr>
    <tr>
      <td><p>5.5.2 Operable parts discernibility</p></td>
      <td><p>Does Not Support</p></td>
      <td><p>The product has only non-mechanical operable parts, such as on-screen buttons. Most operable parts have an accessible name which enables them to be discernible without user vision. Exceptions are noted in <strong>1.3.1 Info and Relationships, 2.4.6 Headings and Labels and 4.1.2 Name, Role, Value</strong>.</p></td>
    </tr>
    <tr>
      <td><p><strong><em>5.6 Locking or toggle controls</em></strong></p></td>
      <td><p>Heading cell – no response required</p></td>
      <td><p>Heading cell – no response required</p></td>
    </tr>
    <tr>
      <td><p>5.6.1 Tactile or auditory status</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>Tactile or auditory status is not included in the product.</p></td>
    </tr>
    <tr>
      <td><p>5.6.2 Visual status</p></td>
      <td><p>Supports</p></td>
      <td><p>Visual status of controls is discernable in the product.</p></td>
    </tr>
    <tr>
      <td><p>5.7 Key repeat</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>Key repeat functionality is not found in the product.</p></td>
    </tr>
    <tr>
      <td><p>5.8 Double-strike key acceptance</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>Double-strike key acceptance is not found in the product.</p></td>
    </tr>
    <tr>
      <td><p>5.9 Simultaneous user actions</p></td>
      <td><p>Not Applicable</p></td>
      <td><p>The product does not require simultaneous user actions to achieve any functionality.</p></td>
    </tr>
  </tbody>
</table>

### Chapter [6: ICT with Two-Way Voice Communication](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=30)

Notes: Not Applicable

### Chapter [7: ICT with Video Capabilities](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=35)

Notes: Not Applicable

### Chapter [8: Hardware](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=37)

Notes: The ICT covered by this report is not hardware. As such, the requirements of this chapter do not apply.

### Chapter [9: Web](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=45) *(see [WCAG 2.2 section](#wcag-22-report))*

Notes: Not Applicable

### Chapter [10: Non-Web Documents](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=52)

Notes: Not Applicable

### Chapter [11: Software](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=64)

Notes: Not Applicable

### Chapter [12: Documentation and Support Services](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=84)

Notes: Not Applicable

### Chapter [13: ICT Providing Relay or Emergency Service Access](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=86)

Notes: Not Applicable

## Legal Disclaimer (GitLab)

*This document is provided for information purposes only and the contents hereof are subject to change without notice. GitLab does not warrant that this document is error-free, nor does it provide any other warranties or conditions, whether expressed orally or implied in law, including implied warranties and conditions of merchantability or fitness for a particular purpose. GitLab specifically disclaims any liability with respect to this document and no contractual obligations are formed either directly or indirectly by this document. Any modification or customization to the subject product may render some or all of this document to become inapplicable. Determination of compliance with applicable accessibility requirements is the sole responsibility of the purchaser. GitLab further makes no representation concerning the ability of assistive technologies or other products to interoperate with GitLab products. This document addresses the named product(s) only and not prerequisite products for which GitLab supplies restricted use licenses.*
