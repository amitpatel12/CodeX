import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit =async (e) => {
    e.preventDefault();
    let res = await axios.post(
      `http://localhost:4000/user/login`,
      {
        email: email,
        password: password,
      }
    );
    res = res.data
    localStorage.setItem("token", JSON.stringify(res.token));
    localStorage.setItem("user", JSON.stringify(res.result));
    if(res.token){
      navigate('/dashboard')
    }
    console.log(res.result);
  }


  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Log In</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <input className="button" type="submit" value="Log In" />
              </form>
              <p className="credit">
                Don't Have Account <Link to="/register"> Register </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
