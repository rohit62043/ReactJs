import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// element is not a function. It's a variable that holds a JSX element.
const element = (
  <a href='https://google.com' target='_blank'>Click me to visit google</a>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  // App()
  element
)
