
import Header from "./components/Header";
import Izba from "./components/Izba";
import Slogan from "./components/Slogan";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center pt-15">
      <Header />
      <Slogan />
      <Izba />
    
      <div className="h-screen"></div>
    </main>
  );
}
