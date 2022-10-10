import { ThemeProvider } from "styled-components";
import GlobalStyleDoRodolfo from "./config/GlobalStyle";
import AppRoutes from './routes/Routes';


const themes={
  dark:{
    color:'#f5f5f5',
    bgColor:'#333',
    primary:'#19def0',
  },
  light:{
    color:'#333',
    bgColor:'#f5f5f5',
    primary:'#6747b6e9',
  },

}

function App() {
  return (
    <div>
      <ThemeProvider theme={themes.light}>
         <GlobalStyleDoRodolfo/>
         <AppRoutes />
      </ThemeProvider>
     
    </div>
  );
}

export default App;
