import { Navigate, Route, Routes } from 'react-router'
import { Layout } from './componentes/Layout'
import { NoEncontrado } from './componentes/NoEncontrado'
import PaginaClase from './componentes/PaginaClase'
import PaginaClases from './componentes/PaginaClases'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to={"/clases"} />} />
        <Route path='clases'>
          <Route index element={<PaginaClases />} />
          <Route path=':id' element={<PaginaClase />} />
        </Route>
        <Route path='*' element={<NoEncontrado />} />
      </Route>
    </Routes>
  )
}

export default App
