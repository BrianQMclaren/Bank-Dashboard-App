import React from "react";
import { Link } from "@reach/router";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };
  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <nav>
          <Link className="logo" to="/">
            <strong>UNI</strong>BANK
          </Link>
          <h3>Login</h3>
          <Link to="/register">Register</Link>
        </nav>
        <form className="form-login" onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            placeholder="email"
          />
          <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            placeholder="password"
          />
          <button className="form-login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
