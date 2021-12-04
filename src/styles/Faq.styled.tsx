import styled from "styled-components";

export const StyledFaq = styled.section`
    .faq-header {
        justify-content: center;
        /* margin-top: 1%; */
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

    li {
        color: black;
    }

    .card-body {
        color: black;
    }

    .collapse .card-body {
        border: 2px #f3c04f solid;
        border-top: 0;
        border-radius: 2%;
        margin-left: 20%;
        margin-right: 20%;
    }

    .dropdown-menu {
        width: 60%;
        border: 2px #f3c04f solid;
    }

    .btn-primary {
        background-color: #fff!important;
        color: #f3c04f!important;
        border-color: #ebd93b;
        width: 60%;
    }

    .dropdown-menu {
        p {
            margin-left: 1%;
            margin-right: 1%;
        }
    }


`;