function login() {
  let password = document.querySelector("#pass");
  let buttonLogin = document.querySelector("#btnLogin");
  let error = document.querySelector("#error");

  let lsadmin = localStorage.getItem("admin");

  if (lsadmin) {
    window.location = "index.html";
  } else {
    buttonLogin.addEventListener("click", (e) => {
      const systemPassword = 1234;
      //console.log(systemPassword);
      e.preventDefault();

      if (password.value == systemPassword) {
        //alert("good");
        localStorage.setItem("admin", systemPassword);
        window.location = "index.html";
      } else if (password.value != systemPassword) {
        //alert("not good");
        error.style.display = "block";
        error.innerHTML =
          "Enter the sistem password, <br> The password is not true";
      }
    });
  }
}

function addNubbers() {
  let password = document.querySelector("#pass");
  let btnNumbers = document.querySelectorAll(".btn-num");
  btnNumbers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let num = e.target.innerHTML;
      console.log(num);
      password.value += num;
    });
  });
}

addNubbers();
login();
