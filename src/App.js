import logo from './logo.svg';
import './App.css';
import pokemon from "./pokemon.json";

function App() {
  return (
    <div
      style={{
        backgroundColor: '#f0f0f0',
        width: 800,
        paddingTop: "1rem",
        paddingBottom: "1rem",
       }}
      >
      <h1 className='title'>Pokemon Search✳️</h1>
{/* To Do Create  a table */}
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Attack</th>
            <th>Defense</th>
            <th>HP</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemon.slice(0,20).map(pokemon => (
              <tr
                key={[pokemon.id, pokemon.name.english]}
              >
              <td> {pokemon.name.english} </td>
              <td> { pokemon.type.join(', ')}</td>
              <td> {pokemon.base['Sp. Attack']} </td>
              <td>{ pokemon.base['Sp. Defense']}</td>
              <td>{ pokemon.base.HP}</td>
  
            </tr>
            ) )
          }

        </tbody>


      </table>

    </div>
  );
}

export default App;
