import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    padding: 16px 0;
  }

  .footer {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
