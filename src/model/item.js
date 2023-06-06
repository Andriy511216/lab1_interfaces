export default class Item {
    constructor(name, price, quantity) {
        this.id = Math.round(Math.random()*1000).toString();
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}