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
                        <h4 className="title mb-4">Our Business Minds</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                    <div className="team text-center rounded p-3 py-4">
                        <img src={Team1_Img} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Lisa Martin</h4>
                            <small className="text-muted">Founder</small>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                    <div className="team text-center rounded p-3 py-4">
                        <img src={Team2_Img} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Richha Jotchi</h4>
                            <small className="text-muted">Manager</small>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                    <div className="team text-center rounded p-3 py-4">
                        <img src={Team3_Img} className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                        <div className="content mt-3">
                            <h4 className="title mb-0">Cristino Murfy</h4>
                            <small className="text-muted">Accountant</small>
                        </div>
                    </div>
                </div>
            </div>
         </StyledTeams>
        </>
    );
}