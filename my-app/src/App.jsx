import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "../src/styles/reset.css";
import "../src/styles/global.css";
import Home from "../src/pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProductDetail from "./pages/ProductDetail";
import PaymentPage from "./pages/PaymentPage";
import PayedCard from "./pages/PayedList";
import PayedDetailPage from "./pages/PayedDetailPage";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();
const theme = {
  color: {
    main: "#6B37FF",
    point: " #26b887",
    white: "#fff",
    gray1: "#F2F2F2",
    gray2: "#C4C4C4",
    gray3: "#767676",
    gray4: "#333333",
    black: "#000",
    red: "#fe6161",
  },
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={window.location.pathname || ""}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/productDetail/:pid" element={<ProductDetail />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/payedList" element={<PayedCard />} />
            <Route path="/payedDetail/:order_num" element={<PayedDetailPage />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
