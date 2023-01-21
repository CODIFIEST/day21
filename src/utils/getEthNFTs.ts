import {NFTType, type NFT} from "../domain/nft";
import { Network, Alchemy } from "alchemy-sdk";
// import transformURLs from "./transformURLs";

async function getEthNFTs(address: string): Promise<NFT[]> {
    const settings = {
        apiKey: "iV9Rjt5iMP4Ci8TDngI2rWaohTB2WvZW",//### TODO- put this in env file soit's not uploaded to git
        network: Network.ETH_MAINNET,
    }

    const alchemy = new Alchemy(settings);
    const alchemyNFTs = await alchemy.nft.getNftsForOwner(address)
    const domainNFTs: NFT[] = [];
    alchemyNFTs.ownedNfts.forEach(nft => {
        if(!nft.title) return;
        const media = nft.media;
        const imageURL = media.length ? media[0].gateway : "";

        const eachNFT: NFT = {
            title: nft.title,
            description: nft.description,
            imageURL: imageURL,
            nftType: NFTType.Ethereum
        }
        domainNFTs.push(eachNFT);
        console.log(domainNFTs)
    });

    // console.log(domainNFTs)
    return domainNFTs;

}
export default getEthNFTs