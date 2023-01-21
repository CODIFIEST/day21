enum NFTType{
    Ethereum,
    IMX,
    Solana
}
type NFT ={
    title:string,
    description:string,
    imageURL:string,
    nftType:NFTType
}

export type  { NFT } 
export {NFTType}