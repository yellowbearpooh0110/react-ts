import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

export default function App() {
  // const [test, setTest] = React.useState<() => number>();
  // React.useEffect(() => {
  //   console.log('test', test);
  //   return () => {
  //     console.log('END');
  //   };
  // }, [test]);

  React.useEffect(() => {
    // setTest((_prev) => _prev + 1);
    console.log('APP');
    // return () => {
    //   setTest((_prev) => _prev + 2);
    //   console.log('end');
    // };
  }, []);

  return (
    <div>
      {/* {test?.()} */}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* <button
        onClick={(event) => {
          event.preventDefault();
          setTest(() => () => 1);
        }}
      >
        Test
      </button> */}
      <Link to="/one">One</Link>
      <Link to="/two">Two</Link>
      <Outlet />
    </div>
  );
}
