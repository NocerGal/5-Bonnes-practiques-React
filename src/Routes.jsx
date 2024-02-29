import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import ConditionnalRenderingPage from './pages/tutos/ConditionnalRendering';
import ForWardRefPage from './pages/tutos/ForwardRef';
import DebouncePage from './pages/tutos/Debounce';
import UseMemoAndCallBackInTsxPage from './pages/tutos in tsx/UseMemoAndCallBack';
import ConditionnalRenderingInTsxPage from './pages/tutos in tsx/ConditionnalRendering';
import ForWardRefInTsxPage from './pages/tutos in tsx/ForwardRef';
import UseContextPage from './pages/tutos/UseContext';
import UseContextInTsxPage from './pages/tutos in tsx/UseContext';
import DebounceInTsxPage from './pages/tutos in tsx/Debounce';
import UseMemoAndCallBackPage from './pages/tutos/UseMemoCall_useCallBack/UseMemoAndCallBack';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/jsx/useMemoAndCallBack"
        element={<UseMemoAndCallBackPage />}
      />
      <Route
        path="/tsx/useMemoAndCallBack"
        element={<UseMemoAndCallBackInTsxPage />}
      />
      <Route
        path="/jsx/conditionnalRendering"
        element={<ConditionnalRenderingPage />}
      />
      <Route
        path="/tsx/conditionnalRendering"
        element={<ConditionnalRenderingInTsxPage />}
      />

      <Route path="/jsx/forwardRef" element={<ForWardRefPage />} />
      <Route path="/tsx/forwardRef" element={<ForWardRefInTsxPage />} />

      <Route path="/jsx/useContext" element={<UseContextPage />} />
      <Route path="/tsx/useContext" element={<UseContextInTsxPage />} />

      <Route path="/jsx/debouce" element={<DebouncePage />} />
      <Route path="/tsx/debouce" element={<DebounceInTsxPage />} />
    </Routes>
  );
}
