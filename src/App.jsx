import { Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Topbar from './components/Topbar'
import HomePage from './pages/HomePage'
import BrandBookPage from './pages/BrandBookPage'
import EcosistemaPage from './pages/EcosistemaPage'
import FilosofiaPage from './pages/FilosofiaPage'
import MarcasPage from './pages/MarcasPage'
import CimovesPage from './pages/CimovesPage'
import OroConstructoresPage from './pages/OroConstructoresPage'
import RicaePage from './pages/RicaePage'
import NanotecksPage from './pages/NanotecksPage'
import TransformaloPage from './pages/TransformaloPage'
import LifemingPage from './pages/LifemingPage'
import SultingPage from './pages/SultingPage'
import FundesingPage from './pages/FundesingPage'
import HuespedPage from './pages/HuespedPage'
import ComducePage from './pages/ComducePage'

export default function App() {
  const location = useLocation()
  const isDashboard = location.pathname === '/ecosistema'

  return (
    <div>
      <Topbar minimal={isDashboard} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ecosistema" element={<EcosistemaPage />} />
          <Route path="/filosofia" element={<FilosofiaPage />} />
          <Route path="/brandbook" element={<BrandBookPage />} />
          <Route path="/marcas" element={<MarcasPage />} />
          <Route path="/marcas/cimoves" element={<CimovesPage />} />
          <Route path="/marcas/oro-constructores" element={<OroConstructoresPage />} />
          <Route path="/marcas/ricae" element={<RicaePage />} />
          <Route path="/marcas/nanotecks" element={<NanotecksPage />} />
          <Route path="/marcas/transformalo" element={<TransformaloPage />} />
          <Route path="/marcas/lifeming" element={<LifemingPage />} />
          <Route path="/marcas/sulting" element={<SultingPage />} />
          <Route path="/marcas/fundesing" element={<FundesingPage />} />
          <Route path="/marcas/huesped" element={<HuespedPage />} />
          <Route path="/marcas/comduce" element={<ComducePage />} />
<Route path="/marcas/:id" element={<MarcasPage />} />
        </Routes>
      </main>
    </div>
  )
}
