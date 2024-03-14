import './App.css'
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Layouts from './components/Layouts/Layouts';
import ROUTES from './routes/routes';
import { Home, Movie } from './pages';
import { fetchData } from './functions';
import Endpoint from './utils/endpoints';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />}
          loader={() => fetchData(Endpoint.GENRES)} />
        <Route path={ROUTES.MOVIE} element={<Movie />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
