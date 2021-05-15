import { useState } from "react";
import "./styles.css";
import Profile from "./Profile";
import Navbar from "./Navbar";

import UserData from "./Store/Store";

export default function App() {
  const [name, setName] = useState("George");

  return (
    <UserData.Provider value={{ name, setName }}>
      <div className="App">
        <Navbar />
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Profile />
      </div>
    </UserData.Provider>
  );
}
