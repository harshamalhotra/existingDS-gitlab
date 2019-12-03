---
name: Date picker
status: built
vueComponents:
  - GlDatepicker
related:
  - forms
  - dropdowns
---

Date picker allows users to choose and input a date through by manually typing the date into the input field or by using a calendar-like dropdown.

## Usage

The date picker comes in two parts: the input field and the date picker dropdown. The input field must use a placeholder text to indicate the expected format of time to be entered (e.g. "YYYY-MM-DD") and a calendar icon on the right edge to indicate that clicking on it will open a datepicker dropdown.

The user should be able to input the date by either typing it in or choosing a day from the datepicker dropdown. The user must never be forced to use only one of the two input methods.

[[Example:basic-date-picker]]

### Selecting a range of dates

A combination of two date pickers can be used for selecting a range of dates. The user can do so by selecting a start and end date. When implementing a range date picker, the following guidelines should be followed:

* The order of the “From” and “To” date input fields should match the user’s reading direction setting (left-to-right or right-to-left). On mobile devices, the two date input fields are full-width and stacked so the user’s reading direction shouldn’t have an effect on the order—the starting date field (“From”) is always on top, the ending date field (“To”) is always on the bottom. 
* Once a user selects the starting date (“From”), the date picker for the ending date (“To”) should only allow them to pick a date that is either equal or after that. The days preceding the start date should be disabled and thus not selectable. 
* The default month shown in the date picker dropdown should be the current month (M). If the user picks a start date (“From”) that’s in the future (for example M+1), the default month shown for the ending date (“To”) date picker dropdown should be that same month (M+1) and not the current month (M). This doesn’t apply for starting dates selected in the past. 

[[Example:basic-daterange-picker]]

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[Sketch Measure Preview for the Date picker](https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/datepicker-spec-previews/)
