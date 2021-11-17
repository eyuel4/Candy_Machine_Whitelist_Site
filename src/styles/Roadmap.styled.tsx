import styled from "styled-components";

export const StyledRoadmap = styled.section`
    .roadmap {
        display: flex;
        flex-direction: column;
    }

    .roadmap-header {
        h2 {
            color: rgb(245, 171, 33);
            font-family: 'MadeOuterSansBold';
            font-size: 36px!important;
            font-weight: bolder;
        }
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

    .roadmap-item {
        display: flex;
        color: black;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 0;
        text-align: start;
        ul > li {
            text-align: start;
        }
    }

    .roadmap-circleBoxContainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 10%;
        margin-right: 0;
    }

    .roadmap-circleBox {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid rgb(232, 180, 10);
        background-color: rgb(232, 154, 10);
        
    }

    .roadmap-circleLine{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 150px;
        border-left: 5px solid rgb(175, 142, 50);
        color: black;
    }

    .roadmap-detail {
        width: 60%;
        margin-left: 0;
    }

    .taskItem_status {
        margin-left: 2%;
        color: #f3c04f;
    }

    @media (min-width: 768px) {
        .roadmap-circleBox {
            width: 30px;
            height: 30px;
        }

        .roadmap-circleLine {
            top: 30px;
            left: 15px;
        }

    }
`