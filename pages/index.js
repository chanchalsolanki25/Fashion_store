import Footer from '../components/Footer';
import Sale from '../components/sale';
import Data from '../components/data';
import Deal from '../components/todaysDeal';

export default function Home() {

  return (
    <div>
      <Sale />
      <Deal />
      <Data />
      <Footer />
    </div>
  )
}
