import {createGlobalStyle} from "styled-components";
import BackGroundImage from "../imgs/background-5.jpg";
// import BackGroundImage from "../imgs/background-2.jpg";

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #fff2e3;
        /* background-image: url(${BackGroundImage}); */
        /* background-repeat:no-repeat; */
        /* background-size:cover; */
        /* background-position:center center; */
        height: auto;
        margin: 0;
        padding: 0;
        border: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #FFFFFF;
        overflow-x: hidden;
    }
  
    .App {
        text-align: center;
    }
  
    .App-logo {
        height: 60vmin;
        pointer-events: none;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }


    /** Style for Home Page */
    .home-section {
        background-image: url(${BackGroundImage});
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center;
        height: auto;
        /* border-bottom: 1px white solid; */
    }

    .container-fluid {
        padding-right:0;
        padding-left:0;
        margin-right:auto;
        margin-left:auto
    }

    .intro-section {
        display: flex;
        flex-direction: column;
        /* background-color: #2b3342; */
        /* background-image: url('./imgs/background-2.jpg'); */
        min-height: 100vh!important;
        /* height: 1000px; */
        background-size: cover;
        align-items: center;
        justify-content: flex-start;
    }

    .intro-header {
        margin-top: 13%;
        color: rgb(245, 171, 33);
        font-size: calc(3em + 1vw);
        font-weight: bolder;
    }

    .intro-slogan {
        color: rgb(245, 171, 33);
        background-color: rgb(252, 251, 249, 0.2);
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

    .hidden-detail {
        display: none;
    }
    
    /* Small devices (tablets, 768px and below) */
    @media (max-width: 768px) { 
        .intro-header {
            margin-top: 50%;
            color: rgb(245, 171, 33);
            font-size: calc(2em + 1vw);
            font-weight: bolder;
        }

        body {
            overflow-x: hidden;
        }
    }


`;

export default GlobalStyles;