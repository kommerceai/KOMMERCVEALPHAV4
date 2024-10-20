import React, { useState, useEffect } from 'react';
import { ShoppingBag, Truck, CheckCircle } from 'lucide-react';

interface Order {
  id: number;
  customerName: string;
  product: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered';
  total: number;
}

const OrderTracking: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Fetch orders from TikTok Shop API
    // This is a mock implementation
    const mockOrders: Order[] = [
      { id: 1, customerName: 'John Doe', product: 'TikTok T-Shirt', date: '2024-03-15', status: 'Processing', total: 19.99 },
      { id: 2, customerName: 'Jane Smith', product: 'TikTok Hoodie', date: '2024-03-14', status: 'Shipped', total: 39.99 },
      { id: 3, customerName: 'Bob Johnson', product: 'TikTok Cap', date: '2024-03-13', status: 'Delivered', total: 14.99 },
    ];
    setOrders(mockOrders);
  }, []);

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'Processing':
        return <ShoppingBag className="text-yellow-500" />;
      case 'Shipped':
        return <Truck className="text-blue-500" />;
      case 'Delivered':
        return <CheckCircle className="text-green-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Order Tracking</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customerName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.product}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(order.status)}
                    <span className="ml-2 text-sm text-gray-500">{order.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTracking;