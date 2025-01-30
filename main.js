var ajaxCall = (key, url, prompt, model) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      type: "POST",
      dataType: "json",
      data: JSON.stringify({
        model: model,
        prompt: prompt,
        max_tokens: 1024,
        top_p: 0.1,
        //temperature: 0.5,
        //n: 1,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      crossDomain: true,
      success: function (response, status, xhr) {
        resolve({ response, status, xhr });
      },
      error: function (xhr, status, error) {
        const err = new Error('xhr error');
        err.status = xhr.status;
        reject(err);
      },
    });
  });
};

(function () {
  const template = document.createElement("template");
  template.innerHTML = `
      <style>
      </style>
      <div id="root" style="width: 100%; height: 100%;">
      </div>
    `;
  class MainWebComponent extends HTMLElement {
    async post(apiKey, endpoint, prompt, model) {
      var { response } = await ajaxCall(
        apiKey,
        `${endpoint}`,
        prompt,
        model
      );
      console.log(["AJAX response", response]);
      var response_output = response['choices'][0]['text'];
      console.log(["AJAX response_output", response_output]);
      return response_output
    }
  }
  customElements.define("chatgpt-script-element", MainWebComponent);
})();
