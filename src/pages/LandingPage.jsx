import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-4 border-b">
        <div className="text-2xl font-bold">Analyst Assistant</div>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
        <div className="space-x-2">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Signup</Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Analyst Assistant</h1>
        <p className="text-xl mb-8">Your AI-powered platform for seamless data analysis and insights.</p>
        <Button asChild>
          <Link to="/setup">Get Started</Link>
        </Button>
      </main>

      <footer className="border-t p-4 text-center">
        <div className="space-x-4">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;