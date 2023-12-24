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
export const userWorkOut = createApi({
  reducerPath: 'userWorkOut',
  baseQuery: baseQueryWithToken,
  tagTypes: ['userWorkOutData'],
  endpoints: builder => ({
    createWorkOut:builder.query({
      query: args => {
       const {data} = args
        return {
          url: `user_workout`,
          method: 'POST',
          data:data
        };
      },
      providesTags: ['userWorkOutData'],
    }),
    getWorkOut:builder.query({
      query: args => {
        return {
          url: `user_workout`,
          method: 'GET',
         
        };
      },
      providesTags: ['userWorkOutData'],
    }),
    getWorkOutByUserId:builder.query({
      query: args => {
       const {id} = args
        return {
          url: `user_workout/byUserId/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['userWorkOutData'],
    }),
    getWorkOutById:builder.query({
      query: args => {
       const {id} = args
        return {
          url: `user_workout/${id}`,
          method: 'GET',
         
        };
      },
      providesTags: ['userWorkOutData'],
    }),
    updateWorkOutById:builder.query({
      query: args => {
       const {id,data} = args
        return {
          url: `user_workout/${id}`,
          method: 'PATCH',
          data:data
        };
      },
      providesTags: ['userWorkOutData'],
    }),
    deleteWorkOutById:builder.query({
      query: args => {
       const {id} = args
        return {
          url: `user_workout/${id}`,
          method: 'DELETE',
        };
      },
      providesTags: ['userWorkOutData'],
    }),
  }),
});
export const {
 useCreateWorkOutQuery,
 useLazyCreateWorkOutQuery,
 useGetWorkOutQuery,
 useLazyGetWorkOutQuery,
 useGetWorkOutByIdQuery,
 useLazyGetWorkOutByIdQuery,
 useGetWorkOutByUserIdQuery,
 useLazyGetWorkOutByUserIdQuery,
 useUpdateWorkOutByIdQuery,
 useLazyUpdateWorkOutByIdQuery,
 useDeleteWorkOutByIdQuery,
 useLazyDeleteWorkOutByIdQuery
} = userWorkOut;