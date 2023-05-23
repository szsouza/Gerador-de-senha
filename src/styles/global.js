import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
  }

  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    p, h3 {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }

  main {
    width: 300px;
    height: 300px;
    padding: 20px;
    box-shadow: 0 1px 10px #ccc;
    display: flex;
    flex-direction: column;
    gap: 15px;

    >div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  input {
    padding: 5px;
    outline: none;
    accent-color: blueviolet;
    border-color: blueviolet;
  }

  input[type=checkbox] {
    width: 18px;
    height: 18px;
  }
  input[type=range] {
    width: 90%;
  }

  button {
    background-color: blueviolet;
    cursor: pointer;
    color: white;
    border: none;
    padding: 5px;
  }

`