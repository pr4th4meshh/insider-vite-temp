import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../models/product.model";

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  endpoints: (builder) => ({
    products: builder.query<Product[], void>({
      query: () => "/moviess",
    }),
    product: builder.query<Product, string>({
      query: (userId) => `/moviess/${userId}`,
    }),
    // categories: builder.query<Product[], string>({
    //   query: (category) => `/movies/category?=${category}`
    // }),
    getMovies: builder.query<Product[], void>({
      query: (category) => `/moviess?category=${category}`
    })
  }),
});

export const {
  useProductsQuery,
  useProductQuery,
  useGetMoviesQuery,
  // useCategoriesQuery,
  // useAddProductMutation,
  // useUpdateProductMutation,
  // useDeleteProductMutation,
} = storeApi;
