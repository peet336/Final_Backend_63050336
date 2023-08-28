const productsContainer = document.querySelector(".Products");
const search = document.querySelector(".Search ");
const OurTeam = document.querySelector(".our-team");

const displayProducts = (arrayData) => {
  productsContainer.innerHTML = "";

  arrayData.forEach((element) => {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="Products-EP0">
      <img
        src="${element.thumbnail}"
        alt="img"
      />

      <div class="Products-content">
        <h3>${element.title}</h3>
        <p>${element.description}</p>
      </div>
      <div class="Products-footer">
        <div> ฿ ${element.price}</div>
      </div>
    </div>`
    );
  });
};

const getData = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=8");
  const responseJson = await response.json();

  const { products } = responseJson;
  console.log(products);

  displayProducts(products);

  search.addEventListener("input", (event) => {
    const { value } = event.target;

    const filter = products.filter((el) => {
      return (
        el.title.toLowerCase().includes(value.toLowerCase()) ||
        el.description.toLowerCase().includes(value.toLowerCase())
      );
    });

    displayProducts(filter);
  });
};

getData();
