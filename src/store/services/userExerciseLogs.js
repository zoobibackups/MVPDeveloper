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

export const userExerciseLogs = createApi({
  reducerPath: 'userExerciseLogs',
  baseQuery: baseQueryWithToken,
  tagTypes: ['userExerciseLogData'],
  endpoints: builder => ({
    getUserExerciseLogs: builder.query({
      query: args => { 
        return {
          url: `users_exercise_logs`,
          method: 'GET',

        };
      },
      providesTags: ['userExerciseLogData'],
    }),
    createUserExerciseLogs: builder.query({
      query: args => {
       const {data}  =args
        return {
          url: `users_exercise_logs`,
          method: 'POST',
          data:data
        };
      },
      providesTags: ['userExerciseLogData'],
    }),
    getUserExerciseLogsByUserId: builder.query({
      query: args => {
       const {id}  =args
        return {
          url: `users_exercise_logs/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['userExerciseLogData'],
    })
  }),
});
export const {
 useGetUserExerciseLogsByUserIdQuery,
 useLazyGetUserExerciseLogsByUserIdQuery,
 useGetUserExerciseLogsQuery,
 useLazyGetUserExerciseLogsQuery,
 useCreateUserExerciseLogsQuery,
 useLazyCreateUserExerciseLogsQuery,
} = userExerciseLogs;