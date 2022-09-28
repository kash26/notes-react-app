import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from "./pages/NotePage";

function App() {
  return (
    // <Routes>
    //   <div className="App">
    //     <Header />
    //     <Route path="/" exact component={NotesListPage} />
    //   </div>
    // </Routes>

    <div className="container dark">
      <div className="app">
        <Header />
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route> */}
            <Route path="/" element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
