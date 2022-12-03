import './Login.css';
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from '../axios';

const LOGIN_URL = '/login/';


const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email address").required("Required"),
  password: Yup.string().min(8, "Must be 8 characters or more").required("Required"),
});

function Login() {
  const handleSubmit = async (values) => {
    try{
      const response = await axios.post(LOGIN_URL,{
          username: values.email, 
          password: values.password,
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: false
        }
      );
      console.log(response.data);
    }
    catch(err){
        console.log(JSON.stringify(err));
        console.log("Registration Failed");
    }
    console.log(values);
  };

    return (
      <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}>
        <Form id="loginBox">
          <div className="form">
            <div className="input-group">
                <label>
                  Email: <Field type="email" name="email"  className="input-field" placeholder="sample@email.com"/>
                <ErrorMessage name="email" component="div" />
              </label>
            </div>
            <div className="input-group">
              <label>
                Password:
                <Field type="password" name="password"  className="input-field"/>
                <ErrorMessage name="password" component="div" />
              </label>
            </div>
            <button type="submit" className="primary">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    );
  } 

export default Login;