import Jobs from "../models/job.model.js"


const getAllJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find({});
        return res.status(200).send(jobs);
    } catch (error) {
        return res.status(500).send({
            message : "Error in getting all jobs",
            error : error.message
        })
    }
}


export {
    getAllJobs
}