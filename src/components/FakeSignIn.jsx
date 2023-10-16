import { useRef, useState } from "react";
import { useAuth } from "../components/AuthProvider"
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
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
          data: { user, session},
          error
        } = await login(emailRef.current.value, passwordRef.current.value);
        if (error) setErrorMsg(error.message);
        if(user && session) navigate("/");
      } catch (error) {
        setErrorMsg("Email or Password Incorrect")
      }
      setLoading(false)
      }


      return (
        <>
          <div>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div id="email">
                <label>Email</label>
                <input type="email" ref={emailRef} required />
              </div>
              <div id="password">
                <label>Password</label>
                <input type="password" ref={passwordRef} required />
              </div>
              {errorMsg && (
                <div className="alert alert-danger" role="alert">
                  {errorMsg}
                </div>
              )}
              <div className="text-center mt-2">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-50 btn btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </>
      );
    };

export default Login;
