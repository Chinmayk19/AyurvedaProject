import Link from "next/link";


const Index = ({ product }) => {

  return (
  <Link href={`/Products/${product._id}`}>
    <div className="product-card max-w-xs w-full h-96 md:max-w-md mx-auto mb-8 p-4 border rounded-lg shadow-md bg-white cursor-pointer">
      <h2 className="text-xl font-bold mb-2">{product.productName}</h2>
      <img src={product.productImage} alt={product.productName} className="w-full h-48 object-cover mb-4 rounded-md" />
      <p className="text-lg text-gray-700 mb-2">Price: ${product.productPrice}</p>
      {product.isAvailable ? (
        <p className="text-green-600">Available</p>
      ) : (
        <p className="text-red-600">Not Available</p>
      )}
    </div>
  </Link>
  );
};

export default Index;
