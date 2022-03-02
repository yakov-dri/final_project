export function goToLoginPage() {
  if (localStorage.getItem("admin") == null) {
    alert("Go to login page");
    window.location.href = "login.html";
  }
}
//goToLoginPage();
