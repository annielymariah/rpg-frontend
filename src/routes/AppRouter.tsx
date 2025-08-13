import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import TestingComponents from "@/pages/TestingComponents"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/dev" element={<TestingComponents/>} />
      </Routes>
    </BrowserRouter>
  );
};