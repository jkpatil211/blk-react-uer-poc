import { HelmetProvider, Helmet } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import { Container } from 'react-bootstrap';
import './App.css';
import Sitemap from './components/Sitemap/Sitemap';
import Teaser from './components/Teaser/Teaser';
import ContentFragment from './components/ContentFragment/ContentFragment';
import { getHostUrl } from './services/url';

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
            <meta name="urn:adobe:aue:system:aemconnection" content={`aem:${getHostUrl()}`} />
            <meta name="urn:adobe:aue:config:extensions" content="https://47679-workflowextension.adobeio-static.net" />
        </Helmet>
        <Header />
        <Banner />
        {process.env.REACT_APP_SHOW_TEASER && <ContentFragment fragmentName="teaser" path="POC/imageWithTextByPath" queryModelName="imageWithTextByPath" component={Teaser} />}
        <Sitemap />
      </Container>
    </HelmetProvider>
  );
}

export default App;
