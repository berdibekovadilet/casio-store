import Layout from "layout/Layout";
import Home from "pages/Home";
import NoMatch from "pages/NoMatch";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
