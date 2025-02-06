
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Welcome to our company! We are dedicated to providing the best products
            and services to our customers.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our mission is to innovate and create solutions that make a difference
            in people's lives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To become the leading provider of innovative solutions in our
                industry, setting new standards for quality and customer
                satisfaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-gray-600">
                We believe in integrity, innovation, and putting our customers
                first. These core values guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
