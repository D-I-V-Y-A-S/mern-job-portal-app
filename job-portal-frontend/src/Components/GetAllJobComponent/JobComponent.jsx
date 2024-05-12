import React from 'react'
import './GetAllJobComponent.css'

const JobComponent = ({job}) => {
  return (
    <div className='card'>
    <div className="text-container">
    <h3>{job.jobTitle}</h3>
    <p className='status'> {job.jobID}</p>
    <p className='status'> {job.companyName}</p>
    <p className='author'>{job.location}</p>
    <p className="availability">{job.jobPreference}</p>
    <p className='author'>{job.jobSkills.map(skill =>(skill)).join(', ')}</p>
    </div>
  </div>
  )
}

export default JobComponent
