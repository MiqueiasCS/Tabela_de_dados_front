import { Container, ContentRowContainer } from "./styles";
import { FunctionComponent } from "react";
import { IVunerabilities } from "../../types";
import { useNavigate } from "react-router-dom";

export const TableComponent: FunctionComponent<IVunerabilities> = ({
  currentItens,
  setEndPointFilter,
  endPointFilter,
}) => {
  const navigate = useNavigate();

  const handleFilter = (filter: string) => {
    if (endPointFilter.includes(filter)) {
      let removedDateFilter = endPointFilter.replace(filter, "");

      setEndPointFilter(removedDateFilter);
    } else {
      setEndPointFilter(endPointFilter + filter);
    }
  };

  const handleFilterFixed = (filter: string) => {
    if (endPointFilter.includes(filter)) {
      let fixedFilter = endPointFilter.replace(filter, "&fixed=corrigida");

      setEndPointFilter(fixedFilter);
    } else {
      let notFixed = endPointFilter.replace("&fixed=corrigida", "") + filter;
      setEndPointFilter(notFixed);
    }
  };

  return (
    <Container>
      <div className="container_row row-cabecalho">
        <div className="container_col col_hostname col-cabecalho">Hostname</div>
        <div className="container_col col_ip_address col-cabecalho">Ip</div>
        <div className="container_col col_title col-cabecalho">title</div>
        <div className="container_col col_severity col-cabecalho">Severity</div>
        <div
          className="container_col col_cvss col-cabecalho"
          onClick={() => handleFilter("&cvss=asc")}
        >
          cvss
        </div>
        <div
          className="container_col col_fixed col-cabecalho"
          onClick={() => handleFilterFixed("&fixed=nao-corrigida")}
        >
          fixed
        </div>
        <div
          className="container_col col_publication_date col-cabecalho"
          onClick={() => handleFilter("&date=desc")}
        >
          Publication
        </div>
      </div>

      <div className="container-content">
        {currentItens.map((vunerability, index) => (
          <ContentRowContainer
            className="container_row"
            key={index}
            onClick={() => navigate(`/dashboard/${vunerability.hostname}`)}
            severity={vunerability.severity}
          >
            <div className="container_col col_hostname">
              {vunerability.hostname}
            </div>
            <div className="container_col col_ip_address">
              {vunerability.ip_address}
            </div>
            <div className="container_col col_title">{vunerability.title}</div>
            <div className="container_col col_severity">
              {vunerability.severity}
            </div>
            <div className="container_col col_cvss">
              {vunerability.cvss || "--"}
            </div>
            <div className="container_col col_fixed">
              {vunerability.fixed ? "sim" : "não"}
            </div>
            <div className="container_col col_publication_date">
              {vunerability.publication_date || "--"}
            </div>
          </ContentRowContainer>
        ))}
      </div>
    </Container>
  );
};
