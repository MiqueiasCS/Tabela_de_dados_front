import { FunctionComponent, useEffect, useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
import { IPagination } from "../../types";
import { Container } from "./styles";

export const PaginationComponent: FunctionComponent<IPagination> = ({
  currentApiRequestPage,
  setCurrentApiRequestPage,
  vunerabilities,
  setCurrentItens,
  currentItens,
}) => {
  const [itensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);

  // --------------Função de páginas requisitadas para a api-------------------------
  //  cada requisição a Api retorna um objeto com uma lista de itens. Essa lista tem no máximo 50 itens.
  // clicar em next e previous aqui, mostra os 50 itens proximos ou anteriores respectivamente
  const handleClickApiRequestPage = (page: string) => {
    if (page === "previous" && currentApiRequestPage > 1) {
      setCurrentApiRequestPage(currentApiRequestPage - 1);
    } else if (
      page === "next" &&
      vunerabilities.enviados === 50 &&
      currentApiRequestPage < Math.ceil(vunerabilities.total / 50)
    ) {
      setCurrentApiRequestPage(currentApiRequestPage + 1);
    }
    setCurrentPage(0);
  };

  // ------------------Função de paginação da tabela----------------------------------------------

  // cada bloco da tabela exibe 10 linhas do total recebido da api que é no máximo de 50 itens por requisição (vunerablities.enviados <= 50).
  // clicar em next e previous aqui, mostra os 10 itens proximos ou anteriores respectivamente

  const handleClickPagination = (page: string) => {
    if (
      currentPage + 1 < Math.ceil(vunerabilities.enviados / itensPerPage) &&
      page === "next"
    ) {
      setCurrentPage(currentPage + 1);
    }
    if (currentPage > 0 && page === "previous") {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    let startIndex = currentPage * itensPerPage;
    let endIndex = startIndex + itensPerPage;

    if (!vunerabilities.itens) {
      setCount(count + 1);
    } else {
      setCurrentItens(vunerabilities.itens.slice(startIndex, endIndex));
    }
  }, [vunerabilities, currentPage, count]);

  return (
    <Container>
      <div>
        <p>{`Mostrando ${currentItens.length + currentPage * 10} - ${
          vunerabilities.enviados
        } de ${vunerabilities.total} resultados`}</p>
      </div>
      <HiOutlineChevronDoubleLeft
        onClick={() => handleClickApiRequestPage("previous")}
      />

      <div className="pagination">
        <MdOutlineArrowBackIosNew
          onClick={() => handleClickPagination("previous")}
        />
        <div>
          <p>{currentPage + 1}</p>
        </div>
        <MdOutlineArrowForwardIos
          onClick={() => handleClickPagination("next")}
        />
      </div>

      <HiOutlineChevronDoubleRight
        onClick={() => handleClickApiRequestPage("next")}
      />
    </Container>
  );
};
