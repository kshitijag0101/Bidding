const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bidSchema = new Schema(
    {
        brand: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        images: {
            type: [String],
            required: true,
        },
        category: {
            type: String,
            enum: [
                "Car",
                "Properties",
                "Mobile",
                "Bike",
                "Electronic & Appliances",
                "Furniture",
                "Fashion",
                "Art",
            ],
            required: true,
        },
        owner: {
            type: String,
            enum: ["1st", "2nd", "3rd"],
            required: true,
        },
        condition: {
            type: String,
            enum: ["Antique", "New", "Refurbished", "Used", "Open Box"],
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        startingBid: {
            type: Number,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        startTime: {
            type: String,
            required: true,
        },
        endTime: {
            type: String,
            required: true,
        },
        seller: {
            name: {
                type: String,
                required: true,
            },
            contact: {
                type: Number,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            zip: {
                type: Number,
                required: true,
            },
            paymentMethod: {
                type: String,
                enum: ["Online Payment", "Cash On Delivery", "POS on Delivery"],
                required: true,
            },
            shippingCost: {
                type: Number,
                required: true,
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Bidding", bidSchema);
