import HeadImage from '../imgs/snippet4.jpg';

export const AppConstants: any = {
     ROADMAP_ITEMS : [
        {
            title: '01 - Almighty Pharahos Pre-Launch',
            tasks:  new Map<string, boolean>([
                ['Launch Almighty Pharahos website', true],
                ['Let the world know about Almighty Pharahos', true],
                ['Twitter and Discord marketing campaigns', true],
                ['GiveAways and Collaborations', false],
                ['Open up Registeration for 200 Pre-Sale', false],
                ['Assign roles on discord', false],
            ]),
            status: true
        },
        {
            title: '02 - Mint Day',
            tasks:  new Map<string, boolean>([
                ['Pre-Sale of 200 Almighty Pharaho Kings', false],
                ['Public Sale of 1800 Almighty Pharaho Kings.', false],
                ['Secondary marketplace listing.', false],
                ['Release of Rarity Ranking for Almighty Pharaho Kings.', false],
                ['25% of Royality Fee goes to building school in Ethiopia.', false]
            ]),
            status: false
        },
        {
            title: '03 - Born of Almigthy Pharahos Queen.',
            tasks: new Map<string, boolean>([
                ['Sneak Peek release of our 3D Almighty Pharahos Queens.', false],
                ['Surprise Airdrop for our early adopters and OG roles.', false],
                ['Pre-Sale registeration open for 200 3D Almighty Pharaho Queens.', false],
                ['Giveaways and marketing on different channels.', false]
            ]),
            status: false
        },
        {
            title: '04 - Mint Day for 3D Almighty Pharaho Queens.',
            tasks: new Map<string, boolean>([
                ['Pre-Sale of 200 3D Almighty Pharaho Queens.', false],
                ['Public Mint of 1300 3D Almighty Pharaho Queens.', false],
                ['Secondary marketplace launch of 3D Almgithy Pharaho Queens', false],
                ['Release of Rarity Ranking for 3D Almighty Pharaho Queens.', false],
                ['Almgihty Pharahos DAO development initialization.', false]
            ]),
            status: false
        },
        {
            title: '05 - Bring Almighty Pharahos Family to metaverse world.',
            tasks: new Map<string, boolean>([
                ['Implement breading system and come up with baby pharahos.', false],
                ['Release of Almighty Pharahos DAO.',false],
                
            ]),
            status: false
        },
        {
            title: 'This is just the begining of the end',
            tasks: new Map<string, boolean>([
                ['As the NFT and metaverse world progress we will be working on additional roadmaps with the commmunity.',false]
            ]),
            status: false
        }
    ],
    FAQ : [
        {
            title: "What are Almighty Pharhos?",
            answer: "Almigthy Pharahos is a story telling unique NFT collections of Egyptian God's powered on Solana blockchain. "
        },
        {
            title: "When is the drop?",
            answer: "Mint button will be available on January 05, 2021 "
        },
        {
            title: "How many Almighty Pharaho Kings are there?",
            answer: "There are 1500 Almighty Pharahos for first mint with unique traits"
        },
        {
            title: "Is there pre-sale?",
            answer: "There will be 200 Almgithy Pharahos reserved for private sale and 1300 NFTs will be available on public sale."
        },
        {
            title: "How much is Almighty Pharaho Kings?",
            answer: "Mint price will be 0.99 SOL for both pre-sale and public-sale."
        },
        {
            title: "Is there early supporter rewards?",
            answer: "Early supporters and OG roles will be given execlusive giveaway and surprises."
        },
        {
            title: "How many traits in Almighty Pharahos?",
            answer: "Almighty Pharaho Kings have 100 traits with different God's body, color, weapons, cloths, Necklace and others."
        },
        {
            title: "Where can I see rarity ranking of Almighty Pharahos?",
            answer: "Rarity ranking page will be available on our website after mint."
        },
        {
            title: "Will there be an aftermarket?",
            answer: "After minting Almighty Pharahos will be available on SolanaArt, MagicEden, DigitalEyes and Howrareis."
        }
    ],
    ATTRIBUTES: [
        {
            name: "Head",
            imageUrl:HeadImage,
            altText:"Head Attributes"
        },
        {
            name: "Body",
            imageUrl:HeadImage,
            altText: "Body Attributes"
        },
        {
            name: "Body Color",
            imageUrl:HeadImage,
            altText: "Body Color Attributes"
        },
        {
            name: "Background Color",
            imageUrl:HeadImage,
            altText: "Background Color Attributes"
        },
        {
            name: "Head Hats",
            imageUrl:HeadImage,
            altText: "Head Hats Attributes"
        },
        {
            name: "Chains & Necklaces",
            imageUrl:HeadImage,
            altText: "Chain & Necklaces Attributes"
        },
        {
            name: "Weapons",
            imageUrl:HeadImage,
            altText: "Weapons Attributes"
        },
        {
            name: "Cloths",
            imageUrl:HeadImage,
            altText: "Cloths Attributes"
        }
        
    ]

}