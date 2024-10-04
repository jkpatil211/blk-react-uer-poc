import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import Banner from './components/Banner/Banner';
import { Container, Row, Stack } from 'react-bootstrap';
import './App.css';
import Sitemap from './components/Sitemap/Sitemap';

function App() {
  return (
    <Container fluid className="">
      <Header />
      <Banner />
      <Sitemap />
    </Container>
    // <Container fluid className="">
    //     <Header />
    //     <Banner />
    //   {/* <Container>
    //     <Header />
    //     <Banner />
    //   </Container> */}
    //   {/* <Row>
    //     <Header />
    //   </Row> */}
      
    //   {/* <Header /> */}
    //   {/* <Banner /> */}
    // </Container>
  );
}

export default App;
