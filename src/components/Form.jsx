import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({ account, setAccount, setStep }) => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("eye");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleEyeIcon = () => {
    if (type === "password") {
      setIcon("eye-slash");
      setType("text");
    } else {
      setIcon("eye");
      setType("password");
    }
  };

  const onChange = (e) => {
    setAccount((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (account.password1 === account.password2) {
      alert("Account created, congrats!");
      setStep(2);
    } else {
      setErrorMessage("Both passwords should be the same.");
    }
  };

  return (
    <>
      <h1>Create an account</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Name</label>
        <input
          type="text"
          name="username"
          onChange={onChange}
          value={account.username}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={account.email}
        />

        <label htmlFor="password1">Password</label>
        <div className="pwd-container">
          <input
            type={type}
            name="password1"
            onChange={onChange}
            value={account.password1}
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
            onChange={onChange}
            value={account.password2}
            style={{ borderColor: errorMessage && "red" }}
          />
          <span onClick={toggleEyeIcon}>
            <FontAwesomeIcon icon={icon} />
          </span>
        </div>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button className="btn-submit" type="submit">
          REGISTER
        </button>
      </form>
    </>
  );
};

export default Form;
