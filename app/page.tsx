import PageBuilder from './components/PageBuilder';
import data from '../data.json';

export default function Home() {
  return (
    <div>
      <PageBuilder components={data} />
    </div>
  );
}
