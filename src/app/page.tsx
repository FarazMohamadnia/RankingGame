import Body from "@/components/layout/body/Body";
import Header from "@/components/layout/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="home-layout">
      <div className="home-response">
        <Header />
        <Body />
      </div>
    </div>
    

  );
}
