import styled from "styled-components";

export const StyledAbout = styled.section`
    .about-project {
        background-color: white!important;
        min-height: 100vh!important;
        background-image: none;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid black;
    }

    .about-header {
        /* display: flex; */
        justify-content: center;
        margin-top: 2%;
        padding-bottom: 5%;
        color: rgb(245, 171, 33);
    }

    .about-content {
        display: flex;
        justify-content: space-evenly;
    }

    .about-top-content hr {
        color: yellow;
    }

    .about-top-content {
        display: flex;
    }

    .about-snippet {
        width: 25%;
        height: 20%;
    }

    .about-description {
        width: 45%;
        height: 50%;
        border: solid 1px white;
        border-radius: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(255, 251, 242, 0.781);
        box-shadow: 0 6px 10px rgba(218, 129, 27, 0.582), 0 0 6px rgba(192, 176, 146, 0.473), 0 6px 10px rgba(218, 129, 27, 0.582), 0 0 6px rgba(192, 176, 146, 0.473);
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    }

    .about-description h4 {
        color: rgba(245, 171, 33, 0.795);
    }

    .about-description p {
        color: rgba(71, 50, 11, 0.904);
        padding-left: 5%;
        padding-right: 5%;
    }

    .card {
        box-shadow: 0 6px 10px rgba(218, 129, 27, 0.582), 0 0 6px rgba(192, 176, 146, 0.473);
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    /* padding: 14px 80px 18px 36px; */
    cursor: pointer;
    }

    .card:hover{
        transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(190, 121, 43, 0.12), 0 4px 8px rgba(214, 145, 54, 0.06);
    }

    .horizontal-line {
        margin-top: 0;
        background-color: #f3c04f;
        color: #ebd93b;
        border-top: 2px solid #fff;
        margin-left: 37%;
        width: 30%;
        height: 4px;
    }

    /* Small devices (tablets, 768px and below) */
    @media (max-width: 768px) { 
        .about-content {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }

        .about-snippet {
            width: 45%;
            height: 40%;
        }

        .about-description {
            width: 80%;
            margin-top: 10%;
        }

        .about-description p {
            color: rgba(71, 50, 11, 0.904);
            padding-left: 5%;
            padding-right: 5%;
            font-size: 12px;
        }
        .about-header {
            margin-top: 5%;
        }
    }
`;