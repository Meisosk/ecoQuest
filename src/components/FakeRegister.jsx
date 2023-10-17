import { useRef, useState, useEffect } from "react";
import { supabase } from "../App";
import "./signin.css";

const FakeRegister = () => {
  const signInSectionRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const locationRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const usernameRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false); // disabling multiple clicks

  //using refs avoids unnecessary re-renders whenever we enter the input

  const register = () => {
    let email = emailRef.current?.value ?? "";
    let password = passwordRef.current?.value ?? "";
    let username = usernameRef.current?.value ?? "";
    let location = locationRef.current?.value ?? "";
    console.log("this is the data going in", {
      email,
      password,
      username,
      location,
    });
    return supabase.auth.signUp({
      email,
      password,
      options: { data: { username: username, location: location } },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !passwordRef.current?.value ||
      !emailRef.current?.value ||
      !confirmPasswordRef.current?.value ||
      !usernameRef.current?.value ||
      !locationRef.current?.value
    ) {
      setErrorMsg("Please fill out all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await register();
      console.log(data);
      if (!error && data) {
        setMsg(
          "Registration Successful. Check your email to confirm your account"
        );
      }
    } catch (error) {
      setErrorMsg("Error in Creating Account");
    }
    setLoading(false);
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
        className="bg-primary w-3/5 rounded-3xl flex justify-center mt-24 mb-24"
      >
        <div>
          <h2 className="text-center mb-20 text-6xl mt-16">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div id="username" className="flex">
              <label>Username</label>
              <input type="username" ref={usernameRef} required />
            </div>
            <div id="location" className="flex">
              <label>Location</label>
              <input type="text" ref={locationRef} required />
            </div>
            <div id="email" className="flex">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </div>
            <div id="password" className="flex">
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            </div>
            <div id="confirm-password" className="flex">
              <label>Confirm Password</label>
              <input type="password" ref={confirmPasswordRef} required />
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
            <div className="text-center mt-20 mb-20">
              <button
                disabled={loading}
                type="submit"
                className="w-full bg-button"
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

export default FakeRegister;
