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
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { CartModal } from '../widgets/cartModal/index.ts'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'

let persistor = persistStore(store)

const theme = createTheme({
  // typography: {
  //   fontFamily: 'Prompt, sans-serif',
  //   h6: {
  //     fontWeight: 400,
  //   },
  // },
});

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <CartModal />
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
        path: '/:productCategory/:productId',
        element: <ProductPage />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
