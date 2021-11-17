import { StyledHeader } from "../styles/Header.styled";
import Logo from "../imgs/Almighty_Pharaohs_2.png";

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
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Roadmap</a>
                        </li>
                        <li>
                            <a className="nav-link" href="about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" aria-disabled="true">FAQs</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <ul> 
                            <li><span className="social-icon"><i className="bi bi-discord fa-lg"></i></span></li>
                            <li><span className="social-icon"><i className="bi bi-twitter fa-lg"></i></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyledHeader>
    )
} 