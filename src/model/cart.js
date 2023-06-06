export default class Cart {
    constructor() {
        this.items = [];
    }
    add(item) {
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push(item);
        }
    }
    remove(id) {
        const item = this.items.find(i => i.id === id);
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            this.items = this.items.filter(i => i.id !== id);
        }
    }
    get total() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
}

// Path: src\store\store.js