import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import FaqPage from './pages/FaqPage'
import PartiesPage from './pages/PartiesPage'
import AboutPage from './pages/AboutPage'
import BookNowPage from './pages/BookNowPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="faqs" element={<FaqPage />} />
        <Route path="parties-and-hire" element={<PartiesPage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="book-now" element={<BookNowPage />} />
      </Route>
    </Routes>
  )
}
