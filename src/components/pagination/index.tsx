import { FunctionComponent } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { IPagination } from "../../types";
import { Container } from "./styles";

export const PaginationComponent: FunctionComponent<IPagination> = ({
  currentPage,
  setCurrentPage,
  listSize,
}) => {
  const handleClickPagination = (page: string) => {
    if (page === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (page === "next" && listSize === 50 && currentPage < 11) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      <HiOutlineChevronDoubleLeft onClick={() => setCurrentPage(1)} />

      <div className="pagination">
        <MdOutlineArrowBackIosNew
          onClick={() => handleClickPagination("previous")}
        />
        <div>
          <p>{currentPage}</p>
        </div>
        <MdOutlineArrowForwardIos
          onClick={() => handleClickPagination("next")}
        />
      </div>
    </Container>
  );
};
