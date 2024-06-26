import React, { useState } from "react";
import "./Register.css";
import FormInput from "../Components/Common/FormInput";
import SubmitButton from "../Components/Common/SubmitButton";
import { api } from "../Config";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (confirmPassword !== password) {
        toast.error("Passwords don't match");
        return;
      }

      await axios.post(`${api}/auth/register`, { email, password });
      toast.success("Registration successful");
      setEmail("");
      setConfirmPassword("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="center-div">
      <form className="register-container">
        <h2>Register</h2>
        <FormInput
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Password"
          type="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <SubmitButton text="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
