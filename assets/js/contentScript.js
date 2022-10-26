let images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  chrome.runtime.sendMessage(
    { msg: "image", index: i },
    function ({ data, index }) {
      images[index].src = data.link;
    }
  );
}

console.log("hello");
console.dir(window);
console.dir(window.document);
const script = document.createElement("script");
// new DOMParser().parseFromString(
//  window.document.body.innerHTML
script.innerHTML += `
console.log("🤷🏽‍♂️");
window.addEventListener("load", () => {
  console.log(":/ DOMloaded");
});
`;

//www.bryanbraun.com/2021/08/10/allowing-inline-scripts-in-your-content-security-policy-using-a-hash/
//https: window.document.body.append(script);

window.onload = () => {
  console.log(":/ onload :/");

  //gmail
  // document.querySelector(".T-I.T-I-KE.L3");
  //onclick
  document.querySelector(".T-I.T-I-KE.L3")?.addEventListener("click", () => {
    console.info("hello 😌");

    setTimeout(() => {
      const parentScope = document.querySelector("div.no")
        ? document.querySelector("div.no")
        : document;
      console.log("parent", parentScope);
      console.log("subject: ", document.querySelector("input.aoT"));
      console.log("body: ", document.querySelector("div.Am.Al"));
      console.log("textarea: ", document.querySelector("textarea.Ak.aiL"));
      document.querySelector("input.aoT")?.addEventListener("change", () => {
        console.log("subject: ", document.querySelector("input.aoT").value);
        document.querySelector("div.Am.Al").innerHTML =
          document.querySelector("input.aoT").value;
        document.querySelector("textarea.Ak.aiL").value =
          document.querySelector("input.aoT").value;

        chrome.runtime.sendMessage(
          {
            msg: "subject",
            value: document.querySelector("input.aoT").value,
          },
          (response) => {
            console.dir(response);
          }
        );
      });
    }, 2000);
  });
};

document.addEventListener("load", () => {
  console.log(":/ load");
});
