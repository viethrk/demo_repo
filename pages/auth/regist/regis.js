const arr = [
  { id: 1, name: "san pham 1" },
  { id: 2, name: "san pham 2" },
  { id: 3, name: "san pham 3" },
  { id: 4, name: "san pham 4" },
  { id: 5, name: "san pham 5" },
];

const setProduct = (product) => {
  // luu data vao local storage
  localStorage.setItem("id_product", product);
  window.open("/pages/product/list/products.html", "_self");
};

const regisUser = () => {
  let renderHtml = "";

  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    const product = arr[index];
    renderHtml += `
      <button onclick="setProduct(${product.id})">Button ${arr[index].name}</button>
    `;
  }

  document.getElementById("render").innerHTML = renderHtml;
};
