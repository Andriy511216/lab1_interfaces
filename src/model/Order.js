export default class Order {
    constructor() {
        this.items = [];
        this.id = Math.round(Math.random()*1000).toString();

    }
    //???
    add(item) {
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push(item);
        }
    }
}