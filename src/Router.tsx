import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Traking } from "./pages/Traking/Traking";
import { Item } from "./pages/Item/Item";
import { GlobalStyled } from "./style/GlobalStyled";
import { Header } from "./components/Header";
import { PageNotFound } from "./pages/pageNotFound/PageNotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyled />

      <Header />

      <Routes>
        <Route path="/" element={<Traking />} />
        <Route path="/items" element={<Item />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
