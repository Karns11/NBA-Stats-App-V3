// import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({ baseUrl: "" });

// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: ["User"],
//   endpoints: (builder) => ({}),
// });

//this is basically the parent to our other api slices
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; //fetchBaseQuery is the function that will allow us to make requests to our backend api

const BASE_URL = "";
const USERS_URL = "/api/users";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
