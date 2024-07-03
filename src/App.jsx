import "./App.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        {/* //Here is I use the props// */}

        <Card title="Here I am adding my title through the props." description="And this is my desc. through the props."/>
        <Card title="card 2" description="card 2 desc"/>
        <Card title="card 3" description="card 3 desc"/>
        <Card title="card 4" description="card 4 desc"/>
        <Card title="card 5" description="card 5 desc"/>

      </div>
      <Footer />
    </>
  );
}

export default App;
