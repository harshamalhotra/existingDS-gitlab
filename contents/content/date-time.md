---
name: Date and time
description: Dates and times clarify when an event occurred. The way they are formatted should be informative, not disruptive. While users can choose a preferred date and time format, there are occasions when we default to a specified format instead.
---

## Date and time options

### Absolute format

The absolute format clarifies the precise date and time that something occurred.

Absolute date and time information can be [localized](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) to display a user's local date and time or follow the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. See the [Guidelines](#Guidelines) section for more information about when dates should be localized, and when they should be shown in ISO 8601.
  - Localized dates display as `Jan 03, 2021` or are shortened to `Jan 03` when space is tight. Always show the full date and time data, along with the timezone, in a tooltip if the date is shortened. Both `dateStyle` and `timeStyle` should be set to medium.
  - ISO 8601 format is displayed `YYYY-MM-DD`. Time can also be appended to the end of the date if necessary as `HH:MM:SS`

### Relative format

The relative format communicates the approximate amount of time that has passed since an event occurred; whether that event occurred XX minute(s), hour(s), day(s), week(s), month(s), or year(s) ago. For example, it is used to communicate that an issue was opened `1 minute ago` or `10 months ago`.

When using the relative format, always display the absolute time in a tooltip following the [Guidelines](#guidelines) below.

## Guidelines

### Which format to use when

- Display date and time information in the absolute format unless [users specify they want to use relative formatting](https://docs.gitlab.com/ee/user/profile/preferences.html#use-relative-times) instead.
- If it's possible to detect the browser settings, display the localized time, for example `Jan 03, 2021`. Otherwise, fall back to displaying the date in ISO 8601: `YYYY-MM-DD` (time is optionally appended after the date, `HH:MM:SS`).

<figure class="figure" role="figure" aria-label="Date picker structure">
  <img class="figure-img" src="/img/date-time-format-flow-chart.svg" alt="Flow chart date and time format decision tree; read the guidelines to learn how to use absolute and relative time and date." role="img" />
</figure>

### Exceptions

In certain scenarios, the date and time are displayed in a specific format and the user's preference is overridden.

Use [absolute format](#absolute-format) when:
- Users need specific dates and/or times for technical, security, or legal reasons. For example, in an audit log, a tax form, or a security alert.
- Users would need to convert relative time to absolute time in order to complete a task.
- A range of time is displayed, for example in a date picker.

Use [relative format](#relative-format) when:
- Content is updated frequently and specifics are not critical. For example, a live newsfeed or notification.

### Adding timezone data

In situations where timezone context is important, for example in alerts or incidents, append the timezone information to the end of the date and time.
