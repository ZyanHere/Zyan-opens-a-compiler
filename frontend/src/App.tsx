import { Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import Compiler from "./pages/Compiler";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
    <Toaster position="bottom-right" theme="dark"/>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/compiler/:urlId?" element={<Compiler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Button>test</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
