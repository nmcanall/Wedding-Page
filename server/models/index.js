const { Schema, model } = require('mongoose');

// Structure for a guest
const guestSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        ageGroup: {
            type: String,
            required: true,
            validate: {
                validator: function(input) {
                    return input === "adult" || input === "young-adult" || input === "kid" || input === "baby"
                },
                message: "Must pick a valid age group (adult, teen, kid, or baby)."
            }
        },

        dinner: {
            type: String,
            required: true,
            validate: {
                // Front end options: Chicken Marsala, Sliced Pork Loin, Vegetarian Raviolli, Kid's Chicken Strips, Kid's Mini Burgers
                validator: function(input) {
                    return input === "chicken" || input === "pork" || input === "vegetarian" || input === "kid-chicken" || input === "kid-burger"
                },
                message: "Must pick a valid dinner (chicken, pork, vegetarian, kid-chicken, or kid-burger)."
            }
        }
    }
);

// Structure for an invitee
const inviteeSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        ageGroup: {
            type: String,
            required: true,
            validate: {
                validator: function(input) {
                    return input === "adult" || input === "young-adult" || input === "kid" || input === "baby"
                },
                message: "Must pick a valid age group (adult, teen, kid, or baby)."
            }
        },

        dinner: {
            type: String,
            required: true,
            validate: {
                // Front end options: Chicken Marsala, Sliced Pork Loin, Vegetarian Raviolli, Kid's Chicken Strips, Kid's Mini Burgers
                validator: function(input) {
                    return input === "chicken" || input === "pork" || input === "vegetarian" || input === "kid-chicken" || input === "kid-burger"
                },
                message: "Must pick a valid dinner (chicken, pork, vegetarian, kid-chicken, or kid-burger)."
            }
        },

        address: {
            type: String
        },

        email: {
            type: String,
            match: [/.+@.+\..+/, 'Must be a valid email address.']
        },
        
        phone: {
            type: String,
            validate: {
                validator: function(v) {
                    return /\d{3}-\d{3}-\d{4}/.test(v);
                },
                message: "Phone number must be in format '123-456-7890'"
            }
        },

        hotel: {
            type: Boolean,
            required: true
        },

        guests: [guestSchema]
    }
);

const Invitee = model("Invitee", inviteeSchema);

module.exports = Invitee;