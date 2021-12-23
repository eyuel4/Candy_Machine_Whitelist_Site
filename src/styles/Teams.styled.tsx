import styled from "styled-components";

export const StyledTeams = styled.section`
    .row {
        margin: 0;
    }

    .img-fluid {
        width: 80%;
    }

    .team-list img {
        width: 50%;
    }

    .team-list .content {
        width: 50%;
    }

    .team-list .content .follow {
        position: absolute;
        bottom: 24px;
    }

    .team-list:hover {
        -webkit-transform: scale(1.05);
                transform: scale(1.05);
    }

    .team, .team-list {
        -webkit-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
    }

    .team .content .title, .team-list .content .title {
        font-size: 18px;
        color:  rgb(245,171,33);
    }

    .team .overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    /* Border for teams */
    .team {
        border: 2px solid #fcec92dd;;
    }

    .team .member-position, .team .team-social {
        position: absolute;
        bottom: -35px;
        right: 0;
        left: 0;
        margin: auto 10%;
        z-index: 99;
    }

    .team .team-social {
        bottom: 40px;
        opacity: 0;
        -webkit-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
    }

    .team:hover {
        -webkit-transform: translateY(-7px);
                transform: translateY(-7px);
        -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    }

    .team:hover .overlay {
        opacity: 0.6;
    }

    .team:hover .team-social {
        opacity: 1;
    }

    .social-icon.social li a {
            color: #adb5bd;
            border-color: #adb5bd;
    }
    .social-icon li a {
        color: #35404e;
        border: 1px solid #35404e;
        display: inline-block;
        height: 32px;
        text-align: center;
        font-size: 24px;
        width: 32px;
        line-height: 30px;
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
        overflow: hidden;
        position: relative;
    }

    .social-icon.social li a:hover {
            color: #e7c921;
            border-color: #e9c214;
    }

    @media (max-width: 768px) {
        .team-list img
        .team-list .content {
            width: 100%;
            float: none !important;
        }
        .team-list img .follow,
        .team-list .content .follow {
            position: relative;
            bottom: 0;
            p {
                color: black;
            }
        }
        .img-fluid {
                width: 70%;
        }
        .section-title {
            padding-top: 10%;
        }
        .team {
            margin-left: 5%!important;
            margin-right: 5%!important;
        }
        .content p {
            padding-left: 3%;
            padding-right: 3%;
        }

        .social-icon.social li a {
            color: #adb5bd;
            border-color: #adb5bd;
        }
        .social-icon li a {
            color: #35404e;
            border: 1px solid #35404e;
            display: inline-block;
            height: 32px;
            text-align: center;
            font-size: 24px;
            width: 32px;
            line-height: 30px;
            -webkit-transition: all 0.4s ease;
            transition: all 0.4s ease;
            overflow: hidden;
            position: relative;
        }

        .row {
            margin: 0;
        }
    }

    .rounded {
        border-radius: 5px !important;
    }

    .para-desc {
        max-width: 600px;
    }
    .text-muted {
        color: #8492a6 !important;
    }

    .section-title .title {
        /* letter-spacing: 0.5px;
        font-size: 30px;
        color:  rgb(245,171,33); */
        color: rgb(245, 171, 33);
        font-family: 'MadeOuterSansBold';
        font-size: 36px!important;
        font-weight: bolder;
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

    p {
            color: black;
    }


    
`;