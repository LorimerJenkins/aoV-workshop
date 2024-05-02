// source: https://github.com/ArweaveTeam/arweave-js + https://docs.arweavekit.com/wallets/wallet-kit
import Arweave from "arweave";

const arweave = Arweave.init({});

export async function transferAR(
  api: any,
  quantity: string,
  recipient: string,
) {
  if (!api) {
    throw new Error("Arweave Wallet not connected");
  }

  let transaction = await arweave.createTransaction({
    target: recipient,
    quantity: arweave.ar.arToWinston(quantity),
  });

  await api.sign(transaction);
  return transaction;
}
