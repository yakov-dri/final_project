export function goToLoginPage() {
  if (localStorage.getItem("admin") == null) {
    // alert("Go to login page");
    // window.location.href = "login.html";
    createWindowModal();
  }
}
//goToLoginPage();

export function createWindowModal() {
  let body = document.querySelector("body");
  let div = document.createElement("div");
  div.className = "modal-container";

  let a = document.createElement("a");
  a.href = "login.html";
  a.className = "link-back-login";

  let h2 = document.createElement("h2");
  h2.className = "modal-title";
  h2.textContent = "Go to login page";
  a.appendChild(h2);

  div.appendChild(a);
  body.appendChild(div);

  let backToLogin = document.querySelector(".link-back-login");
  backToLogin.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}
//createWindowModal();
