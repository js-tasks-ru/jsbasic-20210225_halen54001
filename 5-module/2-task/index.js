function toggleText() {
  let toggleTextButton = document.querySelector(".toggle-text-button");
  toggleTextButton.onclick = () =>
    document.getElementById("text").toggleAttribute("hidden");
}
