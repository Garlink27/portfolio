import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './pages/HomePage';

// Lazy loading for project detail page
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));

// Helper to scroll to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.requestAnimationFrame(() => {
      const target = hash ? document.querySelector(hash) : null;
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    });
  }, [pathname, hash]);

  return null;
};

// Fallback spinner while lazy loading components
const PageLoadingFallback: React.FC = () => {
  return (
    <div className="page-loading">
      <span className="loading-spinner" />
      <p>Cargando proyecto...</p>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app-shell">
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/proyecto/:id" element={<ProjectDetailPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
