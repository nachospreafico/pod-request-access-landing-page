import { useState } from "react";
import "./styles/Form.css";

const Form = ({ isMobile }) => {
  const [validEmail, setValidEmail] = useState({
    isEmpty: false,
    isValid: false,
  });

  const [inputTouched, setInputTouched] = useState(false);

  function handleEmptyInput(e) {
    if (e.target.value === "") {
      setValidEmail((prevState) => ({
        ...prevState,
        isEmpty: true,
      }));
    } else {
      setValidEmail((prevState) => ({
        ...prevState,
        isEmpty: false,
      }));
    }
  }

  function handleValidInput(e) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(e.target.value)) {
      setValidEmail((prevState) => ({
        ...prevState,
        isValid: true,
      }));
    } else {
      setValidEmail((prevState) => ({
        ...prevState,
        isValid: false,
      }));
    }
  }

  function handleInputInteraction() {
    setInputTouched(true);
  }

  return (
    <form id="access-request">
      {isMobile ? (
        <>
          <input
            type="email"
            required
            id="email-input"
            placeholder="Email address"
            className="email-input"
            onChange={(e) => {
              handleInputInteraction();
              handleEmptyInput(e);
              handleValidInput(e);
            }}
          ></input>
          <button className="submit-btn" id="submit-btn">
            Request Access
          </button>
          {inputTouched && validEmail.isEmpty ? (
            <p className="empty-input">Oops! Please add your email</p>
          ) : null}
          {inputTouched && !validEmail.isValid && !validEmail.isEmpty ? (
            <p className="empty-input">Oops! Please check your email</p>
          ) : null}
        </>
      ) : (
        <div className="input-btn-container">
          {" "}
          <input
            type="email"
            required
            id="email-input"
            placeholder="Email address"
            className="email-input"
            onChange={(e) => {
              handleInputInteraction();
              handleEmptyInput(e);
              handleValidInput(e);
            }}
          ></input>
          <button className="submit-btn" id="submit-btn">
            Request Access
          </button>
          {inputTouched && validEmail.isEmpty ? (
            <p className="empty-input">Oops! Please add your email</p>
          ) : null}
          {inputTouched && !validEmail.isValid && !validEmail.isEmpty ? (
            <p className="empty-input">Oops! Please check your email</p>
          ) : null}
        </div>
      )}
    </form>
  );
};

export default Form;
