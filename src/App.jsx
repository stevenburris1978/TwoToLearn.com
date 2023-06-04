import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./components/context/AuthContext";
import { LessonProvider } from "./components/context/LessonContext";
import Header from "./pages/header/Header";
import SignInForm from "./pages/signinform/SignInForm";
import ProtectedRoute from "./routes/ProtectedRoute";
import LessonRoutes from "./routes/LessonRoutes";
import NotFound from "./pages/notfound/NotFound";
import SearchPage from "./pages/searchpage/SearchPage";
import CartPage from "./pages/cartpage/CartPage";
import ProfilePage from "./pages/profilepage/ProfilePage";
import HomePage from "./pages/homepage/HomePage";
// import Footer from "./pages/footer/Footer";
import DetailsPage from "./pages/detailspage/DetailsPage";



export default function App() {
  return (
    <>
    <AuthContextProvider>
    <LessonProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SignInForm />} />          
          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}/>
          <Route path="/details" element={<ProtectedRoute><DetailsPage /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
          <Route path="/search" element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
          <Route path="/lesson/*" element={<ProtectedRoute><LessonRoutes /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </LessonProvider>
    </AuthContextProvider>
    </>
  );
}