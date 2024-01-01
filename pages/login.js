import Link from "next/link";
import { React, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(router.query.to)
    await axios
      .post("http://localhost:3000/api/auth/login", user)
      .then((res) => {
        if (res) {
          toast.success("You have been Sucessfully Logged In ", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log('res : ',res)
          localStorage.setItem('token' , res.data.token);
          setTimeout(() => {
            router.push(router.query.to);
          }, 2000);
        }
      })
      .catch((error) => {
        toast.error("Log In Failed . Please try again after some time .", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("Error in registering");
      });
    setUser({ name: "", email: "", password: "" });
    console.log("on submit user : ", user);
  };

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setUser({ ...user, name: e.target.value });
    } else if (e.target.name == "email") {
      setUser({ ...user, email: e.target.value });
    } else if (e.target.name == "password") {
      setUser({ ...user, password: e.target.value });
    }
  };

  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <ToastContainer />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="./logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={user.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link legacyBehavior href={"/htmlForgot-password"}>
                    <a className="font-semibold text-pink-600 hover:text-pink-500">
                      Forgot password?
                    </a>
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={user.password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Does not have account ?
            <Link legacyBehavior href={"/signup"}>
              <a className="font-semibold leading-6 text-pink-600 hover:text-pink-500">
                Register Now
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
