import React, { useState } from 'react'
import './AddJobComponent.css'
import axios from 'axios';

const AddJobComponent = () => {
    const [jobInfo, setBookInfo] = useState({
        jobTitle: '',
        jobID: '',
        companyName: '',
        location: '',
        jobPreference: '',
        jobSkills: ''
    });

    const inputHandler = (event) => {
        const { name, value } = event.target
        setBookInfo({
            ...jobInfo, [name]: value
        })
        console.log(jobInfo)
    }

    const { jobTitle,
        jobID,
        companyName,
        location,
        jobPreference,
        jobSkills } = jobInfo;

    const formSubmitHandler = async (event) => {
        event.preventDefault()
        axios.post('http://localhost:3500/api/v1/job', jobInfo)
            .then(response => {
                alert(response.data.message)
                window.location.href = '/'
            })
            .catch(error => {
                alert(error.response.data.message)
            })
    }


    return (
        <form className='form-container' onSubmit={formSubmitHandler}>
            <h2>Adding a new job</h2>

            <div className='form-group'>
                <label>Job Title</label>
                <input
                    type='text'
                    placeholder='Enter the job title'
                    value={jobTitle}
                    name="jobTitle"
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>JOB ID</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter the job id'
                    value={jobID}
                    name="jobID"
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Company Name</label>
                <input
                    type='text'
                    placeholder='Enter the companyName'
                    value={companyName}
                    name="companyName"
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Location</label>
                <input
                    type='text'
                    placeholder='Enter the location'
                    value={location}
                    name="location"
                    onChange={inputHandler}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Job preference</label>
                <select
                    className='drop-down'
                    type='text'
                    placeholder='Enter the job preference'
                    value={jobPreference}
                    name="jobPreference"
                    onChange={inputHandler}
                    required>
                    <option value="">--Select--</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>

            <div className='form-group'>
                <label>Job Skills</label>
                <input
                    type='text'
                    placeholder='Enter the location'
                    value={[jobSkills]}
                    name="jobSkills"
                    onChange={inputHandler}
                    required
                />
            </div>

            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    );
}

export default AddJobComponent
