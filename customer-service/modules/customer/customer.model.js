(function(){
    let mongoose = require('mongoose');
    
    let Schema = mongoose.Schema;

    let CustomerSchema = new Schema({
        firstName: {
            type: String,
            required: true,
            minlength: 2
        },
        lastName: {
            type: String,
            required: true,
            minlength: 1
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: false,
        },
        state: {
            type: String,
            required: false,
        },
        zipcode: {
            type: Number,
            required: false,
        },
        country: {
            type: String,
            required: false,
        },
       
    });

    module.exports = mongoose.model('customers', CustomerSchema)

})();



    
