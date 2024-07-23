import { Home, Settings, Users } from "lucide-react";
import LandingPage from "./pages/LandingPage.jsx";
import SetupPage from "./pages/SetupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <LandingPage />,
  },
  {
    title: "Setup",
    to: "/setup",
    icon: <Settings className="h-4 w-4" />,
    page: <SetupPage />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <Users className="h-4 w-4" />,
    page: <LoginPage />,
  },
  {
    title: "Signup",
    to: "/signup",
    icon: <Users className="h-4 w-4" />,
    page: <SignupPage />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <Home className="h-4 w-4" />,
    page: <Dashboard />,
  },
];