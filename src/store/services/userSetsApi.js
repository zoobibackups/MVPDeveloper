import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "./baseUrl";
const baseQueryWithToken = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().userReducer.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const userSetsApi = createApi({
  reducerPath: "userSetsApi",
  baseQuery: baseQueryWithToken,
  tagTypes: ["userSetsData"],
  endpoints: (builder) => ({
    createUserSets: builder.query({
      query: (args) => {
        return {
          url: `schedule`,
          method: "GET",
        };
      },
      providesTags: ["userSetsData"],
    }),
    getUserSets: builder.query({
      query: (args) => {
        const { id } = args;
        return {
          url: `schedule/${id}`,
          method: "GET",
        };
      },
      providesTags: ["userSetsData"],
    }),
    getUsersSetsById: builder.query({
      query: (args) => {
        const { data } = args;
        return {
          url: `schedule`,
          method: "POST",
          data: data,
        };
      },
      providesTags: ["userSetsData"],
    }),
    updateUsetSets: builder.query({
      query: (args) => {
        const { id } = args;
        return {
          url: `schedule/scheduleByUserId/${id}`,
          method: "GET",
        };
      },
      providesTags: ["userSetsData"],
    }),
    deleteUsetSets: builder.query({
      query: (args) => {
        const { id } = args;
        return {
          url: `schedule/scheduleByUserId/${id}`,
          method: "GET",
        };
      },
      providesTags: ["userSetsData"],
    }),
  }),
});
export const {
 useCreateUserSetsQuery,
 useLazyCreateUserSetsQuery,
 useGetUserSetsQuery,
 useGetUsersSetsByIdQuery,
 useUpdateUsetSetsQuery,
 useDeleteUsetSetsQuery,
 useLazyGetUserSetsQuery,
 useLazyGetUsersSetsByIdQuery,
 useLazyDeleteUsetSetsQuery,
 useLazyUpdateUsetSetsQuery
} = userSetsApi;
