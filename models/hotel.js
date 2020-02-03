class Hotel {
    constructor(name, city) {
        this.name = name
        this.city = city
        this.reviews = []
    }
    reviewCount() {
        return this.reviews.length
    }
}
module.exports = Hotel