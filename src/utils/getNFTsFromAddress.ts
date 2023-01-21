import type {NFT} from "../domain/nft";
import getEthNFTs from "./getEthNFTs";
import getIMXNFTs from "./getIMXNFTs";
import getSolNFTs from "./getSolNFTs";

 async function getNFTsFromAddress(address:string) :Promise<NFT[]> {
   console.log("do we get to getNFTsFromAddress?")
   console.log(address)
    const EthNFTs:NFT[] = await getEthNFTs(address);
    const IMXNFTs:NFT[] = await getIMXNFTs(address);
   //  const SolNFTs:NFT[] = await getSolNFTs(address);

   //  console.log(IMXNFTs.concat(EthNFTs))

    return EthNFTs.concat(IMXNFTs);
   // return EthNFTs
 }
 export default getNFTsFromAddress