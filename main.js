const { default: axios } = require("axios");

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const baseURL = "https://eth-mainnet.alchemyapi.io/nft/v2/demo/getNFTs/";
// Neo Tokyo Punks
const contractAddr = "0xa65ba71d653f62c64d97099b58d25a955eb374a0";

const ownerAddr = "0x6E890eD629B205083184D9470A86B8B3db31d037";

const fetchURL = `${baseURL}?owner=${ownerAddr}&contractAddresses[]=${contractAddr}`;

(async () => {
  const res = await axios.get(fetchURL, requestOptions)
  console.log(res.data)
  /*
  {
    ownedNfts: [
      {
        contract: [Object],
        id: [Object],
        balance: '1',
        title: 'Neo Tokyo Punk #1814',
        description: 'Neo Tokyo Punks by NIKO24',
        tokenUri: [Object],
        media: [Array],
        metadata: [Object],
        timeLastUpdated: '2022-07-08T09:28:46.303Z'
      }
    ],
    totalCount: 1,
    blockHash: '0x3f4efb8db1f33157bf6368eb202c8a97938ce8b52b0f411dc3a5d2353e85ea82'
  }
  */
  console.log(res.data.ownedNfts[0].tokenUri)
  /*
  {
    raw: 'ipfs://Qme5N2z4Q5J84xwc3J4Sb2Bp4K1uXKU5PnnKg9p7NdH9Sc/1814.json',
    gateway: 'https://ipfs.io/ipfs/Qme5N2z4Q5J84xwc3J4Sb2Bp4K1uXKU5PnnKg9p7NdH9Sc/1814.json'
  }
  */
  console.log(res.data.ownedNfts[0].media)
  /*
  [
    {
      raw: 'ipfs://QmTDtXxXbeqGTsjtiJumoZYFyjZSXdJUe73Dzzw9E4c31L/1814.png',
      gateway: 'https://res.cloudinary.com/alchemyapi/image/upload/mainnet/55fe8198af83f99b3721ba52d9b6890b.png',
      thumbnail: 'https://res.cloudinary.com/alchemyapi/image/upload/w_256,h_256/mainnet/55fe8198af83f99b3721ba52d9b6890b.png',
      format: 'png'
    }
  ]
  */
  console.log(res.data.ownedNfts[0].metadata)
  /*
  {
    name: 'Neo Tokyo Punk #1814',
    description: 'Neo Tokyo Punks by NIKO24',
    image: 'ipfs://QmTDtXxXbeqGTsjtiJumoZYFyjZSXdJUe73Dzzw9E4c31L/1814.png',
    edition: 1814,
    attributes: [
      { value: 'green', trait_type: 'Background' },
      { value: 'gray', trait_type: 'Body' },
      { value: 'survival BK', trait_type: 'Accessories' },
      { value: 'excited', trait_type: 'Mouth' },
      { value: 'joyful', trait_type: 'Eye' },
      { value: 'high fade NV', trait_type: 'Hair' },
      { value: 'T shirt chill', trait_type: 'Clothes' },
      { value: 'none', trait_type: 'Backpack' },
      { value: 'gas mask GY', trait_type: 'Mask' }
    ]
  }
  */
})()