const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    }, 
    jobID: {
        type: String,
        required: true,
        unique: true
    }, 
    companyName: {
        type: String,
        required: true
    }, 
    location: {
        type: String,
        required: true
    }, 
    jobPreference: {
        type: String,
        required: true,
        enum: [
            "Full-time",
            "Part-time",
            "Contract",
            "Remote"
        ]
    }, 
    jobSkills: {
        type: [String],
        required: true
    }
}
    , { collection: 'jobItems' }
)

module.exports = mongoose.model('jobItems', jobSchema)


