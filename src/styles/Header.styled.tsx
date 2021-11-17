import styled from "styled-components";

export const StyledHeader = styled.nav `
.brand-title {
    color: rgb(245, 171, 33);
    font-size: 1em;
    font-weight: bold;
  }
  
  .d-flex ul {
      display: flex;
      justify-content: space-evenly;
      list-style-type: none;
  }
    
  .social-icon {
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 14px;
      border-radius: 7px;
      margin-right: 11px;
      cursor: pointer;
      /* background-color: wheat; */
  }
  
  .social-icon:hover {
      border: #fff solid 1px;
  }
    
  .bi-discord {
      font-size: 2em;
      color: rgb(245, 171, 33);
  }
    
  .bi-twitter {
      font-size: 2em;
      color: rgb(245, 171, 33);
    }
    
  .navbar-nav > li{
      padding-left:30px;
      padding-right:30px;
    }
  
  .navbar-nav > li > a:hover { 
      color: rgba(255, 205, 139, 0.993) !important;
      border: #fff solid 1px;
   }

   .container-fluid {
       padding: 0;
       margin: 0;
   }
`;