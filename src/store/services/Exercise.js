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

export const userExercise = createApi({
  reducerPath: 'userExercise',
  baseQuery: baseQueryWithToken,
  tagTypes: ['userExerciseData'],
  endpoints: builder => ({
    createUserExercise: builder.query({
      query: args => { 
        const {data} = args;
        return {
          url: `exercise`,
          method: 'POST',
          data:data

        };
      },
      providesTags: ['userExerciseData'],
    }),
    getUserExercise: builder.query({
      query: args => {
       
        return {
          url: `exercise`,
          method: 'GET',
        
        };
      },
      providesTags: ['userExerciseData'],
    }),
    getUserExerciseByUserId: builder.query({
      query: args => {
       const {id}  =args
        return {
          url: `exercise/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['userExerciseData'],
    }),
    updateUserExercise:builder.query({
      query: args => {
       const {id, data}  =args
        return {
          url: `exercise/${id}`,
          method: 'PATCH',
          data:data
        };
      },
      providesTags: ['userExerciseData'],
    }),
    deleteUserExercise:builder.query({
      query: args => {
       const {id}  =args
        return {
          url: `exercise/${id}`,
          method: 'DELETE',
        };
      },
      providesTags: ['userExerciseData'],
    }),
  }),
});
export const {
 useCreateUserExerciseQuery,
 useLazyCreateUserExerciseQuery,
 useDeleteUserExerciseQuery,
 useLazyDeleteUserExerciseQuery,
 useUpdateUserExerciseQuery,
 useLazyUpdateUserExerciseQuery,
 useGetUserExerciseByUserIdQuery,
 useLazyGetUserExerciseByUserIdQuery,
 useGetUserExerciseQuery,
 useLazyGetUserExerciseQuery,
} = userExercise;