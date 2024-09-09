import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Offer from "./components/Offer";
import UserInfo from "./components/UserInfo";

function App() {
  const name = "John";

  const offer = {
    price: 200,
    title: "Rakieta 23",
    condition: "nowa",
  };

  return (
    <main>
      <Menu />
      <UserInfo userName={name} age={30} />
      <h1>test app abc ....</h1>
      <Offer item={offer} isNew={true} />
      <Footer user={name} />
    </main>
  );
}

export default App;
/*

  MainHeader <- PascalCase (to stosujemy do nazw komponentow)
  mainHeader <- camelCase

*/

/*

function add(a, b) {
  const sum = a + b;

  return sum;
}

*/
