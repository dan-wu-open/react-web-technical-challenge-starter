import './scss/App.scss';
import Counter from './components/Counter';

// For part 2 - https://firebase.google.com/docs/firestore/query-data/listen
// import db from './db.js';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Hello, World!</h1>
      </header>
      <main>
        <p>You'll be building a very simple video chat room prototype.</p>
        <p>This challenge is split into 2 parts:</p>
        <ol>
          <li>Building the UI.</li>
          <li>Integrating with a database for real time updates.</li>
        </ol>
        <p>We're looking for a solution that demonstrates a few skills:</p>
        <ol>
          <li>Component driven UI</li>
          <li>State management best practices</li>
          <li>CSS knowledge</li>
          <li>Quickly learning new technologies</li>
        </ol>
        <p>Some reminders:</p>
        <ol>
          <li>Use Google or ANY resource you can find</li>
          <li>Communicate your thought process/decision making</li>
          <li>You're never penalized for asking questions</li>
          <li>
            <a href="https://reactjs.org/docs/getting-started.html">
              React docs
            </a>
          </li>
        </ol>
      </main>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
