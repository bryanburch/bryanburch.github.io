const btns = document.querySelectorAll("button");
const lists = document.querySelectorAll(".list");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        if (lists[i].style.display === "none") {
            lists[i].style.display = "block";
            btns[i].textContent = "Hide";
        } else {
            lists[i].style.display = "none";
            btns[i].textContent = "Show";
          }
    });
}
