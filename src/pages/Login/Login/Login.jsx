import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../assets/others/authentication1.png";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation()
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  //captcha part
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const captchaVerify = (event) => {
    const user_captcha = event.target.value;
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
        form.reset("");
        Swal.fire({
          title: 'Login Successfully!',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        navigate(from,{replace:true})
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
                  onBlur={captchaVerify}
                  type="text"
                  name="captcha"
                  placeholder="input captcha"
                  className="input input-bordered"
                />
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
