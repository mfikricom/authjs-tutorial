import { getProductByUser } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const ProductTable = async () => {
  const products = await getProductByUser();
  if (!products?.length) return <h1 className="text-2xl">No Product Found</h1>;

  return (
    <table className="w-full bg-white mt-3">
      <thead className="border-b border-gray-100">
        <tr>
          <th className="py-3 px-6 text-left text-sm">Product Name</th>
          <th className="py-3 px-6 text-left text-sm">Price</th>
          <th className="py-3 px-6 text-left text-sm">Created At</th>
          <th className="py-3 px-6 text-left text-sm">Created By</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="py-3 px-6">{product.name}</td>
            <td className="py-3 px-6">{product.price}</td>
            <td className="py-3 px-6">
              {formatDate(product.createdAt.toString())}
            </td>
            <td className="py-3 px-6">{product.user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
