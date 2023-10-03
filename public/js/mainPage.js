// traer el elemento que contenga al header
// agregar un evento de scrool a ese elemento
// - se mantendra oculto el header
// - apenas se haga scrool ese elemento aparecera para quedarse y acompañara durante
// todo el recorrido de la pagína
// */ 

let conteiner = document.querySelector("div.iconConteiner");
let icon = document.querySelector("div.hamburgerIcon");

conteiner.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("open");
    
});