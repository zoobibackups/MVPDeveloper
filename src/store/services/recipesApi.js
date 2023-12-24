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
    getSchedule: builder.query({
      query: args => { 
        return {
          url: `schedule`,
          method: 'GET',

        };
      },
      providesTags: ['recipesData'],
    }),
    getScheduleById: builder.query({
      query: args => {
       const {id}  =args
        return {
          url: `schedule/${id}`,
          method: 'GET',

        };
      },
      providesTags: ['scheduleData'],
    }),
    createSchedule:builder.query({
      query: args => {
       const {data}  =args
        return {
          url: `schedule`,
          method: 'POST',
          data:data

        };
      },
      providesTags: ['scheduleData'],
    }),
    getScheduleByUserId:builder.query({
      query: args => {
       const {id}  =args
        return {
          url: `schedule/scheduleByUserId/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['scheduleData'],
    }),
  }),
});
export const {
  useGetScheduleQuery,
  useLazyGetScheduleQuery,
  useCreateScheduleQuery,
  useLazyCreateScheduleQuery,
  useGetScheduleByIdQuery,
  useLazyGetScheduleByIdQuery,
  useGetScheduleByUserIdQuery,
  useLazyGetScheduleByUserIdQuery
} = recipesApi;