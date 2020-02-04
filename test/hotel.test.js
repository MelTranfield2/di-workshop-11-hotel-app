const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel')
var Review = require('../models/review')

describe('Hotel', function () {
    it('should initialize properly', () => {
        var hotel = new Hotel("Hilton Metropole", "London")
        expect(hotel.name).to.equal("Hilton Metropole")
        expect(hotel.city).to.equal("London")
        expect(hotel.reviews).to.deep.equal([])
        var review1 = new Review(5, "Excellent hotel, very clean", "2018-12-17")
        var review2 = new Review(1, "Terrible hotel, smelled of mice", "2018-01-01")
        hotel.addReview(review1)
        hotel.addReview(review2)
        expect(hotel.reviews.length).to.equal(2)
        expect(hotel.reviewCount()).to.equal(2)
        expect(hotel.rating()).to.equal(3)
        expect(hotel.ratingAsStars()).to.equal('⭐️⭐️⭐️')

        expect(hotel.urlSlug()).to.equal("hilton_metropole_london")
    })
});