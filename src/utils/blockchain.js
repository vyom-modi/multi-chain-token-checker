export const fetchNativeBalance = async (network, address) => {
    try {
      const response = await fetch(network.rpcUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_getBalance',
          params: [address, 'latest'],
          id: 1
        })
      });
      const data = await response.json();
      return data.result ? parseInt(data.result, 16) : 0;
    } catch (error) {
      console.error(`Error fetching native balance on ${network.name}:`, error);
      return 0;
    }
  };
  
  export const fetchTokenBalance = async (network, tokenAddress, walletAddress, decimals) => {
    try {
      // ERC-20 balanceOf method signature
      const methodId = '0x70a08231';
      const paddedAddress = walletAddress.slice(2).padStart(64, '0');
      const data = methodId + paddedAddress;
  
      const response = await fetch(network.rpcUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_call',
          params: [{
            to: tokenAddress,
            data: data
          }, 'latest'],
          id: 1
        })
      });
      const result = await response.json();
      return result.result ? parseInt(result.result, 16) : 0;
    } catch (error) {
      console.error(`Error fetching token balance:`, error);
      return 0;
    }
  };