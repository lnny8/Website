
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { UserCircle, LogIn, UserPlus, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast({
        title: "Success",
        description: "Logged out successfully!",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const tabs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            {tabs.map((tab) => (
              <Link
                key={tab.path}
                to={tab.path}
                className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {location.pathname === tab.path && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-gray-100 rounded-md -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                {tab.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/profile">
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 hover:bg-gray-100"
                  >
                    <UserCircle className="h-5 w-5" />
                    <span>Profile</span>
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 hover:bg-gray-100"
                  >
                    <LogIn className="h-5 w-5" />
                    <span>Login</span>
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    variant="default"
                    className="flex items-center space-x-2"
                  >
                    <UserPlus className="h-5 w-5" />
                    <span>Sign up</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
