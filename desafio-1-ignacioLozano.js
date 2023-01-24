// DESAFIO 1 - IGNACIO LOZANO

class Producto{    
    constructor(title,description,price,thumbnail,code,stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}


class ProductManager{
    constructor(){
        this.products = [];
    }    
    addProduct(newProduct) {
        // Checkear si estan todos los inputs
        if (newProduct.title && newProduct.description && newProduct.price && newProduct.thumbnail && newProduct.code && newProduct.stock) {
            const existingProduct = this.products.find(product => product.code === newProduct.code);
            if (existingProduct) {
                console.error("El producto ya existe campeón!");
            } else {
                newProduct.id = ProductManager.generateId();
                this.products.push(newProduct);
            }
        } else {
            console.error("Hay que llenar todos los inputs champ!");
        }
    }
    getProductos(){
        return this.products;
    }
    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            return product;
        } else {
            return "Product not found";
        }
    }

      static generateId() {
        if (!this.latestId) {
            this.latestId = 1;
        } else {
            this.latestId++;
        }
        return this.latestId;
    }


}

const eldenRing = new Producto ("Elden Ring", "El mejor juego del año 2022", 4999, "img/juegos/elden-ring.jpg", "1A", 500);
const modernWarefare2 = new Producto ("Call of Duty: Modern Warefare 2", "Juegazo de guerra", 7999, "img/juegos/modern-warfare-2.jpg", "2A", 500);
const fifa23 = new Producto ("FIFA 23", "El mejor juego de futbol", 7999, "img/juegos/fifa-23.jpg", "3A", 500);
const legoStarWars = new Producto ("Lego Star Wars: The Skywalker Saga", "Una palabra, tres silabas. JUE-GA-ZO", 6999, "img/juegos/lego_star_wars.jpg", "4A", 500);

const emptyProduct=new Producto("","","","","","");
const testProduct=new Producto("Producto para TESTs","Hola, soy un test",3300,"img/nada","4A",500);


pManager = new ProductManager()

// Mostrar Array Vacio
console.log(pManager.getProductos())

// Agregar productos
pManager.addProduct(eldenRing);
pManager.addProduct(modernWarefare2);
pManager.addProduct(fifa23);
pManager.addProduct(legoStarWars);

// Objeto vacio
pManager.addProduct(emptyProduct);

pManager.addProduct(testProduct);

// Listado de producto
console.log(pManager.getProductos())

// Producto exsistente

pManager.addProduct(testProduct);

console.log(pManager.getProductById(2)); 

// No hay tal ID
console.log(pManager.getProductById(4206969));