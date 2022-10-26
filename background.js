chrome.runtime.onMessage.addListener(function (
  message,
  sender,
  senderResponse
) {
  if (message.msg === "image") {
    fetch("https://some-random-api.ml/img/pikachu")
      .then((response) => response.text())
      .then((data) => {
        let dataObj = JSON.parse(data);
        senderResponse({ data: dataObj, index: message.index });
      })
      .catch((error) => console.log("error", error));
    return true; // Will respond asynchronously.
  }

  if (message.msg === "subject") {
    console.info("I've recieved a subject boss", message.value);
    // chrome.runtime.sendMessage({
    //   msg: "response",
    //   value: "I'm so proud",
    // });
    senderResponse({ message: "😉" });
  }
});
