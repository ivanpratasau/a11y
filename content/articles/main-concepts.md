---
title: 'Main concepts'
description: 'meta description of the page'
draft: true
---

# Key concepts
## Labels and ARIA attributes

Web accessibility ensures that websites and web applications are usable by people with disabilities, offering
equal access and opportunity to all users. <b>Labels</b> and <b>ARIA attributes</b> are essential components in web
accessibility, providing meaningful information to assistive technologies and aiding users with disabilities in
understanding and interacting with web content.

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

::card
```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```
::

When it comes to accessibility, it's crucial to understand when to use native elements with labels and when
to leverage the aria-label attribute. Native elements, combined with labels, are preferred in most cases as they
provide a visible and associated label that benefits all users, including those using assistive technologies.
However, there are instances when aria-label becomes necessary to enhance accessibility further.

Native elements with labels are typically used for form controls like input fields, checkboxes, and radio buttons. By associating a <label> element with a form control using the for attribute and matching it to the control's id attribute, we establish a clear relationship between the label and the form control, aiding screen readers and other assistive technologies. For example:

## Example 1: Native Element with Label

<pre>
<code class="javascript">console.log('Hello World')</code>
</pre>