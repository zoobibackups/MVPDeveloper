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
export const workOutApi = createApi({
  reducerPath: 'workOutApi',
  baseQuery: baseQueryWithToken,
  tagTypes: ['workOutData'],
  endpoints: builder => ({
    getCategories: builder.query({
      query: args => {
        return {
          url: `/category`,
          method: 'GET',

        };
      },
      providesTags: ['workOutData'],
    }),
    getSubCategoryById: builder.query({
      query: args => {
        const {id} = args
        return {
          url: `/subCategory/subcategoryByCategoryId/${id}`,
          method: 'GET',

        };
      },
      providesTags: ['workOutData'],
    }),
    getSubCategoryDataById:builder.query({
      query: args => {
        const {id} = args
        return {
          url:`/subCategory/${id}`,
          method:"GET"
        }
      }
    }),
    createCustomWorkOut: builder.query({
      query: args => {
        const data = {args}
        return{
          url:`/workout`,
          method:"POST",
          body:data
        }
      }
    })
  }),
});
export const {
  useGetCategoriesQuery,
  useGetSubCategoryByIdQuery,
  useLazyGetCategoriesQuery,
  useGetSubCategoryDataByIdQuery,
  useLazyCreateCustomWorkOutQuery
} = workOutApi;