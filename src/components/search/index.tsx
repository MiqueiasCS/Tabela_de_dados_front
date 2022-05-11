import { FunctionComponent, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { ISearch } from "../../types";
import { Container } from "./styles";

export const SearchComponent: FunctionComponent<ISearch> = ({
  setEndPointFilter,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleClickFilter = () => {
    setEndPointFilter(`&name=${inputValue}`);
  };

  return (
    <Container>
      <div className="input_container">
        <BiSearchAlt2 />
        <input
          type="text"
          placeholder="Digite o hostname"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button className="btn-search" onClick={handleClickFilter}>
        Buscar
      </button>
    </Container>
  );
};
