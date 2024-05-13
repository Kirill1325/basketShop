import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store.ts'
import { Home } from '../pages/home/ui/Home.tsx'
import './App.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Shoes } from '../pages/shoes/ui/Shoes.tsx'
import { Clothes } from '../pages/clothes/ui/Clothes.tsx'
import { Accesories } from '../pages/accesories/ui/Accesories.tsx'
import { Header } from '../widgets/header/index.ts'
import { ProductPage } from '../pages/productPage/ui/ProductPage.tsx'

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/shoes',
        element: <Shoes />
      },
      {
        path: '/clothes',
        element: <Clothes />
      },
      {
        path: '/accesories',
        element: <Accesories />
      },
      {
        // TODO: dynamically change shoes/clothes/accesories
        path: '/products/:productId',
        element: <ProductPage />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
