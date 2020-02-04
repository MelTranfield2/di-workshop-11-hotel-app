class Review {
    constructor(rating, text, date) {
        this.rating = rating
        this.text = text
        this.date = new Date(date)  //get date as string and convert to object of date class. this.date - object of date class. has function .isoString
    }
    ratingAsStars() {
        var stars = ""
        for (var i = 0; i < this.rating; i++) {
            stars += "⭐️"
        }
        return stars
    }
    toJSON() {
        return {
            rating:this.rating,
            text:this.text,
            date:this.date.toISOString(),
            ratingAsStars:this.ratingAsStars()
        }
    } //new js object - not instance of a class, value is current rating/value of object
}
module.exports = Review //tells .js that this whole file exports the review class