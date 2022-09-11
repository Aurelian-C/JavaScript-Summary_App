# Date.prototype.toLocaleString()

The `toLocaleString()` method ==returns a string== with a language-sensitive representation of this date. In implementations with `Intl.DateTimeFormat` API support, this method simply calls `Intl.DateTimeFormat`.

## Syntax

```js
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

## Parameters

The `locales` and `options` arguments ==**customize** the behavior of the function== and let applications specify the language whose formatting conventions should be used.

`locales` (optional):

 A ==string== with a BCP 47 language tag, or an array of such strings.

`options` (optional): 

An ==object== *adjusting the output format*. Corresponds to the `options` parameter of the `Intl.DateTimeFormat()` constructor. If `weekday`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, and `fractionalSecondDigits` are all undefined, then `year`, `month`, `day`, `hour`, `minute`, `second` will be set to `"numeric"`.

> **Note**: These parameters correspond exactly to the `Intl.DateTimeFormat()` constructor's parameters.

## Return value

A ==string== representing the given date according to language-specific conventions.

In implementations with `Intl.DateTimeFormat`, this is equivalent to `new Intl.DateTimeFormat(locales, options).format(date)`.

## Examples

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned:

```js
const date = new Date(2012, 11, 12);
date.toLocaleString() // toLocaleString() without arguments depends on the implementation, the default locale, and the default time zone.
```

Using locales:

```js
const date = new Date(2012, 11, 12);

// US English uses month-day-year order and 12-hour time with AM/PM
date.toLocaleString('en-US'); // → "12/19/2012, 7:00:00 PM"

// British English uses day-month-year order and 24-hour time without AM/PM
date.toLocaleString('en-GB'); // → "20/12/2012 03:00:00"
```

The results provided by `toLocaleString()` can be customized using the `options` argument:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Request a weekday along with a long date
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

date.toLocaleString('de-DE', options) // → "Donnerstag, 20. Dezember 2012"
```

## Reference

1. [Date.prototype.toLocaleString() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)