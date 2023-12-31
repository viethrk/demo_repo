const categorys = [
  {
    id: 1,
    name: "Category 1",
  },
  {
    id: 2,
    name: "Category 2",
  },
];

const product = {
  id: 1,
  name: "sản phảm aaaa",
  category_id: 1,
  image:
    "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llomffqzhrrz51_tn",
};

const products = [
  {
    ...product,
    name: "sản phảm aaaa1",
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-23020-7sf0mvmbjgnv97",
  },
  {
    ...product,
    id: "2",
    name: "sản phảm aaaa2",
  },
  {
    ...product,
    id: 3,
    name: "sản phảm aaaa3",
  },
  {
    ...product,
    id: 4,
    category_id: 2,
    name: "sản phảm aaaa3",
  },
  {
    ...product,
    id: 5,
    category_id: 2,
    name: "sản phảm aaaa4",
  },
  {
    ...product,
    id: 6,
    category_id: 2,
    name: "sản phảm aaaa5",
  },
  {
    ...product,
    id: 7,
    category_id: 2,
    name: "sản phảm aaaa1",
  },
];

const getProducts = () => {
  return JSON.parse(localStorage.getItem("products")) ?? [];
};

const getCategorys = () => {
  return JSON.parse(localStorage.getItem("categorys")) ?? [];
};

const initData = () => {
  const productsCheck = getProducts();
  if (productsCheck.length == 0) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  const categorysCheck = getCategorys();
  if (categorysCheck.length == 0) {
    localStorage.setItem("categorys", JSON.stringify(categorys));
  }
};
