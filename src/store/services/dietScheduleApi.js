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



export const dietScheduleApi = createApi({
  reducerPath: 'dietScheduleApi',
  baseQuery: baseQueryWithToken,
  tagTypes: ['dietScheduleData'],
  endpoints: builder => ({
    createDietSchedule:builder.query({
      query: args => {
       const {data} = args
        return {
          url: `diet_schedule`,
          method: 'POST',
          data:data
        };
      },
      providesTags: ['dietScheduleData'],
    }),
    getDietScheduleById: builder.query({
      query: args => { 
        const {id} = args
        return {
          url: `diet_schedule/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['dietScheduleData'],
    }),
    updateDietScheduleById: builder.query({
      query: args => {
       const {id,data}  =args
        return {
          url: `diet_schedule/${id}`,
          method: 'PATCH',
          data:data
        };
      },
      providesTags: ['dietScheduleData'],
    }),
    getDietScheduleByUserId:builder.query({
      query: args => {
       const {id} = args
        return {
          url: `diet_schedule/scheduleByUserId/${id}`,
          method: 'GET',
        };
      },
      pollingInterval: 9999999,
      providesTags: ['dietScheduleData'],
    }),
    generateDietScheduleByUserId:builder.query({
      query: args => {
       const {id} = args
        return {
          url: `diet_schedule/generate_diet_schedule_byUserId/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['dietScheduleData'],
    }),
  }),
});
export const {
  useCreateDietScheduleQuery,
  useLazyCreateDietScheduleQuery,
  useGetDietScheduleByIdQuery,
  useLazyGetDietScheduleByIdQuery,
  useGetDietScheduleByUserIdQuery,
  useLazyGetDietScheduleByUserIdQuery,
  useUpdateDietScheduleByIdQuery,
  useLazyUpdateDietScheduleByIdQuery,
  useLazyGenerateDietScheduleByUserIdQuery
} = dietScheduleApi;