import './Login.css';
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { login } from "../actions/session";
import { useNavigate } from "react-router-dom";


const mapStateToProps = ({ errors }) => ({
  errors
});
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email address").required("Required"),
  password: Yup.string().min(8, "Must be 8 characters or more").required("Required"),
});

const Login = ({errors, login}) => {
  let nav = useNavigate();
  const handleSubmit = (values) => {
      const user = {
          username: values.email, 
          password: values.password,
        }
        login(user).then(
          () => {
            nav("/home");
          }
        ).catch(
          (error) => {
            alert(JSON.stringify(error.response.data));
          }
        );
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

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);