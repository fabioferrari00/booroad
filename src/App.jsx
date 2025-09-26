import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailTravelPage from "./pages/DetailTravelPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/travel/:id" element={<DetailTravelPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
