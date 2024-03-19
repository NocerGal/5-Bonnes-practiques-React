import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4  h-screen">
      <h1>Tutos</h1>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2>Tutos in JSX</h2>
          <div className="flex gap-4">
            <LinkToTuto to="/jsx/useMemoAndCallBack">
              <p>UseMemo and useCallBack</p>
            </LinkToTuto>
            <LinkToTuto to="/jsx/useReducer">
              <p>useReducer</p>
            </LinkToTuto>

            {/* <LinkToTuto to="/jsx/conditionnalRendering">
              <p>Conditionnal rendering</p>
            </LinkToTuto>
            <LinkToTuto to="/jsx/forwardRef">
              <p>ForwardRef</p>
            </LinkToTuto>
            <LinkToTuto to="/jsx/useContext">
              <p>useContext</p>
            </LinkToTuto>
            <LinkToTuto to="/jsx/debouce">
              <p>Debounce</p>
            </LinkToTuto> */}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2>Tutos in TSX</h2>
          <div className="flex gap-4">
            <LinkToTuto to="/tsx/useMemoAndCallBack">
              <p>UseMemo and useCallBack</p>
            </LinkToTuto>
            {/* <LinkToTuto to="/tsx/conditionnalRendering">
              <p>Conditionnal rendering</p>
            </LinkToTuto>
            <LinkToTuto to="/tsx/forwardRef">
              <p>ForwardRef</p>
            </LinkToTuto>
            <LinkToTuto to="/tsx/useContext">
              <p>useContext</p>
            </LinkToTuto>
            <LinkToTuto to="/tsx/debouce">
              <p>Debounce</p>
            </LinkToTuto> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkToTuto({ children, ...props }) {
  return (
    <Link
      {...props}
      className="px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all"
    >
      {children}
    </Link>
  );
}

LinkToTuto.propTypes = {
  children: PropTypes.node.isRequired,
};
