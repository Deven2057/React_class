import Fotter from "./components/Fotter";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
function App() {
  

  return (
    <>
      <Navbar/>
      <div className="cards">
      <Card title="card 1" discription="welcome to my channel"/>
      <Card title="card 2" discription=" very good boy welcome to my channel"/>
      <Card title="card 3" discription="go to the man welcome to my channel"/>
      <Card title="card 4" discription="helloo come here welcome to my channel"/>

      </div>
      
      <Fotter/>
    </>
  )
}

export default App
