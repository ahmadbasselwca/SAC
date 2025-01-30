(function () {
    class MainWebComponent extends HTMLElement {
        async post(apiKey, endpoint, prompt) {
            const { response } = apiKey + ' => ' + `${endpoint}` + ' => ' + prompt;
            console.log(["response", response]);
            return response;
            }
        }
    
    customElements.define("custom-widget", MainWebComponent);
})();
