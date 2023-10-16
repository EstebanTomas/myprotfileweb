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

/* 
cambiar de lugar las etiquetas a for li
- identificar el elemento
- requerirlo desde mi archivo js y almacenarlo
- agregarle un evento cuando scrolee sobré los elementos
(el evento sucedera si paso el mouse sobre el elemento, este
reaccionara con una breve transición, cambiando de color y agrandando las letras )
*/


// const start = document.querySelector("a#start");

// start.addEventListener("scroll", (transitionElement) => {
//     transitionElement.classList.toggle("scrool");
// });