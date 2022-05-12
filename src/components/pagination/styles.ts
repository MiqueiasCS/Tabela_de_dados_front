import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;

  svg {
    font-size: 20px;
  }
  .pagination {
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      width: 35px;
      height: 30px;
      border-radius: 50px;
      background-color: lightgray;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-size: 20px;
      }
    }
  }
`;
