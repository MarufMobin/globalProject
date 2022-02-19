import './App.css';
import Menu from './Components/Menu/Menu';
import SecondMenu from './Components/SecondMenu/SecondMenu';
import ParentComponentThirdMenu from './Components/ParentComponentThirdMenu/ParentComponentThirdMenu';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <SecondMenu></SecondMenu>
      <ParentComponentThirdMenu></ParentComponentThirdMenu>
    </div>
  );
}

export default App;
