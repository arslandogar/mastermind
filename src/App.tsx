import { Game } from '@/pages';
import { ThemeProvider } from '@/providers';

function App() {
  return (
    <ThemeProvider>
      <Game />
    </ThemeProvider>
  );
}

export default App;
