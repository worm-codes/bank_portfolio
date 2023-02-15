import Layout from 'layout';
import HomePage from 'modules/HomePage';

export default function Home() {
  return (
    <Layout meta={{ title: 'Home' }}>
      <HomePage />
    </Layout>
  );
}
