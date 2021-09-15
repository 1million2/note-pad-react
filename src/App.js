import './App.css';
import Header from "./components/Header/Header"
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import EditPage from './components/Edit-page/Edit-page';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Route path="/content" component={Content} />
          <Route path="/editPage" component={EditPage} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;