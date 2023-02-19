import Layout from 'layout';
import { Schools } from 'modules';

export default function Home() {
  return (
    <Layout meta={{ title: 'Schools' }}>
      <Schools />
    </Layout>
  );
}
