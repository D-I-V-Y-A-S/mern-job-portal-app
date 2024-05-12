const jobModel=require('../Model/jobModel')

const validatejob =async(request,response)=>{
    const givenjobID=request.body.jobID
    try{
        const matchingjob=await jobModel.findOne({jobID:givenjobID})
        if(matchingjob)
        {
            return response.status(200).json(matchingjob)
        }
        else
        {
            return response.status(404).send({message:"Invalid jobID"})
        }
    }
    catch(error)
    {
        return response.status(409).send({message: error.message})
    }
}

module.exports={validatejob}