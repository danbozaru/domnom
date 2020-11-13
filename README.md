# domnom
A limited collection of JavaScript DOM prototype extensions.

# Installation
```bash
npm install domnom
```

# Usage
Include the script.

```html
<script src="domnom.min.js"></script>
```
Use familiar DOM syntax.

```javascript
document.querySelector('.comment').addEventListener('keyup', 'keydown', key_handler);
```

# Building
```bash
npm install
npm run build
```

# API Reference

<a name="addEventListener"></a>

## addEventListener(...type, listener, [options], [useCapture]) ⇒ <code>EventTarget</code>
- allows adding the same listener for multiple event types in a single call
- allows chaining multiple calls
- *overrides [EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)*


| Param | Type | Description |
| --- | --- | --- |
| ...type | <code>string</code> | One or more strings representing the event types to listen for. |
| listener | <code>function</code> |  |
| [options] | <code>object</code> |  |
| [useCapture] | <code>boolean</code> |  |

```js
element.addEventListener('click', click_handler);
```
```js
element.addEventListener('keyup', 'keydown', keypress_handler);
```
```js
xhr.addEventListener('error', 'abort', interruption_handler);
```
```js
element
  .addEventListener('keyup', keyup_handler)
  .addEventListener('keydown', keydown_handler);
```
<a name="removeEventListener"></a>

## removeEventListener(...type, listener, [options], [useCapture]) ⇒ <code>EventTarget</code>
- allows removing the same listener for multiple event types in a single call
- allows chaining multiple calls
- *overrides [EventTarget.removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)*


| Param | Type | Description |
| --- | --- | --- |
| ...type | <code>string</code> | One or more strings representing the event types to remove the listener for. |
| listener | <code>function</code> |  |
| [options] | <code>object</code> |  |
| [useCapture] | <code>boolean</code> |  |

```js
element.removeEventListener('click', click_handler);
```
```js
element.removeEventListener('keyup', 'keydown', keypress_handler);
```
```js
xhr.removeEventListener('error', 'abort', interruption_handler);
```
```js
input_element
  .removeEventListener('keyup', keyup_handler)
  .removeEventListener('keydown', keydown_handler)
  .blur();
```
<a name="event_activeelementchange"></a>

## "activeelementchange"
An event dispatched by the document object whenever its <code>activeElement</code> property changes.

```js
document.addEventListener('activeelementchange', function(event) {
  console.log(document.activeElement);
});
```
```js
document.onactiveelementchange = function(event) {
  console.log(document.activeElement);
});
```
