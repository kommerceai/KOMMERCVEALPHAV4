import React, { useState, useEffect } from 'react';
import { Package, Edit, Trash2 } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  sold: number;
}

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from TikTok Shop API
    // This is a mock implementation
    const mockProducts: Product[] = [
      { id: 1, name: 'TikTok T-Shirt', price: 19.99, stock: 100, sold: 50 },
      { id: 2, name: 'TikTok Hoodie', price: 39.99, stock: 75, sold: 25 },
      { id: 3, name: 'TikTok Cap', price: 14.99, stock: 150, sold: 100 },
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Product Management</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sold</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Package className="flex-shrink-0 h-6 w-6 text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.sold}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;