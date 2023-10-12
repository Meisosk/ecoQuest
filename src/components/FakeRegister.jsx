import { useRef, useState } from "react";
import { supabase } from "../App"

const FakeRegister = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false); // disabling multiple clicks

  //using refs avoids unnecessary re-renders whenever we enter the input

  const register = () => {
    let email = emailRef.current?.value ?? '';
    let password = passwordRef.current?.value ?? '';
    console.log("this is the email and pw going in", {email, password});
    return supabase.auth.signUp({ email, password });
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (
        !passwordRef.current?.value ||
        !emailRef.current?.value ||
        !confirmPasswordRef.current?.value
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
        console.log(data)
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

  return (
    <>
      <div>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div id="email">
            <label>Email</label>
            <input type="email" ref={emailRef} required />
          </div>
          <div id="password">
            <label>Password</label>
            <input type="password" ref={passwordRef} required />
          </div>
          <div id="confirm-password">
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
          <div className="text-center mt-2">
            <button
              disabled={loading}
              type="submit"
              className="w-50 btn btn-primary"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    
    </>
  );
};

export default FakeRegister;
