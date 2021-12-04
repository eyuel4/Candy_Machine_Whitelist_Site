import styled from "styled-components";

export const StyledFamily = styled.section`
    .family-header {
        justify-content: center;
        padding-bottom: 1%;
        color: rgb(245, 171, 33);
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

    .family-item-div {
        display: flex;
    }

    .family-item {
        width: 30%;
        color: #503411;
        margin-top: 1%;
        img {
            max-width: 70%;
            max-height: 70%;
            width: 32rem;
            margin-bottom: 2rem;
            border-radius: 50%;
        }

        h4 {
            margin-top: 2%;
            padding-top: 2%;
        }
    }

    .family-container {
        height: fit-content;
        background-color: #ffd670;
    }

    /* Small devices (tablets, 768px and below) */
    @media (max-width: 768px) { 
        
    }
`;