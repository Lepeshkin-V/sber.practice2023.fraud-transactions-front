import './App.css';
import Layout from './Layouts/Layout';
import { routes } from './routes';
import { RouteObject, useRoutes } from 'react-router-dom';

function App() {
  const routing: RouteObject[] = routes;
  const element = useRoutes(routing);

  return (
      <Layout>
        {element}
      </Layout>
  );
}

export default App;
