import React from "react";
import ReactDOM from "react-dom/";
import App from "./App";
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

const client = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={client}> 
    <React.StrictMode>
    <App />
    <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
  </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById("root")
);
