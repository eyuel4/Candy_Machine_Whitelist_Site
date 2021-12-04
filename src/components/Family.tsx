import { StyledFamily } from "../styles/Family.styled";
import Pharahos_Men from "../imgs/King_Pharaoh.jpg";
import Pharahos_Women from "../imgs/Queen_Pharahos.jpg";
import Pharahos_Baby from "../imgs/Baby_Pharahos1.png";

export default function Family() {
    return (
        <StyledFamily className="family-container">
            <div className="family-header">
                <h1>Almighty Pharaho's Family</h1>
                <hr className="horizontal-line"/>
            </div>
            <div className="family-item-div">
                <div className="family-item">
                    <img src={Pharahos_Men} alt="Almighty Pharahos King"></img>
                    <h4>Pharahos Kings</h4>
                    <div>Mint: 1 SOL</div>
                    <div>Supply: 1500</div>
                </div>
                <div className="family-item">
                    <img src={Pharahos_Women} alt="Almighty Pharahos Queen"></img>
                    <h4>Pharahos Queen</h4>
                    <div>Mint: 1 SOL</div>
                    <div>Supply: 1000</div>
                </div>
                <div className="family-item">
                    <img src={Pharahos_Baby} alt="Almighty Pharahos Baby"></img>
                    <h4>Baby Pharahos</h4>
                    <div>Mint: TBA</div>
                    <div>Supply: Free Airdrop for Kings and Queen holders.</div>
                </div>
            </div>
            <br/>
            <br/>
            {/* <br/> */}
        </StyledFamily>
    )
}