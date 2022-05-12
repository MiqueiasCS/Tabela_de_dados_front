import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .container_row {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .row-cabecalho {
    padding: 5px 0;
    background-color: #efefef;
  }

  .col-cabecalho {
    text-align: center;
    font-weight: 800;
  }

  .container_col {
    padding: 5px 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .col_hostname {
    width: 180px;
  }

  .col_ip_address {
    width: 110px;
  }
  .col_title {
    width: 640px;
  }
  .col_severity {
    width: 85px;
  }
  .col_cvss {
    width: 55px;
  }
  .col_fixed {
    width: 60px;
  }
  .col_publication_date {
    width: 110px;
  }

  .col_cvss,
  .col_fixed,
  .col_publication_date {
    cursor: pointer;
  }

  .container-content {
    height: 75vh;
  }
`;
interface IContentRowContainer {
  severity: string;
}

export const ContentRowContainer = styled.div<IContentRowContainer>`
  cursor: pointer;
  padding: 8px 0;

  :hover {
    color: blue;
  }

  div.col_severity {
    background-color: ${({ severity }) =>
      severity === "Crítico"
        ? "red"
        : severity === "Alto"
        ? "#ff000069"
        : "transparent"};
  }
`;
