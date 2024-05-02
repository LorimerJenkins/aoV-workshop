// source: https://docs.irys.xyz/developer-docs/irys-sdk/installing-the-sdk
import { WebIrys } from "@irys/sdk";
import * as othentKMS from "@othent/kms";

const getWebIrys = async () => {
  const wallet = { name: "Othent KMS", provider: othentKMS };
  const network = "mainnet";
  const token = "arweave";
  const webIrys = new WebIrys({ network, token, wallet });
  await webIrys.ready();
  return webIrys;
};

export const uploadData = async () => {
  const webIrys = await getWebIrys();
  const dataToUpload = "GM world.";
  try {
    const receipt = await webIrys.upload(dataToUpload);
    console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
  } catch (e) {
    console.log("Error uploading data ", e);
  }
};
