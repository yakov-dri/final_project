import { goToLoginPage, createWindowModal } from "./goToLogin.js";
goToLoginPage();

class Products {
  constructor(
    title,
    type,
    description,
    url,
    filename,
    width,
    height,
    price,
    quantity
  ) {
    this.title = title;
    this.type = type;
    this.description = description;
    this.url = url;
    this.filename = filename;
    this.width = width;
    this.height = height;
    this.price = price;
    this.quantity = quantity;
  }
}

function renderProd(prod) {
  let boxProd = document.createElement("div");
  boxProd.className = "prod-box";

  let imgBox = document.createElement("div");
  imgBox.className = "prod-img-box";
  let newFilaName = parseInt(prod.filename.slice(0, -4)) + 200;
  imgBox.style.backgroundImage = `url("${prod.url}/${newFilaName}.jpg")`;
  // let img = document.createElement("img");
  // img.src = `${prod.url}/${newFilaName}.jpg`;
  // imgBox.appendChild(img);
  boxProd.appendChild(imgBox);

  let title = document.createElement("h3");
  title.className = "prod-title";
  title.textContent = `${prod.title}`;
  boxProd.appendChild(title);

  let description = document.createElement("div");
  description.className = "prod-description";
  description.innerHTML = `<b>description:</b> ${prod.description}`;
  boxProd.appendChild(description);

  let type = document.createElement("div");
  type.className = "prod-type";
  type.innerHTML = `<b>type:</b> ${prod.type}`;
  boxProd.appendChild(type);

  let price = document.createElement("div");
  price.className = "prod-price";
  price.innerHTML = `<b>price:</b> ${prod.price}`;
  boxProd.appendChild(price);

  let quantity = document.createElement("div");
  quantity.className = "prod-quantity";
  quantity.innerHTML = `<b>quantity:</b> ${prod.quantity}`;
  boxProd.appendChild(quantity);

  document.querySelector(".container").appendChild(boxProd);
  document.querySelector("h1").innerHTML = "Products List";
}

function getProducetsApi() {
  let xmlhttp = new XMLHttpRequest();
  let url = "https://webschool-js-final-api.herokuapp.com/products";

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
      let productsArr = JSON.parse(xmlhttp.responseText);

      createProduct(productsArr);
      console.log(productsArr);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function createProduct(productsArr) {
  for (let i = 0; i < productsArr.length; i++) {
    let prodItem = productsArr[i];
    let prod = new Products(
      prodItem.url,
      prodItem.filename,
      prodItem.title,
      prodItem.type,
      prodItem.last,
      prodItem.email,
      prodItem.quantity
    );

    if (productsArr) {
      renderProd(prodItem);
    }

    // console.log(
    //   prodItem.url,
    //   prodItem.filename,
    //   prodItem.title,
    //   prodItem.type,
    //   prodItem.description,
    //   prodItem.price,
    //   prodItem.quantity
    // );
  }
}
getProducetsApi();
