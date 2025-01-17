import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/images/logo1.png";
import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import LogInWithGoogle from "../../assets/images/logInWithGoogle.png";

const SignIn = () => {
  const context = useContext(MyContext);
  useEffect(() => {
    context.setisHeaderFooter(false);
  }, []);
  return (
    <section className="section signInPage">
      <div className="shape-bottom">
        <svg
          fill="#fff"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 1921 819.8"
          style={{ enableBackground: "new 0 0 1921 819.8" }}
        >
          <path
            className="st0"
            d="M -1 -2 L -4 811 L 1918 811 L 1927 315 C 966 361 279 1185 -72 48 Z"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="box card p-3 shadow border-0">
          <div className="text-center">
            <img src={Logo} alt="Logo" />
          </div>

          <form className="mt-3" action="">
            <h2 className="mb-4">Sign In</h2>
            <div className="form-group">
              <TextField
                id="standard-basic"
                required
                label="Email"
                variant="standard"
                type="email"
                className="w-100"
              />
            </div>
            <div className="form-group">
              <TextField
                id="standard-basic"
                required
                label="Password"
                variant="standard"
                type="password"
                className="w-100"
              />
            </div>

            <Link className="border-effect cursor txt">Forgot Password</Link>
            <div className="d-flex align-items-center mt-3 mb-3">
              <div className="row w-100">
                <div className="col-md-6">
                  <Button className="btn-blue btn-lg col w-100 ">
                    Sign In
                  </Button>
                </div>
                <div className="col-md-6">
                  <Link to="/">
                    <Button
                      className=" btn-lg w-100"
                      variant="outlined"
                      onClick={() => context.setisHeaderFooter(true)}
                    >
                      Cancel
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <p className="txt">
              Not Registered? &nbsp;
              <Link className="border-effect" to="/signUp">
                Sign Up
              </Link>
            </p>
            <h6 className="mt-3 text-center font-weight-bold">
              Or continue with social account
            </h6>
            <Button className="logInWithGoogle mt-2" variant="outlined">
              <img src={LogInWithGoogle} alt="" className="w-100" /> Sign In
              with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default SignIn;
