import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

render(<App />, document.getElementById('app'))
