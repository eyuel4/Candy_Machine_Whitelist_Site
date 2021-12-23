import { StyledTeams } from "../styles/Teams.styled";
import Team11_Img from '../imgs/128.png';
import Team22_Img from '../imgs/969.png';
import Team33_Img from '../imgs/921.png';

export default function Teams() {
    return (
        <>
         <StyledTeams className="team-container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Meet the team</h4>
                        <hr className="horizontal-line"/>
                        {/* <p className="text-muted para-desc mx-auto mb-0">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p> */}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 col-12 mt-2 pt-2">
                    <div className="team text-center rounded p-1 py-2">
                        <img src={Team33_Img} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Double Falcon</h4>
                            <small className="text-muted">Founder/Developer</small>
                            <p>Crypto Ethuist entrepreneur and software engineer with 7 years of experience working for different companies.</p>
                            <ul className="list-unstyled mt-3 social-icon social mb-0">
                                <li className="list-inline-item"><a href="https://twitter.com/eyuel4" className="rounded"><i className="bi bi-twitter" title="Twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-2 col-12 mt-2 pt-2">
                    <div className="team text-center rounded p-1 py-2">
                        <img src={Team22_Img} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Necho I</h4>
                            <small className="text-muted">Digital Artist</small>
                            <p>An enthusiastic illustrator with a keen eye for artistic detail and a creative graphics designer.</p>
                            <ul className="list-unstyled mt-3 social-icon social mb-0">
                                <li className="list-inline-item"><a href="https://Twitter.com/robxarts" className="rounded"><i className="bi bi-twitter" title="Twitter"></i></a></li>
                                <li className="list-inline-item"><a href="https://Instagram.com/robxarts" className="rounded"><i className="bi bi-instagram" title="Instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-2 col-12 mt-1 pt-1">
                    <div className="team text-center rounded p-1 py-2">
                        <img src={Team11_Img} className="img-fluid avatar avatar-small shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Zoser</h4>
                            <small className="text-muted">3D Artist</small>
                            <p>A creative CG Artist with a profound potential to show the world by bringing surreal imaginations to reality.</p>
                            <ul className="list-unstyled mt-3 social-icon social mb-0">
                                <li className="list-inline-item"><a href="https://twitter.com/nate_graphics" className="rounded"><i className="bi bi-twitter" title="Twitter"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.instagram.com/nategraphics" className="rounded"><i className="bi bi-instagram" title="Instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
                <br/>
                <br/>
         </StyledTeams>
        </>
    );
}