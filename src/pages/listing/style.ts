import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > svg {
      font-size: 20px;
      cursor: pointer;
    }
  }

  .footer {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
