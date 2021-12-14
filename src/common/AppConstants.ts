import BackGroundColorAttribute from '../imgs/Background-attribute.png';
import BackWeaponAttribute from '../imgs/BackWeapon-attribute.png';
import ClothAttribute from '../imgs/Cloth-attribute.png';
import HandWeaponAttribute from '../imgs/HandWeapon-attribute.png';
import HatAttribute from '../imgs/Hat-attribute.png';
import NecklaceAttribute from '../imgs/NecklaceBlue-attribute.png';
import BodyColorAttribute from '../imgs/BodyColorAttribute.png';
import HeadImage from '../imgs/team3.jpg'


export const AppConstants: any = {
     ROADMAP_ITEMS : [
        {
            title: '01 - Almighty Pharaohs Pre-Launch',
            tasks:  new Map<string, boolean>([
                ['Launch Almighty Pharaohs website', true],
                ['Let the world know about Almighty Pharaohs', true],
                ['Twitter and Discord marketing campaigns', true],
                ['GiveAways and Collaborations', false],
                ['Open up Registeration for 250 Pre-Sale', false],
                ['Assign roles on discord', false],
            ]),
            status: true
        },
        {
            title: '02 - Mint Day I',
            tasks:  new Map<string, boolean>([
                ['Pre-Sale of 250 Almighty Pharaho Kings', false],
                ['Public Sale of 2250 Almighty Pharaho Kings.', false],
                ['Secondary marketplace listing.', false],
                ['Release of Rarity Ranking for Almighty Pharaho Kings.', false],
                ['Donation of 25% of Royality Fee goes to building school in Africa.', false]
            ]),
            status: false
        },
        {
            title: '03 - Born of Almigthy Pharaohs Queen.',
            tasks: new Map<string, boolean>([
                ['Sneak Peek release of our 3D Almighty Pharaohs Queens.', false],
                ['Surprise Airdrop for our early adopters and OG roles.', false],
                ['Pre-Sale registeration open for 200 3D Almighty Pharaho Queens.', false],
                ['Giveaways and marketing on different channels.', false]
            ]),
            status: false
        },
        {
            title: '04 - Mint Day II (Almighty Pharaho Queens).',
            tasks: new Map<string, boolean>([
                ['Pre-Sale of 200 3D Almighty Pharaho Queens.', false],
                ['Public Mint of 1800 3D Almighty Pharaho Queens.', false],
                ['Secondary marketplace launch of 3D Almgithy Pharaho Queens', false],
                ['Release of Rarity Ranking for 3D Almighty Pharaho Queens.', false],
                ['Almgihty Pharaohs DAO development initialization.', false]
            ]),
            status: false
        },
        {
            title: '05 - Bring Almighty Pharaohs Family to together.',
            tasks: new Map<string, boolean>([
                ['Free airdrop of Almighty Pharaohs Kids to holders of King and Queen Pharahos.', false],
                ['Release of Almighty Pharaohs DAO.',false],
                
            ]),
            status: false
        },
        {
            title: 'We will bring Almighty Pharaohs to conqure metaverse world.',
            tasks: new Map<string, boolean>([
                ['As the NFT and metaverse world progress we will be working on additional roadmaps on metaverse with the commmunity.',false]
            ]),
            status: false
        }
    ],
    FAQ : [
        {
            title: "What are Almighty Pharhos?",
            answer: "Almigthy Pharaohs is a story telling unique NFT collections of Egyptian God's powered on Solana blockchain. "
        },
        {
            title: "When is the drop?",
            answer: "Mint button will be available on January 05, 2021 "
        },
        {
            title: "How many Almighty Pharaho Kings are there?",
            answer: "There are 1500 Almighty Pharaohs for first mint with unique traits"
        },
        {
            title: "Is there pre-sale?",
            answer: "There will be 200 Almgithy Pharaohs reserved for private sale. Make sure to follow our Twitter and join our Discord."
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
            title: "Where can I see rarity ranking of Almighty Pharaohs?",
            answer: "Rarity ranking page will be available on our website after mint."
        },
        {
            title: "Will there be an aftermarket?",
            answer: "After minting Almighty Pharaohs will be available on SolanaArt, MagicEden, DigitalEyes and Howrareis."
        },
        {
            title: "What is the Utility around Almighty Pharaohs DAO?",
            answer: "We have different talented digital artists across Africa that will be joining as and releasing their work with us. All almighty pharaohs NFT holders will have ability to vote which art they like and the art that get the most vote will be going be setup on our launch pad. Every holder who meet the criteria will be automatically whitelisted and will be getting airdrop from the upcoming artist."
        },
    ],
    ATTRIBUTES: [
        {
            name: "Head",
            imageUrl:HeadImage,
            altText:"Head Attributes"
        },
        {
            name: "Body Color",
            imageUrl: BodyColorAttribute,
            altText: "Body Color Attributes"
        },
        {
            name: "Background Color",
            imageUrl:BackGroundColorAttribute,
            altText: "Background Color Attributes"
        },
        {
            name: "Head Hats",
            imageUrl:HatAttribute,
            altText: "Head Hats Attributes"
        },
        {
            name: "Chains & Necklaces",
            imageUrl:NecklaceAttribute,
            altText: "Chain & Necklaces Attributes"
        },
        {
            name: "Hand Weapons",
            imageUrl:HandWeaponAttribute,
            altText: "Weapons Attributes"
        },
        {
            name: "Back Weapons",
            imageUrl:BackWeaponAttribute,
            altText: "Back Weapons Attributes"
        },
        {
            name: "Cloths",
            imageUrl:ClothAttribute,
            altText: "Cloths Attributes"
        }
        
    ]

}