import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function MyApp() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (e) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  return (
    <>
    <header className="App-header"><h1>Using State Only</h1></header>
      <Form theme={theme} />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={handleThemeChange}
        />
        Use dark mode
      </label>
    </>
  );
}

function Form({ theme }) {
  return (
    <Panel theme={theme} title="Welcome">
      <Button theme={theme}>Sign up</Button>
      <Button theme={theme}>Log in</Button>
    </Panel>
  );
}

function Panel({ theme, title, children }) {
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ theme, children }) {
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}