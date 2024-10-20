import React from 'react';
import { X } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-4 py-2 rounded-md shadow-md flex items-center`}>
      <span>{message}</span>
      <button onClick={onClose} className="ml-2">
        <X size={18} />
      </button>
    </div>
  );
};

export default Notification;