import Menu from "./Menu";
import Stories from "./Stories";
import PrimeiroPost from "./PrimeiroPost";
import SegundoPost from "./SegundoPost";
import Aside from "./Aside";
import Footer from "./Footer";

console.log("oi");
function Container() {
  return (
    <div className="esquerda">
      <Stories />
      <PrimeiroPost />
      <SegundoPost />
    </div>
  );
}

function Main() {
  return (
    <main>
      <Container />
      <Aside />
    </main>
  );
}

export default function App() {
  return (
    <div>
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}
