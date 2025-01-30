//const url = "https://api.openai.com/v1";

(function () {
    class MainWebComponent extends HTMLElement {
        async post(apiKey, endpoint, prompt) {
            var response = 'response_output: ' + apiKey + ' => ' + `${url}/${endpoint}` + ' => ' + prompt;
            console.log(["AJAX response", response]);
            return response;
            }
        }
    
    customElements.define("script-element", MainWebComponent);
})();
