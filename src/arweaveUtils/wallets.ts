// source: https://docs.arweavekit.com/wallets/wallet-kit
// plz also refer to src/app/page for how to wrap the provider around your app!
import { useConnection, useActiveAddress } from "arweave-wallet-kit";

export const useLogin = () => {
  const { connect, disconnect } = useConnection();
  const activeAddress = useActiveAddress();

  const login = async () => {
    connect();
    return activeAddress;
  };

  const logout = async () => {
    await disconnect();
  };

  return {
    login,
    logout,
    activeAddress,
  };
};
