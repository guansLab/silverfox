import React from "react";
import './Signup.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { signup } from "../actions/session";
import { useNavigate } from "react-router-dom";


const mapStateToProps = ({ errors }) => ({
  errors
});
const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

const signupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email address").required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  password: Yup.string().min(8, "Must be 8 characters or more").required("Required"),
  confirmPassword: Yup.string().test('passwords-match', 'Passwords must match', function(value){
    return this.parent.password === value;
  })
});


const Signup = ({errors, signup}) => {

  let nav = useNavigate();
  const handleSubmit = (values) => {
        const user = {
          email: values.email, 
          first_name: values.firstName,
          last_name: values.lastName,
          password: values.password,
          confirm_password: values.confirmPassword
        }
        signup(user).then(() => { alert("Signup Successful, please Login!"); nav('/login')}).catch();
    };

    return (
      <Formik
      initialValues={{email: '', password: '', firstName: '', lastName: '', confirmPassword: ""}}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}>
        <Form id="signupBox">
          <div className="form">
            <div className="input-group">
              <label>
                First Name: <Field type="text" name="firstName" className="input-field" placeholder="John"/>
                <ErrorMessage name="firstName" component="div" />
              </label>
            </div> 
            <div className="input-group">
              <label>
                Last Name: <Field type="text" name="lastName"  className="input-field" placeholder="Doe"/>
                <ErrorMessage name="lastName" component="div" />
              </label>
            </div>
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
            <div className="input-group">
              <label>
                Confirm Password:
                <Field type="password" name="confirmPassword"  className="input-field"/>
                <ErrorMessage name="confirmPassword" component="div" />
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
  )(Signup);