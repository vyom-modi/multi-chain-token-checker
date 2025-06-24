import React from 'react';

const NetworkInfo = ({ networks }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">🌐 Supported Networks</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(networks).map(([key, network]) => (
          <div key={key} className="flex items-center p-3 border rounded-lg">
            <div className={`w-3 h-3 rounded-full ${network.color} mr-2`}></div>
            <span className="font-medium text-sm">{network.name}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-4">
        💡 Reading balances is completely FREE - no gas fees required!
      </p>
    </div>
  );
};

export default NetworkInfo;