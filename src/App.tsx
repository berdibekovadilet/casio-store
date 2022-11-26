import { Routes, Route } from "react-router-dom";
import {
  About,
  Blog,
  Cart,
  Contact,
  Delivery,
  Discounts,
  FAQ,
  Home,
  Login,
  NoMatch,
  Policy,
  Refund,
  Shop,
  Vacancy,
  Warranty,
} from "pages";
import Layout from "layout/Layout";
import ProductDetailPage from "pages/ProductDetailPage";
import {
  BlogDetailPage1,
  BlogDetailPage2,
  BlogDetailPage3,
} from "pages/BlogDetailPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetailPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />

          <Route path="about" element={<About />} />
          <Route path="policy" element={<Policy />} />
          <Route path="contact" element={<Contact />} />

          <Route path="discounts" element={<Discounts />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/1" element={<BlogDetailPage1 />} />
          <Route path="blog/2" element={<BlogDetailPage2 />} />
          <Route path="blog/3" element={<BlogDetailPage3 />} />

          <Route path="faq" element={<FAQ />} />

          <Route path="delivery" element={<Delivery />} />
          <Route path="warranty" element={<Warranty />} />
          <Route path="refund" element={<Refund />} />
          <Route path="vacancy" element={<Vacancy />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
