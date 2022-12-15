import './style.css'

function App(){
  let x = 5;
  let y = 6;
  let z = x + y;
  return (
    <div className="App">
      <h1> La somme</h1>
      <p>
        La somme de x + y = {z}
      </p>

    </div>
  );  
}

export default App;