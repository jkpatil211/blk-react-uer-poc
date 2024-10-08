import { HelmetProvider, Helmet } from 'react-helmet-async';
import { getAuthorHostUrl } from './services/url';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import { Container } from 'react-bootstrap';
import './App.css';
import Sitemap from './components/Sitemap/Sitemap';

function App() {
  return (
    <HelmetProvider>
      <Container fluid>
        <Helmet>
            {/* AEM Universal Editor :: CORE Library
              Loads the LATEST Universal Editor library
            */}
            <script
                src="https://universal-editor-service.experiencecloud.live/corslib/LATEST"
                async
            />
            <meta name="urn:adobe:aue:system:aemconnection" content={`aem:${getAuthorHostUrl()}`} data-rh="true" />
            <meta name="urn:adobe:aue:config:extensions" content="https://47679-workflowextension.adobeio-static.net" data-rh="true" />
        </Helmet>
        <Header />
        <Banner />
        <Sitemap />
      </Container>
    </HelmetProvider>
  );
}

export default App;
