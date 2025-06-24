import React, { useState } from 'react';
import Header from './components/Header';
import NetworkInfo from './components/NetworkInfo';
import WalletSearch from './components/WalletSearch';
import BalanceDisplay from './components/BalanceDisplay';
import Footer from './components/Footer';
import { networks } from './config/networks';
import { tokens } from './config/tokens';
import { fetchNativeBalance, fetchTokenBalance } from './utils/blockchain';
import { isValidAddress } from './utils/formatters';

const App = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [balances, setBalances] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchAllBalances = async () => {
    if (!isValidAddress(walletAddress)) {
      setError('Please enter a valid Ethereum address');
      return;
    }

    setLoading(true);
    setError('');
    const newBalances = {};

    for (const [networkKey, network] of Object.entries(networks)) {
      try {
        // Fetch native token balance
        const nativeBalance = await fetchNativeBalance(network, walletAddress);
        
        // Fetch ERC-20 token balances
        const tokenBalances = {};
        for (const token of tokens[networkKey] || []) {
          const balance = await fetchTokenBalance(network, token.address, walletAddress, token.decimals);
          tokenBalances[token.symbol] = {
            balance: balance,
            decimals: token.decimals,
            address: token.address
          };
        }

        newBalances[networkKey] = {
          network: network,
          native: {
            balance: nativeBalance,
            symbol: network.symbol
          },
          tokens: tokenBalances
        };
      } catch (error) {
        console.error(`Error fetching balances for ${network.name}:`, error);
      }
    }

    setBalances(newBalances);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto p-6">
        <Header />
        <NetworkInfo networks={networks} />
        <WalletSearch
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
          onSearch={fetchAllBalances}
          loading={loading}
          error={error}
        />
        <BalanceDisplay balances={balances} walletAddress={walletAddress} />
        <Footer />
      </div>
    </div>
  );
};

export default App;