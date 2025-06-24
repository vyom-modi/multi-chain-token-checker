export const networks = {
    ethereum: {
      name: 'Ethereum Mainnet',
      rpcUrl: 'https://eth.llamarpc.com',
      chainId: 1,
      symbol: 'ETH',
      explorer: 'https://etherscan.io',
      color: 'bg-blue-500'
    },
    polygon: {
      name: 'Polygon',
      rpcUrl: 'https://polygon-rpc.com',
      chainId: 137,
      symbol: 'MATIC',
      explorer: 'https://polygonscan.com',
      color: 'bg-purple-500'
    },
    bsc: {
      name: 'BNB Smart Chain',
      rpcUrl: 'https://bsc-dataseed1.binance.org',
      chainId: 56,
      symbol: 'BNB',
      explorer: 'https://bscscan.com',
      color: 'bg-yellow-500'
    },
    arbitrum: {
      name: 'Arbitrum One',
      rpcUrl: 'https://arb1.arbitrum.io/rpc',
      chainId: 42161,
      symbol: 'ETH',
      explorer: 'https://arbiscan.io',
      color: 'bg-blue-600'
    },
    optimism: {
      name: 'Optimism',
      rpcUrl: 'https://mainnet.optimism.io',
      chainId: 10,
      symbol: 'ETH',
      explorer: 'https://optimistic.etherscan.io',
      color: 'bg-red-500'
    },
    avalanche: {
      name: 'Avalanche C-Chain',
      rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
      chainId: 43114,
      symbol: 'AVAX',
      explorer: 'https://snowtrace.io',
      color: 'bg-red-600'
    }
  };