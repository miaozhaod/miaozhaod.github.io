function navFunc() {
  const nav = document.getElementById("myNav");
  if (nav.className === "navbar") {
    nav.className += "responsive";
  } else {
    nav.className = "navbar";
  }
}
