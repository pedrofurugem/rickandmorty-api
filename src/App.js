import './App.css';
import {ListCharacter} from './components/ListCharacters/index'
import {ThemeProvider} from './Context-api/index'
import {ThemeTogglerButton} from './components/Themetogglerbutton'

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeTogglerButton/>
        <ListCharacter/>
      </ThemeProvider>
    </>
  );
}

export default App;
