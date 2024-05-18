import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { productType } from "../model/types";

export const productApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/',
    }),
    endpoints: (build) => ({
        getAllProducts: build.query<productType[], void>({
            query: () => ({ url: '/products' })
        }),
        getProductsById: build.query<productType, string | undefined>({
            query: (id) => ({ url: `/products/${id}` })
        }),

        addToWishlist: build.mutation<productType, productType>({
            query(body) {
                return {
                    url: `/wishlist`,
                    method: 'POST',
                    body,
                }
            }
        }),
        deleteFromWishlist: build.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `wishlist/${id}`,
                    method: 'DELETE',
                }
            },
        }),
    })
})