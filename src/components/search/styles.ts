import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  .input_container {
    border: 1px solid lightgray;
    border-radius: 8px 0 0 8px;
    width: 280px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    > svg {
      font-size: 18px;
    }

    > input {
      padding: 5px 10px;
      font-size: 16px;
      border: none;
      width: 250px;
    }
  }

  .btn-search {
    border-radius: 0 8px 8px 0;
  }
`;
