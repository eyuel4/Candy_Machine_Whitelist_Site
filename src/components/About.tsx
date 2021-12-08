import Snippet2 from '../imgs/Snippet_Selected.gif';
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
                           2000 Egyptian Gods have come to conquere Solana world. The story of Ancient Egypt begins from when the north and the south were united as one country under the first pharaoh Menes.
                           Almighty Pharaohs were in Egypt around 3100 BC the pharaoh of the north conquered the south and Egypt became united. 
                           Almighty Pharaohs have now come to Solana world. Currently they have marched 2000 Pharaohs of which some of them have different power, traits and skill on fight.
                           The Kings will be joining the war and once the mint war is over they will be brining there queen and kids to Solana Universe once they secure it's safe.
                            
                            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen 
                            book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing 
                            software like Aldus PageMaker including versions of Lorem Ipsum. */}
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