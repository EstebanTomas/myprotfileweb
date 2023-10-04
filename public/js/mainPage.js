// traer el elemento que contenga al header
// agregar un evento de scrool a ese elemento
// - se mantendra oculto el header
// - apenas se haga scrool ese elemento aparecera para quedarse y acompañara durante
// todo el recorrido de la pagína
// */ 

// MENU
let conteiner = document.querySelector("div.iconConteiner");
let icon = document.querySelector("div.hamburgerIcon");
let openBar = document.querySelector("div.barTheOption");

conteiner.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("open");
    openBar.classList.toggle("openBar");
});
/////
