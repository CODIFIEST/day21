import { NFTType, type NFT } from "../domain/nft";
import  { UserAPI, generateKeyPair, ConnectorNames, KEY_MESSAGE,} from "@loopring-web/loopring-sdk"
import axios from "axios";
async function getLoopNFTs(address: string): Promise<NFT[]> {
    const domainNFTs:NFT[]=[];
    
    const userAPI = new UserAPI({
         chainId:1
    });

    const accountInfo:{accountID:number} = await axios.get(`https://api3.loopring.io/api/v3/account?owner=${address}`

    )
    const eddsaKey = await generateKeyPair({
       address:address,
       isMobile:false,
       walletType: ConnectorNames.MetaMask,
       chainId:1,
       keySeed: KEY_MESSAGE,
       web3:null 
    });
  
    const apiKey = await userAPI.getUserApiKey({
        accountId:accountInfo.accountID,

    }, eddsaKey.sk);

    const balances = await userAPI.getUserNFTBalances({
        accountId:accountInfo.accountID
    },  apiKey.apiKey);
    
    balances.userNFTBalances.forEach(nft =>{
        const domainNft:NFT = {
            title: nft.collectionInfo.name,
            imageURL: nft.metadata.uri,
            description: nft.collectionInfo.description,
            nftType: NFTType.Loopring,
        }
        domainNFTs.push(domainNft)
    })
    
    return domainNFTs;

}
export default getLoopNFTs