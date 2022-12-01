import './Signup.css';

function Signup() {
  return (
    <div id="signupBox">
      <form className="form" onSubmit={console.log("submitted")}>
      <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" placeholder="John Doe"/>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="johndoe@email.com" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">Enter</button>
        </form>
    </div>
  );
}

export default Signup;