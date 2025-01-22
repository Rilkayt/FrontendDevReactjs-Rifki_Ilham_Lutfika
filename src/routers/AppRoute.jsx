import { BrowserRouter, Route, Routes } from "react-router";
import ListData from "../views/ListData";
import DetailData from "../views/DetailData";

function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <div className="p-5">
          <Routes>
            <Route path="/" element={<ListData />} />
            <Route path="/detail/:id" element={<DetailData />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default AppRoute;
