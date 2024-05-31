import logo from './logo.svg';
import './App.css';
import { Router } from '../node_modules/react-router-dom/dist/index';
import { Flex } from '../node_modules/@chakra-ui/layout/dist/flex';

function App() {
  return (
    <Router>
      <Flex direction='column' flex='1' minH='100vh'>
        <Header />
        <Flex direction='column' gap='16px' >

        </Flex>
      </Flex>
    </Router>
  );
}

export default App;
