import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Definition from "./components/Definition";
function App() {
  return (
    <Container
      maxW={{
        xl: "container.lg",
        lg: "container.md",
        md: "container.sm",
      }}
    >
      <Navbar />
      <Searchbar />
    </Container>
  );
}

export default App;
