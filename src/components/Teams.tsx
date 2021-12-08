import { StyledTeams } from "../styles/Teams.styled";
import Team1_Img from '../imgs/team1.jpg';
import Team2_Img from '../imgs/team2.jpg';
import Team3_Img from '../imgs/team3.jpg';

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
                        <img src={Team1_Img} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Double Falcon</h4>
                            <small className="text-muted">Founder/Developer</small>
                            <p>Crypto Ethuist entrepreneur and software engineer with 7 years of experience working for different companies.</p>
                            <ul className="list-unstyled mt-3 social-icon social mb-0">
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="bi bi-twitter" title="Twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-2 col-12 mt-2 pt-2">
                    <div className="team text-center rounded p-1 py-2">
                        <img src={Team2_Img} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Necho I</h4>
                            <small className="text-muted">Digital Artist</small>
                            <p>A talented 2D digital artist who can bring amazing ideas to life. A talented 2D digital artist who can bring amazing ideas to life. </p>
                            <ul className="list-unstyled mt-3 social-icon social mb-0">
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="bi bi-twitter" title="Twitter"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="bi bi-instagram" title="Instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-2 col-12 mt-1 pt-1">
                    <div className="team text-center rounded p-1 py-2">
                        <img src={Team3_Img} className="img-fluid avatar avatar-small shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Zoser</h4>
                            <small className="text-muted">3D Artist</small>
                            <p>A creative CG Artist with a profound potential to show the world by bringing surreal imaginations to reality.</p>
                            <ul className="list-unstyled mt-3 social-icon social mb-0">
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="bi bi-twitter" title="Twitter"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="bi bi-instagram" title="Instagram"></i></a></li>
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