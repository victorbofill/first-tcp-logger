module.exports = class Clients {
    constructor() {
        this.set = new Set();
    }

    add(client) {
        this.set.add(client);
    }

    remove(client) {
        this.set.delete(client);
    }
};