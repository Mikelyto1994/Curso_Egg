// const producto1 = {
//   nombre: "celular",
//   precio: 100000,
//   stock: 2,
// };

// producto1.id = "id123";
// producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";
// console.log(producto1);

class Product {
  constructor(id, title, price, stock, images, onsale, supplier,colors,description) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
    this.colors = colors;
    this.description = description
  }

  getSupplier() {
    return this._supplier;
  }
  setSupplier(newName) {
    this._supplier = newName;
  }

  sellUnits(units) {
    if (this.stock >= units) {
        this.stock = this.stock - units
    } else {
        console.log("No existe stock");
    }
  }
}

const product1 = new Product(
  1,
  "Celular",
  500,
  10,
  ["imagen1.jpg", "imagen2.jpg"],
  false,
  "Samsung",
  ["Negro", "Blanco"],
  "Descripción del producto"
);

const product2 = new Product(
  2,
  "Laptop",
  1000,
  5,
  ["imagen3.jpg", "imagen4.jpg"],
  true,
  "HP",
  ["Gris", "Plateado"],
  "Otra descripción"
);

const product3 = new Product(
  3,
  "Tablet",
  300,
  15,
  ["imagen5.jpg", "imagen6.jpg"],
  false,
  "Apple",
  ["Negro", "Plata"],
  "Descripción de la tablet"
);

const product4 = new Product(
  4,
  "Auriculares",
  50,
  20,
  ["imagen7.jpg", "imagen8.jpg"],
  true,
  "Sony",
  ["Negro", "Blanco", "Rojo"],
  "Descripción de los auriculares"
);

const product5 = new Product(
  5,
  "Smartwatch",
  150,
  8,
  ["imagen9.jpg", "imagen10.jpg"],
  false,
  "Garmin",
  ["Negro", "Gris", "Azul"],
  "Descripción del smartwatch"
);

const product6 = new Product(
  6,
  "Altavoz Bluetooth",
  80,
  12,
  ["imagen11.jpg", "imagen12.jpg"],
  true,
  "JBL",
  ["Negro", "Blanco"],
  "Descripción del altavoz"
);


const products = [product1, product2, product3, product4, product5, product6];

// console.log(products);
// console.log(products[1]);
// console.log(products.length - 1);
// console.log(products[(products.length-1)]);
// products.unshift(prod5);

// products.push(prod6);

// console.log("products ", products);

// products.shift()
// console.log("products 2", products);

// products.pop()
// console.log(products);

// console.log(prod1);
// console.log(prod2);
// console.log(prod3);
// console.log(prod4.getSupplier());

// prod4.setSupplier("supplierModificado")

// console.log(prod4.getSupplier);


// prod5.sellUnits(10)
// console.log(prod5);

// prod5.sellUnits(5)
// console.log(prod5);
