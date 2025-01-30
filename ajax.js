const url = "https://api.openai.com/v1";

(function () {
    class MainWebComponent extends HTMLElement {
        async post(apiKey, endpoint, prompt) {
            var response = apiKey + ' => ' + `${url}/${endpoint}` + ' => ' + prompt;
            console.log(["response", response]);
            return response;
            }
        }
    
    customElements.define("custom-widget", MainWebComponent);
})();
