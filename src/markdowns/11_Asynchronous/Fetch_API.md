# Fetch API

The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), but the new API provides a more powerful and flexible feature set.

For making a request and fetching a resource, use the [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) method. The `fetch()` method takes one mandatory argument, the path to the resource you want to fetch. It returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) to that request — as soon as the server responds with headers — **even if the server response is an HTTP error status**. Once a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) is retrieved, there are a number of methods available to define what the body content is and how it should be handled.

The `fetch` specification differs from `jQuery.ajax()` in three main ways:

- The Promise returned from `fetch()` **won't reject on HTTP error status** even if the response is an HTTP `404` or `500`. Instead, it will resolve normally (with `ok` status set to `false`), and it will only reject on network failure or if anything prevented the request from completing.
- `fetch()` won't send cross-origin cookies unless you set the credentials [init option](https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters) (to `include`).
  - In April 2018, the spec changed the default credentials policy to `'same-origin'`. The following browsers shipped an outdated native fetch, and were updated in these versions: Firefox 61.0b13, Safari 12, Chrome 68.
  - If you are targeting older versions of these browsers, be sure to include `credentials: 'same-origin'` [init option](https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters) on all API requests that may be affected by cookies/user login state.

## `fetch()` method

The global **`fetch()`** method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available. The promise resolves to the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object representing the response to your request.

A `fetch()` promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A `fetch()` promise *does not* reject on HTTP errors (`404`, etc.). Instead, a `then()` handler must check the [`Response.ok`](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) and/or [`Response.status`](https://developer.mozilla.org/en-US/docs/Web/API/Response/status) properties.

## Syntax

```js
fetch(resource)
fetch(resource, options)
```

## Parameters

### `resource`

This defines the resource that you wish to fetch. This can either be:

- A string or any other object with a [stringifier](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier) — including a [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) object — that provides the URL of the resource you want to fetch.
- A [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object.

### `options` _(optional)_

An object containing any custom settings that you want to apply to the request. The possible options are:

#### `method`

The request method, e.g., `GET`, `POST`.

#### `headers`

Any headers you want to add to your request, contained within a [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) object or an object literal with [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) values. Note that [some names are forbidden](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name).

#### `body`

Any body that you want to add to your request. Note that a request using the `GET` or `HEAD` method cannot have a body.

#### `mode`

The mode you want to use for the request, e.g., `cors`, `no-cors`, or `same-origin`.

#### `credentials`

Controls what browsers do with credentials ([cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies), [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) entries, and TLS client certificates). Must be one of the following strings:

- `omit`

  Tells browsers to exclude credentials from the request, and ignore any credentials sent back in the response (e.g., any [`Set-Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) header).

- `same-origin`

  Tells browsers to include credentials with requests to same-origin URLs, and use any credentials sent back in responses from same-origin URLs. **This is the default value.**

- `include`

  Tells browsers to include credentials in both same- and cross-origin requests, and always use any credentials sent back in responses.

#### `cache`

A string indicating how the request will interact with the browser's [HTTP cache](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching). The possible values, `default`, `no-store`, `reload`, `no-cache`, `force-cache`, and `only-if-cached`, are documented in the article for the [`cache`](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache) property of the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object.

#### `redirect`

How to handle a `redirect` response:

- `follow`: Automatically follow redirects. Unless otherwise stated the redirect mode is set to `follow`.
- `error`: Abort with an error if a redirect occurs.
- `manual`: Caller intends to process the response in another context. See [WHATWG fetch standard](https://fetch.spec.whatwg.org/#requests) for more information.

#### `referrer`

A string specifying the referrer of the request. This can be a same-origin URL, `about:client`, or an empty string.

#### `referrerPolicy`

Specifies the [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policies) to use for the request. May be one of `no-referrer`, `no-referrer-when-downgrade`, `same-origin`, `origin`, `strict-origin`, `origin-when-cross-origin`, `strict-origin-when-cross-origin`, or `unsafe-url`.

#### `integrity`

Contains the [subresource integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) value of the request (e.g., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).

#### `keepalive`

The `keepalive` option can be used to allow the request to outlive the page. Fetch with the `keepalive` flag is a replacement for the [`Navigator.sendBeacon()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) API.

#### `signal`

An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) object instance; allows you to communicate with a fetch request and abort it if desired via an [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).

## Return value

A promise that resolves to a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object or a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError). `TypeError` can occur for the following reasons:

- Invalid header name
- Invalid header value. The header object must contain exactly two elements
- Invalid URL or scheme, or using a scheme that fetch does not support, or using a scheme that is not supported for a particular request mode
- URL includes credentials
- Invalid referrer URL
- Invalid modes (`navigate` and `websocket`)
- If the request cache mode is "only-if-cached" and the request mode is other than "same-origin"
- If the request method is an invalid name token or one of forbidden headers (`'CONNECT'`, `'TRACE'` or `'TRACK'`)
- If the request mode is "no-cors" and the request method is not a CORS-safe-listed method (`'GET'`, `'HEAD'`, or `'POST'`)
- If the request method is `'GET'` or `'HEAD'` and the body is non-null or not undefined
- If fetch throws a network error

## References

1. [Fetch API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
1. [How to use promises - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
1. [`fetch()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
1. [Response - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response)
1. [`Response.json()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)
1. [`Response.text()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/text)
1. [Fetch API Headers - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Headers)