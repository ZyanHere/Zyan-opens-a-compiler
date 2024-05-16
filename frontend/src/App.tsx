import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import Compiler from "./pages/Compiler";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compile" element={<Compiler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Button>test</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
