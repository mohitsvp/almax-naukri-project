import Skill from "../models/skill.model.js";



const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find({});
        return res.status(200).send(skills);
    } catch (error) {
        return res.status(500).send({message : "Error in getting skills", error : error.message})
    }
}

const getSkills = async (req, res) => {
    const {id} = req.params;
    try {
        const skills = await Skills.findById(id);
        return res.status(200).send(skills);
    } catch (error) {
        return res.status(500).send({message : "Error in getting skills", error : error.message})
    }
}

const createSkills = async (req, res) => {
    try {
        const skills = await Skill.create(req.body);
        return res.status(201).send({message : "Skills created successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting skills", error : error.message})
    }
}

const updateSkills = async (req, res) => {
    const {id} = req.params;
    try {
        const skills = await Skill.findByIdAndUpdate(id, req.body, {
            new: true
        });
        return res.status(200).send({message : "Skills updated successfully"});
    } catch (error) {
        return res.status(500).send({message : "Error in getting skills", error : error.message})
    }
}

const deleteSkills = async (req, res) => {
    const {id} = req.params;
    try {
        const skills = await Skill.findByIdAndDelete(id);
        return res.status(200).send({message : "Skills deleted successfully"});
    } catch (error) {
        return res.status(500).send({message : "Error in getting skills", error : error.message})
    }
}

export {
    getAllSkills,
    getSkills,
    createSkills,
    updateSkills,
    deleteSkills
}