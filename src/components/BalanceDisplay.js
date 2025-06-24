import React, { useState } from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';
import { formatBalance } from '../utils/formatters';

const BalanceDisplay = ({ balances, walletAddress }) => {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const openExplorer = (network, address) => {
    window.open(`${network.explorer}/address/${address}`, '_blank');
  };

  if (Object.keys(balances).length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {Object.entries(balances).map(([networkKey, data]) => (
        <div key={networkKey} className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className={`${data.network.color} p-4`}>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{data.network.name}</h3>
              <button
                onClick={() => openExplorer(data.network, walletAddress)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {/* Native Token */}
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-gray-900">Native Token</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-900">{data.native.symbol}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-gray-900">
                      {formatBalance(data.native.balance, 18)}
                    </span>
                    <span className="text-gray-500 ml-1">{data.native.symbol}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ERC-20 Tokens */}
            {Object.keys(data.tokens).length > 0 && (
              <div>
                <h4 className="text-lg font-medium mb-3 text-gray-900">ERC-20 Tokens</h4>
                <div className="space-y-3">
                  {Object.entries(data.tokens).map(([symbol, tokenData]) => (
                    <div key={symbol} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900">{symbol}</span>
                          <button
                            onClick={() => copyToClipboard(tokenData.address, `${networkKey}-${symbol}`)}
                            className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            {copied === `${networkKey}-${symbol}` ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-gray-900">
                            {formatBalance(tokenData.balance, tokenData.decimals)}
                          </span>
                          <span className="text-gray-500 ml-1">{symbol}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BalanceDisplay;