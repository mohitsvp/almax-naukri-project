import React, { useEffect, useState } from 'react'
import JobsCard from '../components/Jobs/JobsCard'
import { baseApi } from '../api/axiosInstance';

const Jobs = () => {
    const [jobs, setJobs] = useState(null);

    const fetchAllJobs = async () => {
        try {
            const jobs = await baseApi.get("/list", {
                params : {
                    query: 'ReactJs',
                    location: 'India',
                }
            });
            setJobs(jobs.data.jobs)
        } catch (error) {
            console.error("Error in fetching job posts", error);
        }
    }

    useEffect(() => {
        fetchAllJobs();
    }, [])

    console.log("JOBS ", jobs)

  return (
    <div>
        <div className='w-[80%] m-auto'>
            {
                jobs && jobs.map((job) => (
                    <div key={job.id}>
                        <JobsCard title={job.title} companyName={job.company} description={job.description} location={job.location} experience={job.salaryRange} datePosted={job.datePosted}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Jobs