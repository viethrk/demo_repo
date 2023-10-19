// kiem tra user da login hay chua
window.addEventListener("load", () => {
  console.log(window.location.pathname);
  // logic
  // dieu huong ve trang login neu user chua login
  window.open("/pages/auth/login/login.html", "_self");
});
