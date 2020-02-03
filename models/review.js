class Review {
    constructor(rating, text, date) {
    this.rating = rating
    this.text = text
    this.date = new Date(date)  //get date as string and convert to object of date class. this.date - object of date class. has function .isoString
    }
    ratingAsStars() {
        return "⭐️".repeat(this.rating)
    }
}
module.exports = Review //tells .js that this whole file exports the review class