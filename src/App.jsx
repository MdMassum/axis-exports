import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import Enquiry from "./pages/admin/Enquiry/Enquiry";
import AdminLogin from "./pages/admin/Login/AdminLogin";
import PrivateRoute from "./components/admin/PrivateRoute";
import CustEnquiry from "./pages/Enquiry";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import AdminLayout from "./pages/Layouts/AdminLayout";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
        }/>
        <Route
          path="/enquiry" element={
            <Layout>
              <CustEnquiry />
            </Layout>
        }/>
        <Route
          path="/product/:id" element={
            <Layout>
              <ProductDetails />
            </Layout>
        }/>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<PrivateRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/product" element={<Dashboard />} />
            <Route path="/admin/enquiries" element={<Enquiry />} />
          </Route>
        </Route>

        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
