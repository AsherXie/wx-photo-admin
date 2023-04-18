import { Link, Outlet } from 'react-router-dom';
function App(props: { [key: string]: any }) {
  console.log(props);
  return (
    <h1>
      <Outlet />
    </h1>
  );
}

export default App;
