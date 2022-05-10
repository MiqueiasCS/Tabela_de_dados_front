import { Container } from "./style";
import axios from "axios";
import { useEffect, useState } from "react";
import { TableComponent } from "../../components/table";
import { IResponse } from "../../types";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export const ListingPage = () => {
  const [vunerabilities, setVunerabilities] = useState<IResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [endPointFilter, setEndPointFilter] = useState("&date=desc");

  const handleClickPagination = (page: string) => {
    if (page === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (
      page === "next" &&
      (vunerabilities.length === 50 || currentPage < 11)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

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
      <TableComponent
        vunerabilities={vunerabilities}
        setEndPointFilter={setEndPointFilter}
        endPointFilter={endPointFilter}
      />
      <div>
        <MdOutlineArrowBackIosNew
          onClick={() => handleClickPagination("previous")}
        />
        {currentPage}
        <MdOutlineArrowForwardIos
          onClick={() => handleClickPagination("next")}
        />
      </div>
    </Container>
  );
};
