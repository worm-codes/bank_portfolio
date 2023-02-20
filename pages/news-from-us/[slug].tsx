import { useRouter } from 'next/router';

import { newsdata } from 'constant';
import Layout from 'layout';

export default function NewsDetailPage() {
  const {
    query: { slug },
  } = useRouter();
  const data = newsdata.find(item => item.id === Number(slug));

  return <Layout meta={{ title: `${data?.title} | Türkiye Finans` }}>{/* <NewsDetails data={data} /> */}</Layout>;
}
