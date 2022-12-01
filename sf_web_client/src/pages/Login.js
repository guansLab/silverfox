import './Login.css';

function Login() {
  return (
    <div id="loginBox">
      <form className="form" onSubmit={console.log("submitted")}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="name@email.com" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">Enter</button>
        </form>
    </div>
  );
}

export default Login;