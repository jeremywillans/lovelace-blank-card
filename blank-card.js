((LitElement) => {
 
    class BlankCard extends LitElement {
  
        render() {};
        setConfig() {};

    }

  customElements.define('blank-card', BlankCard);
})(window.LitElement || Object.getPrototypeOf(customElements.get("hui-view")));