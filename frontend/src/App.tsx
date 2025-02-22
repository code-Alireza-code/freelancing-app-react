import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
