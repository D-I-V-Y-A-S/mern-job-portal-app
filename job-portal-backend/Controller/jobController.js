const data = require('../Data/initialData')
const jobModel = require('../Model/jobModel')

const getAllJobs = async (request, response) => {
    try {
        const jobs = await jobModel.find()
        if (jobs.length === 0) {
            const insertJob = await jobModel.insertMany(data)
            return response.status(201).json(insertJob)
        }
        response.status(200).json(jobs)
    }
    catch (error) {
        response.status(500).send({ message: error.message })
    }
}

const addJob = async (request, response) => {
    try {
        const newjob = request.body
        const existingjobs = await jobModel.find({ jobID: newjob.jobID });
        if (existingjobs.length === 0) {
            await jobModel.create(newjob)
            response.status(201).send({ message: `${newjob.jobTitle} added successfully!` })
        }
        else {
            response.status(409).send({ message: "Job with this job IDalready exists!" });
        }
    }
    catch (error) {
        response.status(500).send({ message: error.message })
    }
}

const deleteJob = async (request, response) => {
    const jobToBeDeleted = request.query.jobID;
    try {
        const job = await jobModel.findOne({ jobID: jobToBeDeleted });
        if (job) {
            const jobTitle = job.jobTitle;
            await jobModel.deleteOne({ jobID: jobToBeDeleted });
            response.status(200).send({ message: `${jobTitle} deleted successfully!` });
        } else {
            response.status(404).send({ message: "Job not found!" });
        }
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
}

const updateJob=async(request,response)=>{
    const jobToBeUpdated = request.body;
    try {

        await jobModel.updateMany({ jobID: jobToBeUpdated.jobID }, jobToBeUpdated)
        response.status(200).json(jobToBeUpdated)
    }
    catch (error) {
        response.status(500).send({ message: error.message });
    }    
}
module.exports = { getAllJobs, addJob, deleteJob,updateJob }

