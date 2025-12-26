import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Layout from './Layout';
import Home from './pages/Home';

// Determine the GA Measurement ID:
// 1. Check for Vite environment variable VITE_GA_ID
// 2. Fallback to a placeholder (User needs to replace this if no env var is set)
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID || 'G-XXXXXXXXXX';

// Initialize GA4 once
ReactGA.initialize(GA_MEASUREMENT_ID);

function App() {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route change
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
