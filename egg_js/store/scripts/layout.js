const navSelector = document.getElementById("nav"); /* Resulta que has colocado ElementsById, y en tu estructura html está como clase, asi que opte por cambiar la clase a ID en HTML y se solucionó parcialmente... Luego veo que el estilo tuve que eliminar la dependencia a UL y LI, ya que se ha creado dinamicamente el anchor como hijo de la barra NAV sin la LI ni la UL .. para que lo tengas en cuenta al ejecutar la pagina */

const options = [
  { text: "Ofertas de la semana", linkTo: "./outlet.html" },
  { text: "Productos", linkTo: "./how.html" },
  { text: "Contacto", linkTo: "./taxs.html" },
  { text: "Marcas", linkTo: "./orders.html" },
  //   { text: "", linkTo: "./warranty.html" },
];

for (let option of options) {
  const anchor = document.createElement("a");
  anchor.className = "nav-button";
  anchor.textContent = option.text;
  anchor.href = option.linkTo;
  navSelector.appendChild(anchor);
}

const footerSelector = document.querySelector("#footer");
// console.log(footerSelector);
const optionsFooter = [
  {
    text: "Ofertas de la semana",
    linkTo: "./outlet.html",
    opts: ["Laptops", "Audio", "Auriculares"],
  },
  {
    text: "Cómo Comprar",
    linkTo: "./how.html",
    opts: ["Formas de pago", "Envios", "Devoluciones"],
  },
  {
    text: "Costos y Tarifas",
    linkTo: "./taxs.html",
    opts: ["Impuestos", "Facturacion"],
  },
  {
    text: "Mis Pedidos",
    linkTo: "./orders.html",
    opts: ["Pedir Nuevamente", "Lista de Deseos"],
  },
  { text: "Garantía de Entrega", linkTo: "./orders.html", opts: ["", ""] },
  //   { text: "", linkTo: "./warranty.html" },
];

// for (let option of optionsFooter) {
//     const col = document.createElement("div");
//     col.classList.add("col");

//     const ul = document.createElement("ul");

//     const mainItem = document.createElement("li");
//     mainItem.classList.add("col-main-item");

//     const etiqa = document.createElement("a");
//     etiqa.href = option.linkTo;
//     etiqa.textContent = option.text;

//     mainItem.appendChild(etiqa);
//     ul.appendChild(mainItem);

//     //Agregar Hijos
//     option.opts.forEach(item => {
//         const lihijo = document.createElement("li");
//         const ahijo = document.createElement("a");

//         ahijo.href = "#";
//         ahijo.textContent = item;

//         lihijo.appendChild(ahijo);
//         ul.appendChild(lihijo);
//     });

//     col.appendChild(ul);
//     footerSelector.appendChild(col);

// }

let template = "";


for (let option of optionsFooter) {
    const subItems = option.opts.map(e => `<li><a href="#">${e}</a></li>`).join('');
    option = `
    <div class="col">
        <ul>
            <li class="col-main-item">
                <a href="${option.linkTo}">${option.text}</a>
            </li> 
            ${
                subItems
            }
        </ul>
    </div>
    `
    template = template + option
}

footerSelector.innerHTML = template;
