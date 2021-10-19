let spinner = document.getElementById("spinner");
let body = document.querySelector("body");
document.addEventListener("readystatechange", (event) => {
  console.log(document.readyState);
  if (document.readyState === "interactive") {
    body.classList.add("m-0");
  } else {
    body.classList.replace("m-0", "mx-4");
  }
});

window.addEventListener("load", () => {
  spinner.classList.add("hidden");
});
AOS.init();
