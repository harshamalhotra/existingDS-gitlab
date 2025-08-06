---
name: Date picker
description: The date picker allows a user to choose and/or input a date by using a calendar dropdown or by typing the date into a text field.
related:
  - text-input
---

## Examples

### GlDatepicker

<story-viewer component="base-datepicker" title="Date picker"></story-viewer>

<story-viewer component="base-daterange-picker" title="Date range picker"></story-viewer>

<story-viewer component="base-daterange-picker" story="with-dates-selected-and-tooltip" title="Date range picker with maximum range indicator"></story-viewer>

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/%F0%9F%93%99-Component-library?type=design&node-id=425-13&mode=design)

### GlFormDate

`GlFormDate` uses native browser `<input type="date">` date picker interface. Styling options are restricted and determined by browser and operating system. It provides improved accessibility for keyboard and screen reader users, and improved mobile touch controls.

<story-viewer component="base-form-form-date" title="Form date input"></story-viewer>

## Structure

<figure-img alt="Numbered diagram of a date picker structure" label="Date picker structure" src="/img/date-picker-structure.svg"></figure-img>

1. **Label**: Text associated with the text field.
1. **Text field**: Input element that gets populated with a date.
1. **Calendar button**: Opens the calendar dropdown.
1. **Clear button**: Clears the text field content.
1. **Calendar dropdown**: Dropdown showing the month.

<todo>Update structure with date range limit indicator.</todo>

## Guidelines

### When to use

- Choose a date from a calendar to populate a text field.

### When not to use

- If a user needs to enter a familiar date, like a birthday, consider using a regular [text input](/components/text-input) without the date picker functionality instead (see note in the [Reference](#reference) section).

### When to use either component

Use the following guidelines to choose the right component in most cases:

1. Does choosing a date perform an immediate action?
   - **YES**: → Use `GlDatepicker`
   - **NO**: → Use `GlFormDate`
1. Is the date part of a submittable form?
   - **YES**: → Use `GlFormDate`
   - **NO**: → Use `GlDatepicker`

### Variants

- **Date picker**: Choose a single date.
- **Date range picker**: Choose a start and end date.

### Behavior

- The user can either type a date into the text field or choose a day from the calendar dropdown which will populate the text field with the chosen date.
- A user can enter a date in different formats. For example, `January 22, 2020` or `22/01/2020`. The date picker translates the format to GitLab's default (ISO 8601) in the API.
- For date ranges, the date picker for the end ("To") date only allows a user to pick a date that is either equal to or after the start ("From") date. The days preceding the start date will be disabled.
- For date ranges, the ending date month should initially default to the same month chosen for the start date.
- On smaller viewports, the two date text fields in a date range picker are full-width and vertically stacked so the user’s language reading direction doesn’t have an effect on the order.

### Content

- The label for a date picker can specify what the date selection is for, while the date range picker labels should be "From" for the start date and "To" for the end date.
- The text field uses "YYYY-MM-DD" as placeholder text to indicate the expected format of time to be entered.
- The text field accepts all special characters and numbers.
- The current month (MM) is the default month shown in the calendar dropdown.
- The order of the “From” and “To” text fields should match the user’s reading language setting (left-to-right by default).
- When the date range picker limits the number of selectable days, indicate it in the UI with text that summarizes the number of days currently selected, followed by an [info icon](https://gitlab-org.gitlab.io/gitlab-svgs/?q=~information-o). The tooltip on the info icon should clarify the date range limit.

### Accessibility

<todo>Add accessibility notes.</todo>

## Reference

- In Adrian Roselli's article, _[Maybe You Don't Need a Date Picker](https://adrianroselli.com/2019/07/maybe-you-dont-need-a-date-picker.html)_, he states that "Users generally do not want a complex date picker every time you ask for any date. At least not users with a keyboard." He follows the [robustness principle](https://en.wikipedia.org/wiki/Robustness_principle) where you should "be conservative in what you do, be liberal in what you accept from others" in his exploration. A date picker can simply be overwhelming for something as simple as entering a familiar date, especially for keyboard-only users. Anecdotally he backs this up with 20 years of research. To be clear though, he also mentions that a plain text field will not work "if you need to see chosen dates, unavailable dates, weekends, holidays, date spans, date ranges, dates where counts from start or end dates matter, and so on."
- In HTML5 an input with `type="date"` is available, but [accessibility support](https://a11ysupport.io/tech/html/input(type-date)_element) for screen readers and voice control is inconsistent.

## Code reference

### GlDatePicker

Be careful when binding a date value using `value` prop. `value` is a watched property and Date
picker will emit `input` event on _initial load_. Alternatively, use `defaultDate` to set the
initial date then receive updated date values through `input` events.

<story-viewer component="base-datepicker" title="GlDatePicker" view-mode="docs"></story-viewer>

### GlDaterangePicker

Daterange picker allows users to choose a date range by manually typing the start/end date
into the input fields or by using a calendar-like dropdown.

A `maxDateRange` can be specified in order to limit the maximum number of days the component
will allow to be selected i.e. if the start date is `2020-08-01` and `maxDateRange` is set to `10`,
the highest selectable end date would be `2020-08-11`. This value will be offset by `1` if
`sameDaySelection` is set to `true`. A `defaultMaxDate` will need to be
provided when making use of the `maxDateRange`.

By default, the component does not allow selection of the same start and end date.
In a scenario where this is required, the `sameDaySelection` property can be configured.
This is specifically useful when a single day selection is being defined as `2020-01-01 00:00:00`
to `2020-01-01 23:59:59` instead of `2020-01-01 00:00:00` to `2020-01-02 00:00:00`.

When `maxDateRange` is set it's a good idea to set the `tooltip` specifying the date range limit
and to indicate the number of days currently selected using the default slot. For example:

```vue
<template #default="{ daysSelected }">
  <span v-if="daysSelected > -1">{{ daysSelected }} days selected</span>
  <span v-else>No days selected</span>
</template>
```

The `daysSelected` slot prop is the effective date range, thus the value is increased by one when
`sameDaySelection` is set to `true`. When no date range has been selected the value is `-1`.

<note>If specifying a maxDateRange, it is good practice to include a date range indicator and tooltip.</note>

<story-viewer component="base-daterange-picker" title="GlDaterangePicker" view-mode="docs"></story-viewer>

### GlFormDate

`GlFormDate` allows users to choose and input a date using a keyboard by by using
browser implemented calendar controls, where available.

`GlFormDate` extends `<input type="date">` with an `<output>` for audible announcement
of selected date, in full format, by screen-readers.

#### Usage

On `change` the value is emitted in `YYYY-MM-DD` format.

#### Accessibility

`GlFormDate` is a form `<input>` and should have an accessible name using a `<label>`.

`GlFormGroup` can be used to label `GlFormDate`.

```html
<gl-form-group
  label="Enter date"
  label-for="input-id"
>
  <gl-form-date
    id="input-id"
  />
</gl-form-group>
```

<story-viewer component="base-form-form-date" title="GlFormDate" view-mode="docs"></story-viewer>
