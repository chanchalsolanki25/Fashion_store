import Footer from '../components/Footer';
import Sale from '../components/sale';
import Data from '../components/data';
import Deal from '../components/todaysDeal';
import NewCollection from '../components/new-collection';

export default function Home() {

  return (
    <div>
      <Sale />
      <NewCollection/>
      <Deal />
      <Data />
      <Footer />
    </div>
  )
}
