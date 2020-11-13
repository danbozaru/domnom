(function(__document__) {
  /**
   * @event activeelementchange
   *
   * @description An event dispatched by the document object whenever its <code>activeElement</code> property changes.
   * 
   * @example
   * document.addEventListener('activeelementchange', function(event) {
   *   console.log(document.activeElement);
   * });
   * 
   * @example
   * document.onactiveelementchange = function(event) {
   *   console.log(document.activeElement);
   * });
   */

  let previous_active_element;
  let raf;

  function observe_active_element() {
    if (document.activeElement !== previous_active_element) {
      const active_element_change_event = new Event('activeelementchange');

      if (typeof document.onactiveelementchange === 'function') {
        document.onactiveelementchange(active_element_change_event);
      }

      document.dispatchEvent(active_element_change_event);
      previous_active_element = document.activeElement;
    }
    raf = requestAnimationFrame(observe_active_element);
  }

  observe_active_element();
})(document);
