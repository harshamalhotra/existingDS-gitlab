---
name: File uploader
description: File uploaders are used to upload files from your computer or device. The accepted file types will be determined by the context of the file uploader.
docs: in-progress
---

## Usage

A user should know what action is needed to upload the file and for what purpose. For example, the action “Upload avatar” paired with a “Choose file…” button.

After the upload begins, use the [spinner component](/components/spinner) and live text indicating the percentage complete. For example, “Uploading image - 87%.”

### Types

| Component type | Purpose |
| --- | --- |
| Single file uploader | Uploads a single file. For example, an avatar for your profile, group, or project.  |
| Multiple file uploader | Uploads one or more files in a single upload. For example, uploading multiple files to the design tab, a directory, or through the markdown textarea. |

### Dos and Dont’s - Single file uploader

| Do | Don’t |
| --- | --- |
| Show a “Choose file...“ button to select a file to upload. | Provide drag and drop functionality. |
| Provide an “Upload“ and “Cancel“ option after a file has been selected. | Prevent the user from canceling. |
| Include help text on maximum file size allowed (if any). |  |
| Provide a button for the user to remove an uploaded file. | Prevent the user from removing a file. |

### Dos and Dont’s - Multiple file uploader

| Do | Don’t |
| --- | --- |
| Create a dashed border around the file uploader to indicate the upload/dropzone area. | Exclude a description on how to upload a file. |
| Allow users to click the dropzone or drag and drop files to upload. | Provide only one way of uploading files. |
| Include help text on maximum file size allowed or maximum number of files allowed to upload (if any). |  |

## Demo

Todo: Add live component block with code example

## Specifications

### Design

<!--
  DESIGN SPECIFICATIONS, add a link here to the component-specific sketch-measure preview.
  All design specifications should live in the design repo under 'hosted/design-gitlab-specs/COMPONENTNAME-spec-previews'
  *** If there are max-width, min-width, or other specs that should be known about this component,
  please add it in Sketch Measure via a note.
  This link must ALWAYS be included.
-->

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Pajamas-UI-Kit?node-id=8000%3A1)

### Accessibility

Todo: Add accessibility specs
