
import Navbar from "@/components/Navbar";

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example product cards */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-100" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Product {i}
                </h3>
                <p className="text-gray-600">
                  This is a sample product description. Replace with actual product
                  details.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
