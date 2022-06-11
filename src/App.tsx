import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  FullBodyContainer,
  MainScrollableBody,
} from "./components/common/styles";

const App: React.FC = () => {
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <ThemeProvider theme={darkTheme}>
      <FullBodyContainer>
        <Header />
        <MainScrollableBody>
          <Content />
        </MainScrollableBody>
        <Footer />
      </FullBodyContainer>
    </ThemeProvider>
  );
};

export default App;
