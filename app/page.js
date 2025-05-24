
import Cilj from "./components/Cilj";
import Header from "./components/Header";
import Izba from "./components/Izba";
import Products from "./components/Products";
import Slogan from "./components/Slogan";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center pt-15">
      <Header />
      <Slogan />
      <Izba />
      <Cilj />
      <Products />
      
      <div className="h-screen"></div>
    </main>
  );
}
