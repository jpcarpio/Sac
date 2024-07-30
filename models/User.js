const mongoose = require('mongoose');


const familySchema = new mongoose.Schema({
    Pangalan : {
        type:String,
        required:true
    }, 

    Relasyon : {
        type:String,
        required: true
    },

    Kasarian : {
        type: String,
        enum: ["Lalaki", "Babae"]
    },

    Sektor: {
        type:String,
        required: true,
    },

    Kondisyon : {
        type:String,
    }

    
});

const addressSchema = new mongoose.Schema({
    Kalye : {
        type: String,
        required: true
    }, 

    Barangay : {
        type: String,
        required: true,
        default: " SAN JOSE"
    }, 

    Lungsod : {
        type: String,
        required: true,
        default: "OCCIDENTAL MINDORO"
    }, 

    Probinsya : {
        type: String,
        required: true,
        default: "REGION IV-B [MIMAROPA]"
    }, 

    Rehiyon : {
        type: String,
        required: true
    }, 
});

const userSchema = new mongoose.Schema({
    pangalan : {
        type: String,
        required: true,
    },

    tirahan : {
        type: addressSchema,
        required: true,
    },

    kasarian : {
        type: String,
        enum: ["Lalaki", "Babae"],
        required: true,
    },

    idType : {
        type: String,
        required: true,
    },

    idNumber : {
        type: String,
        required: true,
    },

    trabaho : {
        type: String,
        required: true
    },

    sahod : {
        type: Number,
        require: true

    }, 

    workPlace : {
        type: String,
        required: true
    },

    sektor : {
        type: String,
        required: true
    }, 

    kalusugan :{
        type: String,
        required: true
    },

    cellPhoneNumber : {
        type:String,
        required:true
    },

    category : {
        type:String,
        enum: [ "Benepisyaryo ng UCT", "Benepisyaryo ng 4Ps", "Katutubo(Grupo)", "Others"]
    },

    familyMembers : {
        type:familySchema
    }, 

    birthday: {
        type: Date,
        validate: {
          validator: function(v) {
            return v < Date.now();
          },
          message: props => `${props.value} is not a valid birthday!`
        }
      }

    
    
})

module.exports = mongoose.model('User', userSchema);