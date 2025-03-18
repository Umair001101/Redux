import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout'; 
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <Layout pages={
        <Routes>
          <Route index element={<Page1 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      } />
    </Router>
  );
}

export default App;
