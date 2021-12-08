import styled from "styled-components";

export const StyledAttributes = styled.section`
    .attribute-header {
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

    .attribute-item {
        display: flex;
        flex-wrap: wrap;
    }

    .attribute-content {
        display: flex;
        flex-direction: column;
        width: 30%;
    }
    .attribute-content h6 {
        color: #493304!important;
        padding-top: 5%;
    }

    .attribute-content img {
        width: 45%;
        height: 55%;
    }
`