import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .content {
    text-align: center;
    /* height: 400px; */

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    button {
      margin-top: 8px;
    }
  }

  .input_container {
    margin: 5px 0;

    input {
      width: 300px;
      padding: 5px;
    }
  }
`;
