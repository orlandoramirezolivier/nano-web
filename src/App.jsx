import { Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Topbar from './components/Topbar'
import HomePage from './pages/HomePage'
import BrandBookPage from './pages/BrandBookPage'
import EcosistemaPage from './pages/EcosistemaPage'
import FilosofiaPage from './pages/FilosofiaPage'

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
        </Routes>
      </main>
    </div>
  )
}
