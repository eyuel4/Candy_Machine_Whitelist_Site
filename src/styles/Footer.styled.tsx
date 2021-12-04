import styled from "styled-components";

export const StyledFooter = styled.div`
    .footerContent {
        background-color: #212529;
        border-Top: 1px solid #E7E7E7;
        text-Align: center;
        padding: 20px;
        // position: fixed;
        left: 0;
        bottom: 0;
        height: 60px;
        width: 100%;

        p {
            background-image: -webkit-linear-gradient(45deg, var(--secondary-color) 15%, var(--primary-color) 65%);
            background-image: linear-gradient(45deg, var(--secondary-color) 15%, var(--primary-color) 65%);
        }
    }

    @media (max-width: 768px) {
        .footerContent {
            padding: 10px;
        }
    }
`;