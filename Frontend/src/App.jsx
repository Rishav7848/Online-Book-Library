import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";//inbuilt react package to define routes
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course" //agar authenticated user h toh courses wala component chala do
            element={authUser ? <Courses /> : <Navigate to="/signup" />}//if it is not an authenticated user then redirect it to sign up page to make it authenticated by putting his credentials 
          />                                                            
          <Route path="/signup" element={<Signup />} />
          <Route path="/About" element={<p>Welcome to the world of books.Our online library offers a wide collection of books across genres, from timeless classics to the latest releases. <br></br>Our mission is to make reading accessible and enjoyable for everyone, anytime and anywhere. Join us in building a vibrant community of readers!</p>}/>
          <Route path="/Contact" element={<p>We’d love to hear from you!<br></br>
                                             Whether you have questions, feedback, or need support, feel free to reach out.You can contact us at +91xxxxxxxxx.<br></br>
                                             We’ll get back to you as soon as possible!</p>}/>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
