class Hotel {
    constructor(name, city) {
        this.name = name
        this.city = city
        this.reviews = []
    }
    addReview(review) {
        this.reviews.push(review)
    }
    reviewCount() {
        return this.reviews.length
    }
    rating() {
        if (this.reviews.length === 0) return 0
        return this.reviews.reduce((total, review) => total + review.rating, 0) / this.reviews.length
        //return this.reviews.reduce((review1, review2) => review1.rating + review2.rating, 0) / this.reviews.length //take sum of all values and divide by no. of values
    }
    ratingAsStars() {
        var stars = ""
        for (var i = 0; i < this.rating(); i++) {
            stars += "⭐️"
        }
        return stars
    }
    urlSlug() {
        return (this.name.replace(' ', '_') + '_' + this.city.replace(' ', '_')).toLowerCase()
    }
    toJSON() {
        return {
            name:this.name, city:this.city, reviewCount:this.reviewCount(),
            ratingAsStars:this.ratingAsStars(),
            urlSlug:this.urlSlug(),
            reviews:"[" + this.reviews.map(r => r.toJSON()).join('') + "]"
        }
    }
}
//mp
//JSON - interface. built in .js function, returns json string of any object you give, needs to know how to convert to json string
//0 / 0 = NaN. 
//reduce - is functional programming
module.exports = Hotel