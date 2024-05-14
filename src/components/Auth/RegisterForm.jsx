import React, {  useState } from "react";
import FormInput from "../../ui/FormInput";
import Button from "../../ui/Button";
import {collection, addDoc} from "firebase/firestore"
import {db} from "../../firebase"
import {toast} from "react-toastify"


const seletedWorkStyles = {
  border: "1px solid black",
};


const RegisterForm = () => {
  const [workState, setWorkStatus] = useState(null);
  const [formData, setFormData] = useState({
    name : '',
    email : '',
    password : '',
    number : ''
  })

  const addUser = async () => {
    try {
      const docRef = await addDoc(collection(db, 'user'), {
        user : formData
      })
      toast.success('User registered successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (error) {
      toast.error('Error in registering the user', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.error("Error adding user info", error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser();
  }

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name] : value})
  }

  return (
    <div className="border rounded-md bg-white p-5 shadow-lg">
      <div>
        <p className="font-bold text-[20px]">Create your Naukri profile</p>
      </div>
      <div>
        <p className="text-gray-500">
          Search & apply to jobs from India's No.1 Job Site
        </p>
      </div>
      <div className="my-5">
        <form action="" onSubmit={handleSubmit}>
          <FormInput
            labelText={"Full Name"}
            inputPlaceholder={"What is your name?"}
            inputType={"text"}
            required={false}
            value={formData.name}
            onChange={handleInputChange}
            name="name"
          />
          <FormInput
            labelText={"Email ID"}
            inputPlaceholder={"Tell us your email id"}
            inputType={"email"}
            required={false}
            value={formData.email}
            onChange={handleInputChange}
            name="email"
          />
          <FormInput
            labelText={"Password"}
            inputPlaceholder={"(Minimum 6 characters)"}
            inputType={"password"}
            required={false}
            value={formData.password}
            onChange={handleInputChange}
            name="password"
          />
          <FormInput
            labelText={"Mobile Number"}
            inputPlaceholder={"Enter your mobile number"}
            inputType={"number"}
            required={false}
            value={formData.number}
            onChange={handleInputChange}
            name="number"
          />
          <div className="flex gap-5">
            <div
              onClick={() => handleWorkChange("experienced")}
              style={workState == "experienced" ? seletedWorkStyles : {}}
            >
              I am Experienced
            </div>
            <div
              onClick={() => handleWorkChange("fresher")}
              style={workState == "fresher" ? seletedWorkStyles : {}}
            >
              I m a fresher
            </div>
          </div>
          {workState == "experienced" ? (
            <div>Hello I am experienced</div>
          ) : workState == "fresher" ? (
            <div>Hello I am fresher</div>
          ) : (
            <div></div>
          )}
          <Button primaryColor={"white"} backgroundColor={"#285df5"}>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
