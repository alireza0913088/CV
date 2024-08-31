{
  const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
  for (let i = 0; i < toggleThemeBtn.length; i++) {
    toggleThemeBtn[i].addEventListener("click", () => {
      if (localStorage.theme === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        // let theme_content = document.getElementById("theme-content");
        // theme_content.innerHTML = "تم تیره";
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        // let theme_content = document.getElementById("theme-content");
        // theme_content.innerHTML = "تم روشن";
      }
    });
  }
}
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 50) {
    document
      .querySelector("#name-wrapper")
      .setAttribute("style", "width:110px");
  } else if (currentScroll < lastScrollTop && currentScroll < 50) {
    document.querySelector("#name-wrapper").setAttribute("style", "width:0px");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
function $(id) {
  return document.getElementById(id);
}
let comment_btn = $("coment-btn");
let comment_box = $("coment-box");
let comment_close = $("coment-close");
comment_btn.onclick = () => {
  comment_box.setAttribute("style", "display:flex;");
};
comment_close.onclick = () => {
  comment_box.setAttribute("style", "display:none;");
};

