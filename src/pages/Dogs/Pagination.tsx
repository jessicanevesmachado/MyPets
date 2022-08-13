import { Box, Button } from "@mui/material";
import { TOTAL_PER_PAGE } from "../../constants";
import { IPaginantion, IPaginantionButton } from "../../types/IDog";

export const Paginantion = ({ currentPage, totalItens }: IPaginantion) => {
  const totalOfPage = parseInt((totalItens / TOTAL_PER_PAGE).toString());
  return (
    <Box sx={{ float: "right", marginBottom: "10px" }}>
      {`Exibindo a página ${currentPage}/${totalOfPage} de um total de ${totalItens} dogs. `}
    </Box>
  );
};

export const PaginantionButton = ({
  hasPrevious,
  hasNext,
  onNextPage,
  onPreviousPage,
}: IPaginantionButton) => (
  <div className="actionButton">
    <Button onClick={onPreviousPage} disabled={!hasPrevious} variant="text">
      Anterior
    </Button>
    <Button onClick={onNextPage} disabled={!hasNext} variant="text">
      Próximo
    </Button>
  </div>
);
