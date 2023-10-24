import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from '../../../env';
const api = 'https://maps.googleapis.com/maps/api/geocode/json';
export const mapsApi = createApi({
  reducerPath: 'mapsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: api,
  }),
  tagTypes: ['mapsData'],
  endpoints: builder => ({
    searchGeoCodingByLatLong: builder.query({
      query: args => {
        const {lat, long, location_type, result_type} = args;
        return {
          url: `?latlng=${lat},${long}&location_type=${location_type}&key=${Config.MAP_API}`,
          method: 'GET',
        };
      },
      providesTags: ['mapsData'],
    }),
  }),
});
export const {
  useSearchGeoCodingByLatLongQuery,
  useLazySearchGeoCodingByLatLongQuery,
} = mapsApi;