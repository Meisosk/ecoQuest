import { useRef, useState, useEffect } from "react";
import { useAuth } from "../components/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";

const Login = () => {
  const loginSectionRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg("Please fill in the fields");
        return;
      }

      const {
        data: { user, session },
        error,
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) setErrorMsg(error.message);
      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (loginSectionRef.current) {
      loginSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div
        ref={loginSectionRef}
        className="bg-primary w-3/5 rounded-3xl flex justify-center mt-24 mb-24"
      >
        <div>
          <h2 className="text-center mb-20 text-6xl mt-16">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div id="email" className="flex">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </div>
            <div id="password" className="flex">
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            </div>
            {errorMsg && (
              <div className="alert alert-danger" role="alert">
                {errorMsg}
              </div>
            )}
            <p className="text-center text-zinc-300">
              Don't yet have an account?{" "}
              <Link to="/signup" className="text-button">
                {" "}
                Click Here!
              </Link>
            </p>
            <div className="text-center mt-20">
              <button
                disabled={loading}
                type="submit"
                className="w-full shadow-xl bg-button"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
