import { useRouter } from "next/navigation";

const Index = ({ product }) => {
  const router=useRouter();
  return (
    <div className="product-card max-w-xs w-full h-96 md:max-w-md mx-auto mb-8 p-4 border rounded-lg shadow-md bg-white cursor-pointer" onClick={()=>{router.push(`/Products/${product._id}`)}}>
      <h2 className="text-xl font-bold mb-2">{product.productName}</h2>
      <img src={product.productImage} alt={product.productName} className="w-full h-48 object-cover mb-4 rounded-md" />
      <p className="text-lg text-gray-700 mb-2">Price: ${product.productPrice}</p>
      {product.isAvailable ? (
        <p className="text-green-600">Available</p>
      ) : (
        <p className="text-red-600">Not Available</p>
      )}
    </div>
  );
};

export default Index;
