import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../config/firebase.config";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const signUpAction = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        const user = userCredential.user;

        await sendEmailVerification(user);
        console.log("Success");
      }
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged((userCredential) => {
      const { email, emailVerified } = userCredential;
      setUser({ email, emailVerified });
    });
  }, []);
  return (
    <main>
      <div className="container">
        <InputField
          type={email}
          placeholder={"Email Here"}
          handleChange={(data) => setEmail(data)}
        />
        <InputField
          type={password}
          placeholder={"Password Here"}
          handleChange={(data) => setPassword(data)}
        />
        <button type="button" onClick={signUpAction}>
          Sign Up
        </button>
      </div>

      {user && (
        <div>
          <p>{user?.email}</p>
          <p>{user.emailVerified ? "True" : "False"}</p>
        </div>
      )}
    </main>
  );
};

const InputField = ({ placeholder, handleChange, type }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChangeEvent = (e) => {
    setInputValue(e.target.value);
    handleChange(e.target.value);
  };
  return (
    <input
      value={inputValue}
      type={type}
      placeholder={placeholder}
      onChange={handleChangeEvent}
    />
  );
};

export default Auth;
