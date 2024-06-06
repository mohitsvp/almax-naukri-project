import Company from "../models/company.model.js"


const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find({});
        return res.status(200).send(companies);
    } catch (error) {
        return res.status(500).send({message : "Error in getting companies", error : error.message})
    }
}

const getCompany = async (req, res) => {
    const {id} = req.params;
    try {
        const company = await Company.findById(id);
        return res.status(200).send(company);
    } catch (error) {
        return res.status(500).send({message : "Error in getting companies", error : error.message})
    }
}

const createCompany = async (req, res) => {
    try {
        const company = await Company.create(req.body);
        return res.status(201).send({message : "Company created successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting companies", error : error.message})
    }
}

const updateCompany = async (req, res) => {
    const {id} = req.params;
    try {
        const company = await Company.findByIdAndUpdate(id, req.body, {
            new: true
        });
        return res.status(200).send({message : "Company updated successfully"});
    } catch (error) {
        return res.status(500).send({message : "Error in getting companies", error : error.message})
    }
}

const deleteCompany = async (req, res) => {
    const {id} = req.params;
    try {
        const company = await Company.findByIdAndDelete(id);
        return res.status(200).send({message : "Company deleted successfully"});
    } catch (error) {
        return res.status(500).send({message : "Error in getting companies", error : error.message})
    }
}

export {
    getAllCompanies,
    getCompany,
    createCompany,
    updateCompany,
    deleteCompany
}