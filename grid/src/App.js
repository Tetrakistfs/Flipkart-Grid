import "./App.css";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import fire from "./firebase";
import ProductDetail from "./components/ProductDetail";
import UserInfo from "./user";
import Grid from "./grid";
import Seller from "./seller";
import ObjectForm from "./object";
import ClassForm from "./class";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [hasaccount, setHasAccount] = useState(false);
  const clearinputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailerror("");
    setPassworderror("");
  };

  const handlelogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailerror(err.message);
            break;
          case "auth/wrong-password":
            setPassworderror(err.message);
        }
      });
  };

  const authlistener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearinputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  const handlesignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailerror(err.message);
            break;
          case "auth/weak-password":
            setPassworderror(err.message);
        }
      });
  };

  const handlelogout = () => {
    fire.auth().signOut();
  };

  useEffect(() => {
    authlistener();
  });
  return (
    <div className="">
      {user ? (
        <div>
          <Navbar handlelogout={handlelogout} />
          {/* <UserInfo /> */}
          {/* <Seller /> */}
          {/* <ObjectForm /> */}
          {/* <Grid /> */}
          <ClassForm />
          {/* <ProductDetail /> */}
        </div>
      ) : (
        <div>
          {" "}
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handlelogin={handlelogin}
            handlesignup={handlesignup}
            hasaccount={hasaccount}
            setHasAccount={setHasAccount}
            emailerror={emailerror}
            passworderror={passworderror}
          />
        </div>
      )}
    </div>
  );
}

export default App;
