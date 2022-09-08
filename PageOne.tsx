import * as React from 'react';

export default () => {
  // const [test, setTest] = React.useState<number>(0);
  React.useEffect(() => {
    // setTest((_prev) => _prev + 1);
    console.log('start');
    // return () => {
    //   setTest((_prev) => _prev + 2);
    //   console.log('end');
    // };
  }, []);
  return <div>Page One</div>;
};
