
const mongoose = require("mongoose")
const crptoSchema = new mongoose.Schema({
    symbol: {
        type: String,
        // unique: true,
    },
    name: {
        type: String,
        // unique: true,
    },
    marketCapUsd: {
        type: String,
    },
    priceUsd: {
        type: String,
    },
})
module.exports = mongoose.model('Crypto', crptoSchema)