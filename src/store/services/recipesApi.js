import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from './baseUrl';
const baseQueryWithToken = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().userReducer.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});



export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: baseQueryWithToken,
  tagTypes: ['recipesData'],
  endpoints: builder => ({
    getRecipies: builder.query({
      query: args => { 
        return {
          url: `recipes`,
          method: 'GET',

        };
      },
      staleTime: Infinity,
      providesTags: ['recipesData'],
    }),
    getRecipiesById: builder.query({
      query: args => {
       const {id}  =args
        return {
          url: `recipes/${id}`,
          method: 'GET',

        };
      },
      providesTags: ['recipesData'],
    }),
    createRecipies:builder.query({
      query: args => {
       const {data}  =args
        return {
          url: `recipes`,
          method: 'POST',
          body:data

        };
      },
      providesTags: ['recipesData'],
    }),
    updateRecipies:builder.query({
      query: args => {
       const {data,id}  =args
        return {
          url: `recipes/${id}`,
          method: 'PATCH',
          body:data
        };
      },
      providesTags: ['recipesData'],
    }),
  }),
});
export const {
  useCreateRecipiesQuery,
  useLazyCreateRecipiesQuery,
  useGetRecipiesByIdQuery,
  useLazyGetRecipiesByIdQuery,
  useUpdateRecipiesQuery,
  useLazyGetRecipiesQuery,
  useGetRecipiesQuery,
  useLazyUpdateRecipiesQuery
} = recipesApi;