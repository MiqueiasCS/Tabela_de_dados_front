import { useParams } from "react-router-dom";
import { Container } from "./styles";

export const DashboardPage = () => {
  const params = useParams<string>();

  return (
    <Container>
      <h2>Dashboard - host: {params.hostname}</h2>
      {/* <TableComponent /> */}
    </Container>
  );
};
