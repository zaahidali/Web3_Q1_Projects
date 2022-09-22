import "./App.css";
import { Box, Stack, HStack, VStack, Text, Heading } from '@chakra-ui/react'
import Header from "./components/Header";
import Feature from "./components/Feature";

function App() {
  return <div className="App">
      <Header />
      <Feature />
  </div>;
}

export default App;
