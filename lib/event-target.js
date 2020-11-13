(function(__EventTarget__addEventListener) {
  /**
   * @function addEventListener
   * @override
   * 
   * @description
   * - allows adding the same listener for multiple event types in a single call
   * - allows chaining multiple calls
   * - *overrides {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener|EventTarget.addEventListener}*
   * 
   * @param {...string} type One or more strings representing the event types to listen for.
   * @param {function} listener
   * @param {object} [options]
   * @param {boolean} [useCapture]
   *
   * @example
   * element.addEventListener('click', click_handler);
   * 
   * @example
   * element.addEventListener('keyup', 'keydown', keypress_handler);
   * 
   * @example
   * xhr.addEventListener('error', 'abort', interruption_handler);
   *
   * @example
   * element
   *   .addEventListener('keyup', keyup_handler)
   *   .addEventListener('keydown', keydown_handler);
   *
   * @returns {EventTarget}
   */

  EventTarget.prototype.addEventListener = function() {
    if (typeof arguments[1] !== 'string') {
      __EventTarget__addEventListener.apply(this, arguments);
    } else {
      let args = [].slice.call(arguments);

      let event_types = args.filter(arg => typeof arg === 'string');
      let other_args = args.filter(arg => typeof arg !== 'string');

      for (let event_type of event_types) {
        __EventTarget__addEventListener.apply(this, [event_type, ...other_args]);
      }
    }

    return this;
  };
})(EventTarget.prototype.addEventListener);

(function(__EventTarget__removeEventListener) {
  /**
   * @function removeEventListener
   * @override
   * 
   * @description
   * - allows removing the same listener for multiple event types in a single call
   * - allows chaining multiple calls
   * - *overrides {@link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener|EventTarget.removeEventListener}*
   * 
   * @param {...string} type One or more strings representing the event types to remove the listener for.
   * @param {function} listener
   * @param {object} [options]
   * @param {boolean} [useCapture]
   *
   * @example
   * element.removeEventListener('click', click_handler);
   * 
   * @example
   * element.removeEventListener('keyup', 'keydown', keypress_handler);
   * 
   * @example
   * xhr.removeEventListener('error', 'abort', interruption_handler);
   *
   * @example
   * input_element
   *   .removeEventListener('keyup', keyup_handler)
   *   .removeEventListener('keydown', keydown_handler)
   *   .blur();
   *
   * @returns {EventTarget}
   */

  EventTarget.prototype.removeEventListener = function() {
    if (typeof arguments[1] !== 'string') {
      __EventTarget__removeEventListener.apply(this, arguments);
    } else {
      let args = [].slice.call(arguments);

      let event_types = args.filter(arg => typeof arg === 'string');
      let other_args = args.filter(arg => typeof arg !== 'string');

      for (let event_type of event_types) {
        __EventTarget__removeEventListener.apply(this, [event_type, ...other_args]);
      }
    }

    return this;
  };
})(EventTarget.prototype.removeEventListener);
