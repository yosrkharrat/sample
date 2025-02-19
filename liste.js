function getRandomColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}
const list = document.getElementById("list");
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.style.backgroundColor = getRandomColor();
    }
});