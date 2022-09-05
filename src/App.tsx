import PageLoader from 'components/PageLoader';
import { APP_ROUTES } from 'config/enum';
import React, { Suspense } from 'react';
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate
} from 'react-router-dom';

const HomePage = React.lazy(() => import('./container/Homepage'))
const ProductDetails = React.lazy(() => import('./container/ProductDetails'))
const SearchPage = React.lazy(() => import('./container/SearchPage'))


const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<HomePage />} />
          <Route path={APP_ROUTES.SEARCH} element={<SearchPage />} />
          <Route path={`${APP_ROUTES.PRODUCT}/:productId`} element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
};
export default App
