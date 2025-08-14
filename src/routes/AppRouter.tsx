import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import LogIn from "@/pages/LogIn";

import TestingComponents from "@/pages/TestingComponents"
import SingUp from "@/pages/SingUp/SingUp";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/dev" element={<TestingComponents/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/cadastro" element={<SingUp/>} />
      </Routes>
    </BrowserRouter>
  );
};