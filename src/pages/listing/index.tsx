import { Container } from "./style";
import axios from "axios";
import { useEffect, useState } from "react";
import { TableComponent } from "../../components/table";
import { IResponse, IItens } from "../../types";
import { PaginationComponent } from "../../components/pagination";
import { SearchComponent } from "../../components/search";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

export const ListingPage = () => {
  const [vunerabilities, setVunerabilities] = useState<IResponse>(
    {} as IResponse
  );
  const [currentApiRequestPage, setCurrentApiRequestPage] = useState(1);
  const [endPointFilter, setEndPointFilter] = useState("&date=desc");
  const [currentItens, setCurrentItens] = useState<IItens[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("@token");

    if (!token) {
      navigate("/");
    } else {
      axios
        .get(
          `http://localhost:8000/api/reports/?page=${currentApiRequestPage}${endPointFilter}`,
          {
            headers: {
              Authorization: "Token aa16d0051c5d7359e81301e2c27ec5b987e3ee3d",
            },
          }
        )
        .then((response) => {
          setVunerabilities(response.data);
          setCurrentItens(response.data.itens.slice(0, 10));
        })
        .catch((err) => console.log(err.response));
    }
  }, [currentApiRequestPage, endPointFilter]);

  const handleClick = () => {
    localStorage.removeItem("@token");
    navigate("/");
  };

  return (
    <Container>
      <div className="header">
        <SearchComponent setEndPointFilter={setEndPointFilter} />
        <FiLogOut onClick={handleClick} />
      </div>

      <TableComponent
        currentItens={currentItens}
        setEndPointFilter={setEndPointFilter}
        endPointFilter={endPointFilter}
      />

      <div className="footer">
        <PaginationComponent
          currentApiRequestPage={currentApiRequestPage}
          setCurrentApiRequestPage={setCurrentApiRequestPage}
          vunerabilities={vunerabilities}
          setCurrentItens={setCurrentItens}
          currentItens={currentItens}
        />
      </div>
    </Container>
  );
};
