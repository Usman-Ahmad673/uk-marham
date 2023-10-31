const mongoose = require('mongoose')

const diseaseSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    images:
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    
})

module.exports = mongoose.model("Diseases",diseaseSchema)