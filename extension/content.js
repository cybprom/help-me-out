// console.log("Hi, I have been injected.");

// var recorder = null;
// let recordedChunks = [];
// function onAccessApproved(stream) {
//   // mixedStream = new MediaStream([...stream.getTracks(), ...audio.getTracks()]);
//   recorder = new MediaRecorder(stream);

//   recorder.start();

//   recorder.onstop = function () {
//     stream.getTracks().forEach(function (track) {
//       if (track.readyState === "live") {
//         track.stop();
//       }
//     });
//   };

//   //   recorder.onresume
//   // recorder.onpause
//   recorder.ondataavailable = function (event) {
//     let recorderBlob = event.data;
//     console.log(recorderBlob);
//     let url = URL.createObjectURL(recorderBlob);

//     let formData = new FormData();
//     formData.append("video", recorderBlob, "video-recording.webm");

//     let endpointUrl =
//       "https://screenrecording.ifeoluwaadefioy.repl.co/app/api/screen-recordings/";

//     let data = {
//       title: "New Screen Recording",
//       video_file: url,
//     };

//     fetch(endpointUrl, {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((res) => console.log(res));

//     // let a = document.createElement("a");
//     // a.style.display = "none";
//     // a.href = url;
//     // a.download = "screen-recording.webm";

//     // document.body.appendChild(a);
//     // a.click();

//     // document.body.removeChild(a);
//     // URL.revokeObjectURL(url);
//     // console.log(recorderBlob);
//   };
// }

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "request_recording") {
//     console.log("requesting recording");

//     sendResponse(`processed: ${message.action}`);

//     navigator.mediaDevices
//       .getDisplayMedia({
//         audio: true,
//         video: {
//           width: 999999,
//           height: 99999,
//         },
//       })
//       .then((stream) => {
//         onAccessApproved(stream);
//       });
//   }

//   if (message.action === "stopvideo") {
//     console.log("stopping video");
//     sendResponse(`processed: ${message.action}`);
//     if (!recorder) console.log("no recorder");

//     recorder.stop();
//   }
// });

////////////////////////////////////

console.log("Hi, I have been injected!");

var recorder = null;
var recordedChunks = [];

function generateUniqueVideoId() {
  // Generate a timestamp-based unique ID
  const timestamp = Date.now();

  // Generate a random number (between 1 and 10000) to add some randomness
  const random = Math.floor(Math.random() * 10000) + 1;

  // Combine the timestamp and random number to create the ID
  return `${timestamp}-${random}`;
}

function sendVideoToServer(recordedBlob) {
  var formData = new FormData();
  // formData.append("file", recordedBlob, "video/webm");
  formData.append("video", recordedBlob);

  var requestOptions = {
    method: "POST",
    body: formData,
  };

  // const apiUrl =
  //   "https://screenrecording.ifeoluwaadefioy.repl.co/app/api/screen-recordings/";

  const apiUrl = "https://damisaalex.xyz/hngx5/api/videos/";

  fetch(apiUrl, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not JSON");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Video uploaded successfully:", data);

      // Open a new page when the recording stops
      const newPageUrl = "https://help-me-out-promise.vercel.app/video"; // Replace with the actual URL you want to open
      window.open(newPageUrl, "_blank"); // "_blank" opens a new tab or window
    })
    .catch((error) => {
      console.error("Error uploading video:", error);
    });
}

function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);

  recorder.start();

  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };

  recorder.ondataavailable = function (event) {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    } else {
      console.log(`Streaming chunk is empty.`);
    }
    // var recordBlob = event.data;
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const videoFile = new File([blob], "screen-recording.webm", {
      type: "video/webm",
    });
    sendVideoToServer(videoFile);
    console.log(blob);
  };

  // recorder.start();
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");

    sendResponse(`processed: ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 1280,
          height: 720,
        },
      })
      .then((stream) => {
        onAccessApproved(stream);
      });
  }

  if (message.action === "stopvideo") {
    console.log("stopping video");
    sendResponse(`processed: ${message.action}`);
    if (!recorder) return console.log("no recorder");

    recorder.stop();
  }
});

// fetch("https://damisaalex.xyz/hngx5/api/videos")
//   .then((res) => res.json())
//   .then((data) => console.log(data[3].videoUrl));

//////////////////////////////

//recorder.onstop = function () {
// const blob = new Blob(recordedChunks, { type: "video/webm" });
// const videoId = generateUniqueVideoId();
// const fileName = `screen-recording-${videoId}.webm`;
// const formData = new FormData();
// // formData.append("video", blob, fileName);
// formData.append("file", recordedBlob, "video/webm");

// const fileReader = new FileReader();
// fileReader.onload = function () {
//   const base64Data = fileReader.result;
//   console.log(base64Data);
//   console.log(formData);
//   console.log(blob);
//   console.log(recordedChunks);

// const apiUrl =
//   "https://screenrecording.ifeoluwaadefioy.repl.co/app/api/screen-recordings/";

// fetch(apiUrl, {
//   method: "POST",
//   body: formData,
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const contentType = response.headers.get("content-type");
//     if (!contentType || !contentType.includes("application/json")) {
//       throw new Error("Response is not JSON");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Video uploaded successfully:", data);

//     // Open a new page when the recording stops
//     const newPageUrl = "https://help-me-out-promise.vercel.app/"; // Replace with the actual URL you want to open
//     window.open(newPageUrl, "_blank"); // "_blank" opens a new tab or window
//   })
//   .catch((error) => {
//     console.error("Error uploading video:", error);
//   });
//   };

// fileReader.readAsDataURL(blob);

// recordedChunks = [];

// };
