import React, { useState, useEffect } from 'react';
import { Users, Instagram, Twitter, Youtube } from 'lucide-react';

interface Creator {
  id: number;
  name: string;
  socialMedia: {
    instagram: string;
    twitter: string;
    youtube: string;
  };
  followers: number;
  engagementRate: number;
}

const CreatorManagement: React.FC = () => {
  const [creators, setCreators] = useState<Creator[]>([]);

  useEffect(() => {
    // Fetch creators from API or database
    // This is a mock implementation
    const mockCreators: Creator[] = [
      {
        id: 1,
        name: 'Alice Johnson',
        socialMedia: {
          instagram: 'alice_j',
          twitter: 'alice_johnson',
          youtube: 'AliceJohnsonOfficial',
        },
        followers: 500000,
        engagementRate: 3.5,
      },
      {
        id: 2,
        name: 'Bob Smith',
        socialMedia: {
          instagram: 'bob_smith',
          twitter: 'bobsmith',
          youtube: 'BobSmithVlogs',
        },
        followers: 750000,
        engagementRate: 4.2,
      },
      {
        id: 3,
        name: 'Charlie Brown',
        socialMedia: {
          instagram: 'charlie_b',
          twitter: 'charliebrown',
          youtube: 'CharlieBrownCreates',
        },
        followers: 1000000,
        engagementRate: 5.0,
      },
    ];
    setCreators(mockCreators);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Creator Management</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Creator</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Social Media</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Followers</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement Rate</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {creators.map((creator) => (
              <tr key={creator.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Users className="flex-shrink-0 h-6 w-6 text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">{creator.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <a href={`https://instagram.com/${creator.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer">
                      <Instagram className="text-pink-500" />
                    </a>
                    <a href={`https://twitter.com/${creator.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer">
                      <Twitter className="text-blue-400" />
                    </a>
                    <a href={`https://youtube.com/${creator.socialMedia.youtube}`} target="_blank" rel="noopener noreferrer">
                      <Youtube className="text-red-500" />
                    </a>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{creator.followers.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{creator.engagementRate.toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatorManagement;