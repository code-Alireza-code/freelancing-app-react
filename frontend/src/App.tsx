import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Owner from "./pages/OwnerDashboard";
import AppLayout from "./ui/AppLayout";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="">
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/owner" element={<AppLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
