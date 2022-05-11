import { Container } from "./style";
import axios from "axios";
import { useEffect, useState } from "react";
import { TableComponent } from "../../components/table";
import { IResponse } from "../../types";
import { PaginationComponent } from "../../components/pagination";
import { SearchComponent } from "../../components/search";

export const ListingPage = () => {
  const [vunerabilities, setVunerabilities] = useState<IResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [endPointFilter, setEndPointFilter] = useState("&date=desc");

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/reports/?page=${currentPage}${endPointFilter}`
      )
      .then((response) => {
        console.log(response.data);
        setVunerabilities(response.data);
      })
      .catch((err) => console.log(err.response));
  }, [currentPage, endPointFilter]);

  return (
    <Container>
      <div className="header">
        <SearchComponent setEndPointFilter={setEndPointFilter} />
      </div>

      <TableComponent
        vunerabilities={vunerabilities}
        setEndPointFilter={setEndPointFilter}
        endPointFilter={endPointFilter}
      />

      <div className="footer">
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          listSize={vunerabilities.length}
        />
      </div>
    </Container>
  );
};
