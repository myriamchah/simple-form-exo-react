import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("eye");

  const toggleEyeIcon = () => {
    if (type === "password") {
      setIcon("eye-slash");
      setType("text");
    } else {
      setIcon("eye");
      setType("password");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password1 === password2) {
      alert("Account created, congrats!");
    } else {
      setErrorMessage("Both passwords should be the same.");
    }
  };

  return (
    <>
      <h1>Create an account</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="userName">Name</label>
        <input
          type="text"
          name="userName"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <label htmlFor="password1">Password</label>
        <div className="pwd-container">
          <input
            type={type}
            name="password1"
            onChange={(e) => {
              setPassword1(e.target.value);
            }}
            value={password1}
            style={{ borderColor: errorMessage && "red" }}
          />
          <span onClick={toggleEyeIcon}>
            <FontAwesomeIcon icon={icon} />
          </span>
        </div>

        <label htmlFor="password2">Confirm Password</label>
        <div className="pwd-container">
          <input
            type={type}
            name="password2"
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            value={password2}
            style={{ borderColor: errorMessage && "red" }}
          />
          <span onClick={toggleEyeIcon}>
            <FontAwesomeIcon icon={icon} />
          </span>
        </div>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit">REGISTER</button>
      </form>
    </>
  );
};

export default Form;
