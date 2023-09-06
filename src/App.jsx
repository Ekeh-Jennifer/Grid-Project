import Grid from './Grid';
import "./App.css"
// solve the css, range utility and Grid component 

function App() {
  return (
    <div>
      <h1>Grid Project</h1>
       <Grid
      numRows={3}
      numCols={5}
    />
    </div>
   
  );
}

export default App;