import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const colorApi = createApi({
  reducerPath: "colorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/",
  }),
  endpoints: (builder) => ({
    colors: builder.query({
      query: () => "/colors",
    }),
    colorById: builder.query({
      query: (id) => `/color/${id}`,
    }),
    addColor: builder.mutation({
      query: (color) => ({
        url: "/colors",
        method: "POST",
        body: color,
      }),
    }),
    updateColor: builder.mutation({
      query: ({ id, ...color }) => ({
        url: `/color/${id}`,
        method: "PUT",
        body: color,
      }),
    }),
    deleteColor: builder.mutation({
      query: ({ id }) => ({
        url: `/color/${id}`,
        method: "DELETE"
      }),
    }),
  }),
});

export const {
    useColorsQuery,
    useColorByIdQuery,
    useAddColorMutation,
    useUpdateColorMutation,
    useDeleteColorMutation
} = colorApi;