import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID as string;

export const client = createThirdwebClient({
  clientId: CLIENT_ID,
});

export const contract = getContract({
  address: "0x54f31D7210F449FBC3d1Cb53EC163639D1752e75",
  chain: sepolia,
  client,
});
