const biggerBtn = document.querySelector("#bigger");
const mooBtn = document.querySelector("#moo");
const fancyRadio = document.querySelector("#fancy");
const boringRadio = document.querySelector("#boring");
const textArea = document.querySelector("#text");

biggerBtn.addEventListener("click", () => {
    textArea.style.fontSize = "24pt";
});

mooBtn.addEventListener("click", () => {
    textArea.value = textArea.value.toUpperCase();
    const suffix = "-Moo.";
    let newText = textArea.value.split(".").join(suffix);
    textArea.value = newText;

})

fancyRadio.addEventListener("change", () => {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
});

boringRadio.addEventListener("change", () => {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
});
