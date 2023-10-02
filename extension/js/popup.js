document.addEventListener("DOMContentLoaded", () => {
  // Get Btns Selector
  const startVideoBtn = document.querySelector("#start_video");
  const stopVideoBtn = document.querySelector("button#stop_video");

  // Adding event listeners
  startVideoBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "request_recording" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "error line 13");
          }
        }
      );
    });
  });

  stopVideoBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "stopvideo" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "error line 32");
          }
        }
      );
    });
  });
});
