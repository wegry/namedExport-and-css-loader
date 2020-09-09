import * as s from "./index.module.css";

document.addEventListener("DOMContentLoaded", () => {
  alert("Called");
  console.log(s.fishSticks);
  document.body.classList.add(s.fishSticks);
});
