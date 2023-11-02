import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);

import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Form />
      <Footer />
    </>
  );
}

export default App;
