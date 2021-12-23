import styled from "styled-components";

export const StyledFaqItem = styled.div `
    .head {
        border: 1px solid;
        color: #493304!important;
        border-color: #ebd93b;
        border-radius: 25% 25% 0% 0%;
        padding: 1% 1%;
        width: 60%;
        font-weight: bolder;
        font-size: larger;

        padding: .5rem 5px;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        line-height: 40px;
    }

    .content {
        display: none;
        p {
            margin-top: 2%;
            font-size: 16px;
        }
    }

    .drop_down_expanded {
        display: inline!important;
        height: 160px;
        font-size: 16px;
        line-height: 40px;

        p {
            border-top: #e08413d6 solid 1px;
        }

    }

    .title {
        display: flex;

        span {
            width: 70%;
        }

        svg {
            padding-left: 5%;
        }
    }

    .showicon {
        display: block;
    }

    .hideicon {
        display: none;
    }

    @media (max-width: 768px) {
        .title {
            p {
                font-size: 16px;
            }
        } 

        .drop_down_expanded {
            display: inline!important;
            height: 160px;
            font-size: 12px;
            line-height: 40px;
        }

        .content p {
            font-size: 14px;
        }

        .head {
            width: 90%;
        }
    }
`;