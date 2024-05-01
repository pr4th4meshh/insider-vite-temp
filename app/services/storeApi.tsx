import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../models/product.model";
import { BACKEND_API_SERVER } from "../config/env";

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_API_SERVER }),
  endpoints: (builder) => ({
    products: builder.query<Product[], void>({
      query: () => "/moviess", 
    }),
    product: builder.query<Product, string>({
      query: (userId) => `/moviess/${userId}`,
    }),
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
