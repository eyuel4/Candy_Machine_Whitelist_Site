import BackGroundColorAttribute from '../imgs/Background-attribute.png';
import BackWeaponAttribute from '../imgs/BackWeapon-attribute.png';
import ClothAttribute from '../imgs/Cloth-attribute.png';
import HandWeaponAttribute from '../imgs/Weapon-attribute.png';
import HatAttribute from '../imgs/Hat-attribute.png';
import NecklaceAttribute from '../imgs/NecklaceBlue-attribute.png';
import BodyColorAttribute from '../imgs/Body_Attribute_Color.png';
import HeadImage from '../imgs/team3.jpg';
import ShieldWeaponAttributes from '../imgs/Shield_Weapon_Attribute.png';


export const AppConstants: any = {
     ROADMAP_ITEMS : [
        {
            title: '01 - Almighty Pharaohs Pre-Launch (Q1 -2022)',
            tasks:  new Map<string, boolean>([
                ['Launch Almighty Pharaohs website', true],
                ['Twitter and Discord marketing campaigns', true],
                ['GiveAways and Collaborations', false],
                ['Open up Registration for 250 Pre-Sale / Whitelist', false]
            ]),
            status: true
        },
        {
            title: '02 - Mint Day I (Q1 - 2022)',
            tasks:  new Map<string, boolean>([
                ['Pre-Sale of 250 Almighty Pharaoh Kings', false],
                ['Public Sale of 2250 Almighty Pharaoh Kings.', false],
                ['Secondary marketplace listing.', false],
                ['Release of Rarity Ranking for Almighty Pharaoh Kings.', false],
                ['25% of the Royalty Fee goes to sweep the floor of the secondary marketplace.', false]
            ]),
            status: false
        },
        {
            title: '03 - Born of Almighty Pharaoh Queen. (Q1-2022)',
            tasks: new Map<string, boolean>([
                ['Suprise our for our early adopters. Roles assigned on Discord', false],
                ['Sneak Peek release of our 3D Almighty Pharaoh Queens.', false],
                ['Pre-Sale registration will be open for 200 3D Almighty Pharaoh Queens.', false],
                ['Giveaways and marketing on different channels.', false]
            ]),
            status: false
        },
        {
            title: '04 - Mint Day II (Almighty Pharaoh Queens 3D). (Q1-2022)',
            tasks: new Map<string, boolean>([
                ['Pre-Sale of 200 3D Almighty Pharaoh Queens.', false],
                ['Public Mint of 1800 3D Almighty Pharaoh Queens.', false],
                ['Secondary marketplace launch of 3D Almighty Pharaoh Queens.', false],
                ['Release of Rarity Ranking for 3D Almighty Pharaoh Queens.', false],

            ]),
            status: false
        },
        {
            title: '05 - Almighty Pharaohs P2E Game. (Q2-2022)',
            tasks: new Map<string, boolean>([
                ['Free airdrops of Almighty Pharaohs Kids to holders of King and Queen Pharaohs.', false],
                ['$Daric Utility Token', false],
                ['NFT Staking & Yield Farming', false],
                ['Initialize Almighty Pharaohs Game Development.',false],
                
            ]),
            status: false
        },
        {
            title: 'Release Meta Castle on metaverse world. (Q1 - 2023)',
            tasks: new Map<string, boolean>([
                ['Release of Genesis Collection of Meta Castle on Decenterland',false],
                ['Release Almighty Pharaohs game.', false]
            ]),
            status: false
        }, 
        {
            title: 'Release of Almighty Pharaohs game. (Q2 - 2023)',
            tasks: new Map<string, boolean>([
                ['Release Almighty Pharaohs game.', false]
            ])
        }
    ],
    FAQ : [
        {
            title: "What are Almighty Pharaohs?",
            answer: "Almighty Pharaohs is a story telling unique NFT collections of Egyptian God's powered on Solana blockchain. "
        },
        {
            title: "When is the drop?",
            answer: "We will announce the Mint date on our discord Channel. Join in now! "
        },
        {
            title: "How many Almighty Pharaho Kings are there?",
            answer: "There are 2500 Almighty Pharaohs for first mint with unique traits"
        },
        {
            title: "Is there pre-sale?",
            answer: "There will be 250 Almighty Pharaohs reserved for private sale. Make sure to follow our Twitter and join our Discord."
        },
        {
            title: "How much is Almighty Pharaho Kings?",
            answer: "0.5 SOL"
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
            answer: "We are working with different secondary markets to list Almighty Pharaohs Collection."
        },
        {
            title: "What is the Utility around Almighty Pharaohs?",
            answer: "We will introduce a genesis collection of digital castles and utility in the form of staking and yield farming. Earn yield by sending your pharaohs to war & win match between your opponents to generate $Daric token  token, the native currency of Almighty Pharaohs."
        },
    ],
    ATTRIBUTES: [
        {
            name: "Heads",
            imageUrl:HeadImage,
            altText:"Head Attributes"
        },
        {
            name: "Body Colors",
            imageUrl: BodyColorAttribute,
            altText: "Body Color Attributes"
        },
        {
            name: "Background Colors",
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
            name: "Shield Weapons",
            imageUrl:ShieldWeaponAttributes,
            altText: "Shield Attributes"
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