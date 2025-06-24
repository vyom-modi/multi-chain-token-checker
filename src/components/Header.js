import React from 'react';
import { Wallet } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <Wallet className="w-8 h-8 text-indigo-600 mr-3" />
        <h1 className="text-4xl font-bold text-gray-900">Multi-Chain Portfolio Tracker</h1>
      </div>
      <p className="text-gray-600 text-lg">Track your crypto portfolio across all major EVM networks - completely free!</p>
    </div>
  );
};

export default Header;