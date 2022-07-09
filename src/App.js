import logo from './logo.svg';
import './App.css';

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
          <tr>
            <td>Bulbasaur</td>
            <td>Grass/Poison</td>
            <td>45</td>
            <td>49</td>
            <td>45</td>

          </tr>
        </tbody>


      </table>

    </div>
  );
}

export default App;
