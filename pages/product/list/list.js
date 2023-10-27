const showDetail = (id) => {
  localStorage.setItem("id_detail", id);
  window.open(
    `${window.location.origin}/pages/product/detail/detail.html`,
    "_self"
  );
};

const showProducts = (products) => {
  let render = "";
  for (const product of products) {
    render += `
    <div class="col-4 mb-3">
      <div class="px-2 card hover-zoom">
        <img src="${product.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button class="btn btn-primary" onclick="showDetail(${product.id})">Xem chi tiết</button>
        </div>
      </div>
    </div>
    `;
  }

  document.getElementById("list-product").innerHTML = render;
};

const renderDropdown = () => {
  const categorys = getCategorys();

  let render = "";

  categorys.forEach((category) => {
    render += `
      <li><a class="dropdown-item" href="#">${category.name}</a></li>
    `;
  });

  const dropdow = `
  <li><a class="dropdown-item active" href="#">Tất cả</a></li>
  ${render}
  `;

  document.getElementById("category").innerHTML = dropdow;
};

const searchProduct = () => {
  const valueSearch = document.getElementById("search").value;

  const listProduct = getProducts();

  const listRender = listProduct.filter((item) =>
    item.name.includes(`${valueSearch}`)
  );

  showProducts(listRender);
};
