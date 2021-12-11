import { StyledHeader } from "../styles/Header.styled";
import Logo from "../imgs/Almighty_Pharaohs_2.png";
import { Link } from "react-scroll";

export default function Header() {
    return (
        <StyledHeader id="navbar_top" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand text-info font-weight-bolder" href="/">
                        <img src={Logo} alt="Logo" width="90" height="90" className="vertical-align-middle" />
                        <span className="brand-title">Almighty Pharaohs</span>
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item" key="home">
                            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                        </li>
                        <li className="nav-item" key="roadmap">
                            <Link activeClass="active" to="roadmap" spy={true} smooth={true} offset={-70} duration={500}>Roadmap</Link>
                        </li>
                        <li className="nav-item" key="about">
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                        </li>
                        <li className="nav-item" key="attributes">
                            <Link activeClass="active" to="attributes" spy={true} smooth={true} offset={-70} duration={500}>Attributes</Link>
                        </li>
                        <li className="nav-item" key="faqs">
                            <Link activeClass="active" to="faqs" spy={true} smooth={true} offset={-70} duration={500}>FAQs</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <ul> 
                            <li><span className="social-icon"><a href="https://www.instagram.com/almightypharaohs"><i className="bi bi-discord fa-lg"></i></a></span></li>
                            <li><span className="social-icon"><a href="https://twitter.com/AlmightyPharaoz"><i className="bi bi-twitter fa-lg"></i></a></span></li>
                            <li><span className="social-icon"><a href="https://twitter.com/AlmightyPharaoz"><i className="bi bi-instagram fa-lg"></i></a></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyledHeader>
    )
} 