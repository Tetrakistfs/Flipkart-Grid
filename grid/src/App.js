import "./App.css";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import {fire} from "./firebase";
import { signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";
import ProductDetail from "./components/ProductDetail";
import UserInfo from "./components/user";
import Grid from "./components/grid";
import Seller from "./components/seller";
import ObjectForm from "./components/object";
import ClassForm from "./components/class";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasaccount, setHasAccount] = useState(false);
  const [userin,setUserin] = useState(false);

  const handlelogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserin(true);
        console.log("logged in as", user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const authlistener = () => {
    // fire.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //   
    //     setUser(user);
    //   } else {
    //     setUser("");
    //   }
    // });
  };

  const handlesignup = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("User created : ", cred.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handlelogout = (e) => {
    e.preventDefault();
    signOut(auth)
    .then(()=>{
      console.log("User has signed out.")
    })
    .catch((err)=>{
      console.log(err.message)
    })
  };

  useEffect(() => {
    // authlistener();
  });
  return (
    <div className="">
      {userin ? (
        <div>
          <Navbar handlelogout={handlelogout} />
          <Grid/>
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
          />
        </div>
      )}
    </div>
  );
}

export default App;
