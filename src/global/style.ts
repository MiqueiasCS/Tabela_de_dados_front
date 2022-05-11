import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
}

a{
    text-decoration: none;
    cursor: pointer;
}

button{
    cursor: pointer;
    border: none;
    background-color: #ff4800;
    color:white;
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 800;
}

ul, li{
    list-style: none;
}

body{
    max-width: 1280px;
    margin: 0 auto;
}

`;
