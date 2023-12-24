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
export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: baseQueryWithToken,
  tagTypes: ['categoryData'],
  endpoints: builder => ({
    getCategories: builder.query({
      query: args => {
        return {
          url: `/category`,
          method: 'GET',
        };
      },
      providesTags: ['categoryData'],
    }),
    getCategoriesById: builder.query({
      query: args => {
        const {id} = args ;
        return {
          url: `/category/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['categoryData'],
    }),
    createCategory: builder.query({
      query: args => {
        const {data} = args ;
        return {
          url: `/category`,
          method: 'POST',
          data:data
        };
      },
      providesTags: ['categoryData'],
    }),
    uploadCategoryImage: builder.query({
      query: args => {
        const {data} = args ;
        return {
          url: `/category/upload-category-image`,
          method: 'POST',
          data:data
        };
      },
      providesTags: ['categoryData'],
    }),
    updateCategory:builder.query({
      query: args => {
        const {id,data} = args ;
        return {
          url: `/category/${id}`,
          method: 'PATCH',
          data:data
        };
      },
      providesTags: ['categoryData'],
    }),
    deleteCategory:builder.query({
      query: args => {
        const {id} = args ;
        return {
          url: `/category/${id}`,
          method: 'DELETE'
        };
      },
      providesTags: ['categoryData'],
    }),
  }),
});
export const {
  useGetCategoriesByIdQuery,
  useLazyGetCategoriesByIdQuery,
  useCreateCategoryQuery,
  useUpdateCategoryQuery,
  useLazyUpdateCategoryQuery,
  useDeleteCategoryQuery,
  useUploadCategoryImageQuery,
  useLazyDeleteCategoryQuery,
  useLazyUploadCategoryImageQuery,
  useGetCategoriesQuery,
  useLazyCreateCategoryQuery,
  useLazyGetCategoriesQuery
} = categoryApi;