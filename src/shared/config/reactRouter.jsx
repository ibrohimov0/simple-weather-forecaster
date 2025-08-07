import { lazy, Suspense } from 'react'
import Loader from '../ui/loader'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('../../pages/HomePage'));

const routes = [
    {
        id: 1,
        path: "/*",
        Element: <HomePage />
    }
]



export function DataRouter() {
  return(
    <Routes>
        {routes.map(route => (
            <Route
                key={route.id} 
                path={route.path} 
                element={<Suspense fallback={<Loader/>}>{route.Element}</Suspense>}
            />
        ))}
    </Routes>
  )
}