import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import  axios  from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [terms, setTerms] = useState(false);
  const [radio, setRadio] = useState(false);
  const [match, setMatch] = useState(false);
  const [msg, setMsg] = useState();

  console.log(terms);
  console.log(email, password, confirmPassword, lastName, firstName, userType);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userType) {
      setRadio(false);
      if (password === confirmPassword) {
        setMatch(false);
        try {
          let result = await axios.post(
            `http://localhost:4000/user/register`,
            {
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
              userType: userType,
            }
          );
          // result = await result.json();
          console.log(result.data);
          if(result.data){
            setMsg(result.data.msg)
          }
        } catch (err) {
          console.log(err);
          throw err;
        }
      } else {
        setMatch(true);
      }
    } else {
      setRadio(true);
    }
  };
  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Registration Form</h2>
            {radio && <p className="warning">Please select radio box</p>}
            {match && <p className="warning">Password Not Matched</p>}
            {msg && <p className="msg">{msg}</p>}
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
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
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
                    placeholder="Re-type Password"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      {" "}
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="First Name"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field">
                      {" "}
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Last Name"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="input_field radio_option">
                  <input
                    type="radio"
                    name="radiogroup1"
                    id="rd1"
                    value="Male"
                    onChange={() => setUserType("Male")}
                  />
                  <label htmlFor="rd1" value="Male">
                    Male
                  </label>
                  <input
                    type="radio"
                    name="radiogroup1"
                    id="rd2"
                    value="Female"
                    onClick={() => setUserType("Female")}
                  />
                  <label htmlFor="rd2">Female</label>
                </div>

                <div className="input_field checkbox_option">
                  <input
                    type="checkbox"
                    id="cb1"
                    onClick={() => setTerms((previour) => !previour)}
                    required
                  />
                  <label htmlFor="cb1">I agree with terms and conditions</label>
                </div>
                <input
                  className="button"
                  type="submit"
                  value="Register"
                  // onClick={handleSubmit}
                />
              </form>
              <p className="credit">
                All Ready Have account <Link to="/">Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
