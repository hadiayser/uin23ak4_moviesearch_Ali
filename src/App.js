import './css/main.css';
import Layout from './components/Layout';
import MovieCard from './components/MovieCard';
import PageHeading from './components/PageHeading';

function App() {
  return (
    <Layout>
      <PageHeading/>
      <MovieCard/>
    </Layout>
  );
}

export default App;
