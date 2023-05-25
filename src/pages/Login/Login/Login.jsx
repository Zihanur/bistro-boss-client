import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import loginImg from "../../../assets/others/authentication1.png";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const [error, setError] = useState("");

  //captcha part
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const captchaVerify = () => {
    const user_captcha = captchaRef.current.value;
    console.log(validateCaptcha, user_captcha);
    if (validateCaptcha(user_captcha)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  //submit login handle
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    //login function
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Successfully Login");
        form.reset("");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <img className="p-6" src={loginImg} alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl font-bold text-center">Login now</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  placeholder="input captcha"
                  className="input input-bordered"
                />
                <button
                  onClick={captchaVerify}
                  className="btn btn-outline btn-xs mt-2"
                >
                  Verify
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <p>
                Are you new?{" "}
                <Link to={"/signup"} className="text-primary">
                  SignUp
                </Link>
              </p>
              <p className="text-orange-600">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
