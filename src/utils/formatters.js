export const isValidAddress = (address) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };
  
  export const formatBalance = (balance, decimals) => {
    const formatted = (balance / Math.pow(10, decimals)).toFixed(4);
    return parseFloat(formatted).toString();
  };