alert("script läuft");
const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/vfodyhw3.jpg") {
    myImage.setAttribute("src", "images/images.jpg");
  } else {
    myImage.setAttribute("src", "images/vfodyhw3.jpg");
  }
});