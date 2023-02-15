---
name: File uploader
description: A file uploader is used to upload files from a computer or device to the application.
docs: in-progress
---

## Examples

<todo>Add examples.</todo>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=8000%3A0)

## Structure

<figure-img alt="Numbered diagram of a file uploader structure" label="File uploader structure" src="/img/file-uploader-structure.svg"></figure-img>

1. **Title**: Gives context to the file uploader.
1. **Choose file**: Button that triggers the file upload process.
1. **File name**: Name of the file once uploaded to the frontend.
1. **Help text**: Help text describing the upload process or requirements.
1. **Submit**: Once uploaded to the frontend, submits the file to the system.
1. **Removal**: Icon button that removes the file uploaded to the frontend.
1. **Container** (Multi-file uploader): Drop area for uploading multiple files.
1. **Icon** (Multi-file uploader): Icon indicating the element is for uploading files.
1. **Spinner** (Multi-file uploader): Spinner is visible when files are uploading.
1. **Loading text** (Multi-file uploader): Text displaying number of files currently uploading.
1. **Cancel** (Multi-file uploader): Cancel button to stop the upload.

## Guidelines

### When to use

- Users need to upload one or more files to the system.

### Variants

<todo>Add file uploader variants.</todo>

### Behavior

- Selecting a file uploads the file to the frontend.
- The upload loading state is indicated by the use of a [spinner](/components/spinner), showing the percent complete.
- Filename and submit button appear once a file is uploaded to the frontend.

### Accessibility

<todo>Add accessibility specs.</todo>
