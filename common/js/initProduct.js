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
  },
  {
    ...product,
    id: "2",
  },
  {
    ...product,
    id: 3,
  },
  {
    ...product,
    id: 4,
    category_id: 2,
  },
  {
    ...product,
    id: 5,
    category_id: 2,
  },
  {
    ...product,
    id: 6,
    category_id: 2,
  },
  {
    ...product,
    id: 7,
    category_id: 2,
  },
];

localStorage.setItem("products", JSON.stringify(products));
localStorage.setItem("categorys", JSON.stringify(categorys));

const getProducts = () => {
  return JSON.parse(localStorage.getItem("products"));
};

const getCategorys = () => {
  return JSON.parse(localStorage.getItem("categorys"));
};
