// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Componentes/Navbar";
import TextForm from "./Componentes/TextForm";
import React ,{useState} from 'react'
import Alert from "./Componentes/Alert";

function App() {
  const [mode, setmode] = useState('light'); //wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }


  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.background=`grey`;
      showAlert("Dark mode has been enabled","Success");
    }
    else{
      setmode('light');
      document.body.style.background=`white`;
      showAlert("Light mode has been enabled" ,"Success");

    }
  }
  return (
    <>
      <Navbar title="TextUtls" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert ={alert} />
      {/* <Navbar title ={3} aboutText="About Us"/> */}
      {/* <Navbar/> */}
      <div className="container">
      <TextForm  showAlert={showAlert} heading="Enter text to analyze "  mode={mode}/>
      {/* <About/> */}

      </div>
    </>
  );
}

export default App;
