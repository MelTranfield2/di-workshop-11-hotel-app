const chai = require('chai');
const expect = chai.expect;

var Review = require('../models/review') //require = returns review class, saved in review variable

describe('Review', function () { //testing review class, with multiple tests
    it('should initialize properly', () => {
        var review1 = new Review(5, "Excellent hotel, very clean", "2018-12-17")
        expect(review1.rating).to.equal(5)
        expect(review1.text).to.equal("Excellent hotel, very clean")
        expect(review1.date.toISOString()).to.equal('2018-12-17T00:00:00.000Z')
        expect(review1.ratingAsStars()).to.equal("⭐️⭐️⭐️⭐️⭐️")

        var review2 = new Review(1, "Terrible hotel, smelled of mice", "2018-01-01")
        expect(review2.rating).to.equal(1)
        expect(review2.text).to.equal("Terrible hotel, smelled of mice")
        expect(review2.date.toISOString()).to.equal('2018-01-01T00:00:00.000Z')
        expect(review2.ratingAsStars()).to.equal("⭐️")
    })
    it('toJSON test', () => {
        var review = new Review(5, "Excellent hotel, very clean", "2018-12-17")
        expect(review.toJSON()).to.deep.equal({ "rating": 5, "text": "Excellent hotel, very clean",
        "date": "2018-12-17T00:00:00.000Z", ratingAsStars: "⭐️⭐️⭐️⭐️⭐️" })
    }) //because it's array and object - compares values inside array not array itself, the 2 arrays can be different but same values
});