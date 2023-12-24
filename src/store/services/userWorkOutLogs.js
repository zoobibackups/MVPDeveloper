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
export const userWorkOutLogs = createApi({
  reducerPath: 'userWorkOutLogs',
  baseQuery: baseQueryWithToken,
  tagTypes: ['userWorkOutLogData'],
  endpoints: builder => ({
    createWorkOutLogs:builder.query({
      query: args => {
       const {data} = args
        return {
          url: `user_workout_logs`,
          method: 'POST',
          data:data
        };
      },
      providesTags: ['userWorkOutLogData'],
    }),
    updateWorkOutLogs:builder.query({
      query: args => {
       const {id,data} = args
        return {
          url: `user_workout_logs/${id}`,
          method: 'PATCH',
          data:data
        };
      },
      providesTags: ['userWorkOutLogData'],
    }),
    getWorkOutLogsByUserId:builder.query({
      query: args => {
       const {id} = args
        return {
          url: `user_workout_logs/byUserId/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['userWorkOutLogData'],
    }),
  }),
});
export const {
 useCreateWorkOutLogsQuery,
 useLazyCreateWorkOutLogsQuery,
 useGetWorkOutLogsByUserIdQuery,
 useLazyGetWorkOutLogsByUserIdQuery,
 useLazyUpdateWorkOutLogsQuery,
 useUpdateWorkOutLogsQuery
} = userWorkOutLogs;