const express=require('express')
const router=express.Router()

const {getAllJobs,addJob,deleteJob,updateJob}=require('../Controller/jobController')
const{validatejob}=require('../Controller/validateController')

router.route('/').get(getAllJobs).post(addJob).delete(deleteJob).patch(updateJob)
router.route('/validate').post(validatejob)
module.exports=router

