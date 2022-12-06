import './Logout.css';
import { logout } from "../actions/session";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = ({ errors }) => ({
  errors
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const Logout = ({ errors, logout }) => { /* Needs testing */
  let nav = useNavigate();
  const handleSubmit = () => {
    logout().then(() => {
        nav("/home");
      })
      .catch((error) => {<div />});
  };

  return (
    <div id="logoutBox">
      <button className='primary' onClick={handleSubmit}>Logout</button>
    </div>
  );
};
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);