const Bidding = require("../models/bidding");

exports.postBid = async (req, res, next) => {
    try{
        const { brand, title, description, category, owner, condition, location, startingBid, startDate, endDate, startTime, endTime, name, contact, email, city, state, zip, payment, shippingCost } = req.body;
        const imagesPath = [];
        const images = req.files;
        images.forEach(image => {
            imagesPath.push(image.path.replace("\\" ,"/"));
        });
        const bid = new Bidding({
            brand: brand,
            title: title,
            decription: description,
            images: imagesPath,
            category: category,
            owner: owner,
            condition: condition,
            location: location,
            startingBid: startingBid,
            startDate: startDate,
            endDate: endDate,
            startTime: startTime,
            endTime: endTime,
            seller: {
                name: name,
                contact: contact,
                email: email,
                city: city,
                state: state,
                zip: zip,
                payment: payment,
                shippingCost: shippingCost,
            }
        });
        await bid.save();
        res.status(200).json({message: 'Bid created Successfully', bid: bid});
    }
    catch(err) {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};