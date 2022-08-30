import { Alert, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { getDogs } from "../../api/dogs";
import { IDog, IDogPaginantion } from "../../types/IDog";
import { Dog } from "./Dog";

import { Paginantion, PaginantionButton } from "./Pagination";
import { useQuery } from "react-query";

export const Loading = () => (
  <div className="loading">
    <CircularProgress />
    <Box sx={{ paddingLeft: "10px" }}>Buscando meus Pets ...</Box>
  </div>
);

export const List = () => {
  //const [dogs, setDogs] = useState<IDogPaginantion>();
  //const [isLoading, setLoading] = useState<boolean>(false);
  //const [isError, setError] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  {/*useEffect(() => {
    setLoading(true);
    getDogs(currentPage)
      .then((dogs) => {
        setDogs(dogs);
      })
      .catch((error) => {
        setError(error.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]); */}

  const {isError, isLoading, data:dogs} = useQuery<IDogPaginantion>(["dogs", {page:currentPage}],()=>getDogs(currentPage))

  if (isError) {
    return (
      <Alert className="loading" severity="error">
        {isError}
      </Alert>
    );
  }

  if (isLoading || !dogs?.data) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="title">Meus Pets 🐶</h1>

      <Paginantion currentPage={currentPage} totalItens={dogs.totalItens} />

      <div className="flex">
        {dogs.data.map((dog: IDog) => (
          <Dog
            key={dog.id}
            id={dog.id}
            name={dog.name}
            description={dog.description}
            image={dog.image}
            breed={dog.breed}
          />
        ))}
      </div>

      <PaginantionButton
        hasNext={dogs.hasNext}
        hasPrevious={dogs.hasPrevious}
        onNextPage={() => {
          setCurrentPage(currentPage + 1);
        }}
        onPreviousPage={() => {
          setCurrentPage(currentPage - 1);
        }}
      />
    </div>
  );
};
