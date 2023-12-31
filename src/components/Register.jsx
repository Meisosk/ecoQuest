import { useRef, useState, useEffect } from "react";
import { supabase } from "../GetTables";
import { useNavigate, Link } from "react-router-dom";
import "./signin.css";

const Register = () => {
  const signInSectionRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const locationRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const usernameRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false); // disabling multiple clicks

  const navigate = useNavigate();

  //using refs avoids unnecessary re-renders whenever we enter the input

  const register = () => {
    let email = emailRef.current?.value ?? "";
    let password = passwordRef.current?.value ?? "";
    let username = usernameRef.current?.value ?? "";
    let location = locationRef.current?.value ?? "";
    return supabase.auth.signUp({
      email,
      password,
      options: { data: { username: username, location: location } },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get user inputs
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const confirmPassword = confirmPasswordRef.current?.value ?? "";
    const username = usernameRef.current?.value ?? "";
    const location = locationRef.current?.value ?? "";

    if (!email || !password || !confirmPassword || !username || !location) {
      setErrorMsg("Please fill out all the fields");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords don't match");
      return;
    }

    // Check password requirements
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!?$]).{8,}$/.test(password)) {
      setErrorMsg(
        <div className="text-center text-red-600">
          <p>Password must meet the following requirements:</p>
          <ul>
            <li>At least one:</li>
            <li>number</li>
            <li>uppercase letter</li>
            <li>lowercase letter</li>
            <li>special character (!, ?, $)</li>
            <li>And be 8 or more</li>
            <li>characters in length</li>
          </ul>
        </div>
      );
      return;
    }

    // Continue with registration
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await register();
      if (!error && data) {
        setMsg("Registration Successful!");
        setTimeout(() => {
          navigate("/profile");
          window.location.reload();
        }, 1000);
        setIsRegistered(true);
      }
    } catch (error) {
      setErrorMsg("Please wait");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (signInSectionRef.current) {
      signInSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div
        ref={signInSectionRef}
        className="bg-primary w-3/5 rounded-3xl flex justify-center mt-24 mb-24 p-5 sign-container"
      >
        <div>
          <h2 className="text-center text-words mb-20 text-6xl mt-16">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="text-words">
            <div className="mb-4">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                ref={usernameRef}
                required
                className="w-full border-b-2 px-3 py-2 mt-1 focus:border-transparent bg-transparent"
                placeholder="Enter Username"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location">Location (Your City):</label>
              <input
                type="text"
                id="location"
                ref={locationRef}
                required
                className="w-full border-b-2 px-3 py-2 mt-1 focus:border-transparent bg-transparent"
                placeholder="Enter Location"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                required
                className="w-full border-b-2 px-3 py-2 mt-1 focus:border-transparent bg-transparent"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
                required
                className="w-full border-b-2 px-3 py-2 mt-1 focus:border-transparent bg-transparent"
                placeholder="Enter Password"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                ref={confirmPasswordRef}
                required
                className="w-full border-b-2 px-3 py-2 mt-1 focus:border-transparent bg-transparent"
                placeholder="Confirm Password"
              />
            </div>
            {errorMsg && (
              <div className="alert alert-danger" role="alert">
                {errorMsg}
              </div>
            )}
            {msg && (
              <div className="alert alert-success" role="alert">
                {msg}
              </div>
            )}
            <p className="text-center text-zinc-300">
              Already have an account?{" "}
              <Link to="/signin" className="text-button">
                Click Here!
              </Link>
            </p>

            <div className="text-center mt-20 mb-20">
              <button
                disabled={loading}
                type="submit"
                className="w-full bg-button p-3"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
