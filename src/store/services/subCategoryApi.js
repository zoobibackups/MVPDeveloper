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
export const subCategoryApi = createApi({
  reducerPath: 'subCategoryApi',
  baseQuery: baseQueryWithToken,
  tagTypes: ['subCategoryData'],
  endpoints: builder => ({
    createSubCategory: builder.query({
      query: args => {
        const {data} = args ;
        return {
          url: `/subCategory`,
          method: 'POST',
          data:data
        };
      },
      providesTags: ['subCategoryData'],
    }),
    getSubCategories: builder.query({
      query: args => {
        return {
          url: `/subCategory`,
          method: 'GET',
        };
      },
      providesTags: ['subCategoryData'],
    }),
    getSubCategoriesById: builder.query({
      query: args => {
        const {id} = args ;
        return {
          url: `/subCategory/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['subCategoryData'],
    }),
    
    updateSubCategory:builder.query({
      query: args => {
        const {id,data} = args ;
        return {
          url: `/subCategory/${id}`,
          method: 'PATCH',
          data:data
        };
      },
      providesTags: ['subCategoryData'],
    }),

    deleteSubCategory:builder.query({
      query: args => {
        const {id} = args ;
        return {
          url: `/subCategory/${id}`,
          method: 'DELETE'
        };
      },
      providesTags: ['subCategoryData'],
    }),
    getSubCategoryByCategoryId:builder.query({
      query: args => {
        const {id} = args ;
        return {
          url: `/subCategory/subcategoryByCategoryId/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['subCategoryData'],
    }),
  }),
});
export const {
  useGetSubCategoriesByIdQuery,
  useLazyGetSubCategoriesByIdQuery,
  useCreateSubCategoryQuery,
  useUpdateSubCategoryQuery,
  useLazyUpdateSubCategoryQuery,
  useDeleteSubCategoryQuery,
  useLazyDeleteSubCategoryQuery,
  useGetSubCategoriesQuery,
  useLazyCreateSubCategoryQuery,
  useLazyGetSubCategoriesQuery,
  useGetSubCategoryByCategoryIdQuery,
  useLazyGetSubCategoryByCategoryIdQuery
} = subCategoryApi;