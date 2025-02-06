
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome</h1>
        <p className="text-lg text-gray-600">
          This is the home page of our application.
        </p>
      </div>
    </div>
  );
};

export default Index;
