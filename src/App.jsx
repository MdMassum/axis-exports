import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Sidebar from "./components/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import Enquiry from "./pages/admin/Enquiry/Enquiry";
import AdminLogin from "./pages/admin/Login/AdminLogin";
import PrivateRoute from "./components/admin/PrivateRoute";

function Layout() {
  const location = useLocation();

  const showFooter = ["/", "/about"];
  const showHeader = ["/"];
  const ProductDetailPage = location.pathname.startsWith("/product/");

  const showAdminSidebar = ["/admin/product", "/admin/enquiries"];

  return (
    <>
      {(showHeader.includes(location.pathname) || ProductDetailPage) && (
        <Header />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {showFooter.includes(location.pathname) && <Footer />}

      {/* admin routes */}
      {showAdminSidebar.includes(location.pathname) && <Sidebar />}
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<PrivateRoute />}>
          <Route path="/admin/product" element={<Dashboard />} />
          <Route path="/admin/enquiries" element={<Enquiry />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
