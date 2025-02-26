import InteractiveView from './components/InteractiveView360';
import HomePage from './components/HomePage';
import ContentPage from './components/ContentPage';
import "/src/assets/css/App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InteractiveView />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/content" element={<ContentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
