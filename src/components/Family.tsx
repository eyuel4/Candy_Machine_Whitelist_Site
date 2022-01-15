import { StyledFamily } from "../styles/Family.styled";
import Pharaohs_Men from "../imgs/King_Pharaoh.jpg";
import Pharaohs_Women from "../imgs/Queen_Pharaohs.jpg";
import Pharaohs_Baby from "../imgs/Baby_Pharaohs1.png";

export default function Family() {
    return (
        <StyledFamily className="family-container">
            <div className="family-header">
                <h1>Almighty Pharaho's Family</h1>
                <hr className="horizontal-line"/>
            </div>
            <div className="family-item-div">
                <div className="family-item">
                    <img src={Pharaohs_Men} alt="Almighty Pharaohs King"></img>
                    <h4>Pharaohs Kings</h4>
                    <div>Mint: 0.5 SOL</div>
                    <div>Supply: 2500</div>
                </div>
                <div className="family-item">
                    <img src={Pharaohs_Women} alt="Almighty Pharaohs Queen"></img>
                    <h4>3D-Pharaohs Queen</h4>
                    <div>Mint: TBA</div>
                    <div>Supply: 2000</div>
                </div>
                <div className="family-item">
                    <img src={Pharaohs_Baby} alt="Almighty Pharaohs Baby"></img>
                    <h4>3D-Baby Pharaohs</h4>
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