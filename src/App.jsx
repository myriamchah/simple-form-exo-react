import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);

import "./App.css";

import Form from "./components/Form";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  const [account, setAccount] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <Form {...{ account, setAccount, setStep }} />}
      {step === 2 && <Results {...{ account, setStep }} />}
      <Footer />
    </>
  );
}

export default App;
