import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Employee Name</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sumit</td>
            <td>23</td>
            <td>Male</td>
            <td>frontEnd</td>
          </tr>
          <tr>
            <td>Dhanur</td>
            <td>22</td>
            <td>Male</td>
            <td>frontEnd</td>
          </tr>
          <tr>
            <td>Husban</td>
            <td>21</td>
            <td>Male</td>
            <td>frontEnd</td>
          </tr>
          <tr>
            <td>Anjali</td>
            <td>23</td>
            <td>Female</td>
            <td>frontEnd</td>
          </tr>
          <tr>
            <td>Anshika</td>
            <td>23</td>
            <td>Female</td>
            <td>frontEnd</td>
          </tr>
          <tr>
            <td>Yogesh</td>
            <td>23</td>
            <td>Male</td>
            <td>frontEnd</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
