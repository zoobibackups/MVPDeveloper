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



export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithToken,
  tagTypes: ['userData'],
  endpoints: builder => ({
    getUserTrainingData: builder.query({
      query: args => {
        const {id} = args;
        return {
          url: `/users/training/metadata/${id}`,
          method: 'GET',

        };
      },
      providesTags: ['userData'],
    }),
    getUserFoodData: builder.query({
      query: args => {
        const {id} = args;
        return {
          url: `/users/food/metadata/${id}`,
          method: 'GET',

        };
      },
      providesTags: ['userData'],
    }),
  }),
});
export const {
  useGetUserFoodDataQuery,
  useGetUserTrainingDataQuery,
} = userApi;