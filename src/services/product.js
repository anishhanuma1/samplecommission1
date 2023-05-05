import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Product']
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: '/product',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation({
            query: (product) => ({
                url: `/product/${product?.id}`,
                method: 'PATCH',
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Product']
        })
    })
})

export const {
    useGetProductsQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation
} = productApi;