import axios from "axios";
import { API_URL, TOTAL_PER_PAGE } from "../constants";
import { IDogPaginantion } from "../types/IDog";

export const getDogs = (currentPage: number) => {
  return axios
    .get(`${API_URL}dogs?_limit=${TOTAL_PER_PAGE}&_page=${currentPage}`)
    .then((response) => {
      return convertDataToDogPaginantion(response, currentPage);
    });
};

const convertDataToDogPaginantion = (response: any, currentPage: number) => {
  const totalItens = parseFloat(response.headers["x-total-count"]);

  return {
    data: response.data,
    hasNext: totalItens > currentPage * TOTAL_PER_PAGE,
    hasPrevious: currentPage > 1,
    totalItens,
  } as IDogPaginantion;
};
