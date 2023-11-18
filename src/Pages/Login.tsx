import React, { useEffect } from "react";
import axios from "axios";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

function Login() {
  const signIn = useSignIn();
  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    // Check if the user is already authenticated
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8085/auth", formData)
      .then((res) => {
        if (res.status === 200) {
          if (
            signIn({
              token: res.data.token,
              expiresIn: 3000,
              tokenType: "Bearer",
              authState: { email: formData.email },
            })
          ) {
            // Only if you are using refreshToken feature
            // Redirect or do-something
          } else {
            // Throw error
          }
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        // Handle errors here
        if (error.response && error.response.status === 401) {
          // Handle 401 Unauthorized error
          setErrorMessage("Incorrect email or password. Please try again.");
        } else {
          // Handle other errors
          setErrorMessage("An error occurred. Please try again later.");
        }
      });
  };

  return (
    <>
      <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form
                className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
                onSubmit={onSubmit}
              >
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                  Sign In
                </h3>
                <p className="mb-4 text-grey-700">
                  Enter your email and password
                </p>
                <label className="mb-2 text-sm text-start text-grey-900">
                  Email*
                </label>
                <input
                  id="identifier"
                  type="email"
                  placeholder="mail@loopple.com"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-zinc-100 text-dark-grey-900 rounded-2xl"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <label className="mb-2 text-sm text-start text-grey-900">
                  Password*
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter a password"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-zinc-100 text-dark-grey-900 rounded-2xl"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-700">
                  Sign In
                </button>
                {errorMessage && (
                  <p className="text-sm text-red-500">{errorMessage}</p>
                )}
                <p className="text-sm leading-relaxed text-grey-900">
                  Not registered yet?
                  <a className="font-bold text-grey-700">Create an Account</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
