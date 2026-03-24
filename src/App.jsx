import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { supabase } from "./utils/supabase";
import { SessionContext } from "./Contexts/SessionContext";
import Profile from "./pages/Profile";

function App() {
  // State to hold the current user session
  const [session, setSession] = useState(null)
  // Set up an effect to listen for authentication state changes
  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        console.log("event", event);
        console.log("session", session);
        setSession(null);
      } else if (session) {
        setSession(session);
      };
    });

    // Clean up the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  // Provide the session context to the rest of the app and set up routes
  return <SessionContext.Provider value={session}>
    <Routes>
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<Profile />} />

    </Routes>
  </SessionContext.Provider>

}

export default App;