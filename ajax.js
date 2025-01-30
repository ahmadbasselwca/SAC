(function () {
  const template = document.createElement("template");
  template.innerHTML = `
      <style>
      </style>
      <div id="root" style="width: 100%; height: 100%;">
      </div>
    `;
  class MainWebComponent extends HTMLElement {
    async post(apiKey, endpoint, prompt) {
      const { response } = apiKey + ' => ' + `${url}/${endpoint}` + ' => ' + prompt
      );
      console.log(response);
      return response;
    }
  }
  customElements.define("custom-widget", MainWebComponent);
})();
