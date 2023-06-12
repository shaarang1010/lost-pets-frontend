import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AppNavbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <AppNavbar
        title="Lost pets board"
        isLoggedIn={false}
        onLoginHandler={() => {}}
        onLogoutHandler={() => {}}
      />
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <h1>Vite + React</h1>
    </>
  );
}

export default App;
