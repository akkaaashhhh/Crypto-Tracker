import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Singlecoin from './pages/Singlecoin';
import {makeStyles} from "@material-ui/core"


function App() {
  const useStyles = makeStyles(()=>({
    App : {
      backgroundColor:"#14161a",
      color:"white",
      minHeight:"100vh"
    }
  }));
  
  const classes = useStyles()

  return (


    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
          <Route path='/' Component={Homepage} exact/>
          <Route path='/coins/:id' Component={Singlecoin}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
