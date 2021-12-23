import Snippet2 from '../imgs/Snippet_zoomed_sample1.gif';
import { StyledAbout } from '../styles/About.styled';

export default function About() {
    return (
        <>
            <StyledAbout id="about" className="about-project">
                <div className="about-header">
                    <h1>Almighty Pharaohs Collections</h1>
                    <hr className="horizontal-line"/>
                </div>

                <div className="about-content">
                    <div className="card about-snippet">
                        <img src={Snippet2} className="card-img-top" alt="Almighty Pharaohs" height="50%"/>
                        {/* <div className="card-body">
                            <p className="card-text">Anubis one of the most powerful with weapons</p>
                        </div> */}
                    </div>
                    <div className ="about-description">
                        <h4>About </h4>

                        <p>
                            The story of Almighty Pharaohs begins around 3100 BC in Ancient Egypt from when the north and the south were united as one country under the first pharaoh Menes.
                            2500 Egyptian Pharaohs have come to conquer Solana world. 
                            The 2500 Pharaohs are created by a generative algorithm of which each of them has different power, traits, and skill in a fight.
                            The Kings will be joining the war and once the mint war is over they will be bringing their queen and kids to Solana Universe once they secure its safe.
                        </p>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
        </StyledAbout>
    </>
    );
}