import { goToLoginPage } from "./goToLogin.js";
goToLoginPage();

class Customers {
  constructor(id, first, last, email, company, created_at, country) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.email = email;
    this.company = company;
    this.created_at = created_at;
    this.country = country;
  }
}

function renderSingelCustomer(e) {
  let first = e.target.querySelector(".customer-first").innerHTML;
  let last = e.target.querySelector(".customer-last").innerHTML;
  let email = e.target.querySelector(".customer-email").innerHTML;
  let id = e.target.getAttribute("data-id");
  let company = e.target.getAttribute("data-company");
  let country = e.target.getAttribute("data-country");
  let created_at = e.target.getAttribute("data-created");
  let url = e.target.getAttribute("data-src");

  document.querySelector("h1").innerHTML = `${first} ${last}`;
  document.querySelector(".container").style.display = "none";
  document.querySelector(".single-container").style.display = "block";

  let singleContainer = document.querySelector(".single-container");
  singleContainer.innerHTML = `<div class="customer-image"><img src='${url}'></div>`;
  singleContainer.innerHTML += `<div class="id"><b>Id:</b> ${id}</div>`;
  singleContainer.innerHTML += `<div class="first"><b>First:</b> ${first}</div>`;
  singleContainer.innerHTML += `<div class="last"><b>Last:</b> ${last}</div>`;
  singleContainer.innerHTML += `<div class="company"><b>Company:</b> ${company}</div>`;
  singleContainer.innerHTML += `<div class="country"><b>Country:</b> ${country}</div>`;
  singleContainer.innerHTML += `<div class="email"><b>Email:</b> ${email}</div>`;
  singleContainer.innerHTML += `<div class="created"><b>Created at:</b> ${created_at}</div>`;
}

function renderCustomers(customer) {
  let box = document.createElement("div");
  box.className = "customer-box";
  box.setAttribute("data-id", customer.id);
  box.setAttribute("data-company", customer.company);
  box.setAttribute("data-country", customer.country);
  box.setAttribute("data-created", customer.created_at);
  let imgSrc = `https://picsum.photos/250/250?random=${customer.id}`;
  box.setAttribute("data-src", imgSrc);

  let first = document.createElement("h3");
  first.className = "customer-first";
  first.textContent = `${customer.first}`;
  box.appendChild(first);

  let last = document.createElement("h3");
  last.className = "customer-last";
  last.textContent = `${customer.last}`;
  box.appendChild(last);

  let email = document.createElement("div");
  email.className = "customer-email";
  email.textContent = `${customer.email}`;
  box.appendChild(email);

  document.querySelector(".single-container").style.display = "none";
  document.querySelector(".container").appendChild(box);
  document.querySelector("h1").innerHTML = "Customers List";
}

const getData = async () => {
  try {
    const res = await fetch(
      "https://webschool-js-final-api.herokuapp.com/customers"
    );
    const response = await res.json();
    createCustomer(response);
    console.log(response);
  } catch (error) {
    console.log("error....");
    console.log(error);
  }
};

function createCustomer(response) {
  for (let i = 0; i < response.length; i++) {
    let customerItem = response[i];

    let customer = new Customers(
      customerItem.id,
      customerItem.first,
      customerItem.last,
      customerItem.email
    );
    renderCustomers(customerItem);
  }

  let items = Array.from(document.getElementsByClassName("customer-box"));
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(e.target.getAttribute("data-id"));
      console.log(e.target.getAttribute("data-src"));
      renderSingelCustomer(e);
    });
  });
}

getData();
