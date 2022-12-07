import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
function App() {
  const [getchar, setchar] = useState([]);
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (print) {
        console.log(print);
        setchar(print.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);
  return (
    <div className="App">
      <div className="main-section">
        <header className="navigation flex justify-content align-items">
          <div className="logo">
            <img src={require('./image/logo.jpg')} alt="" />
          </div>
          <div className="menu flex align-items mx">
            <li><a href="#">docs</a></li>
            <li><a href="#">about</a></li>
            <button>support us</button>
          </div>

        </header>
        <div className="main-title">
          <h1 className="title">the rick and morty API</h1>
        </div>
        <div className="p-20">
          <div className="intro">
            <div className="container">
              <div className="row">
                {
                  getchar.map((print) => {
                    return (
                      <div className="col-6">
                        <div className="main-block text-left">
                          <div className="blocks row">
                            <div className="col-5">
                              <div className="image-section">
                                <img src={print.image}></img>
                              </div>
                            </div>
                            <div className="col-7">
                              <div className="content-section">
                                <div className="content">
                                  <h2>{print.id} . {print.name}</h2>
                                  <span className="status"><img src="https://icons8.com/icon/85913/filled-circle" alt="" /> status - {print.status}</span><br />
                                  <h3 className="gender"><span className="grey">gender - </span>{print.gender}</h3>
                                  <span className="species"><span className="grey">specie</span> - {print.species}</span><br />
                                  <span className="url"><span className="grey">url</span> - {print.url}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-content-section">
            <div className="container">
              <div className="footer-content">
                <ul className='flex justify-content text-center'>
                  <li>
                    <h6 className="char">characters: 826</h6>
                  </li>
                  <li>
                    <h6 className="loc">location: 126</h6>
                  </li>
                  <li>
                    <h6 className="epi">episodes: 51</h6>
                  </li>
                </ul>
                <span className='server text-center'>server status</span>
              </div>
              <ul class="mt">
                <li>
                  <i class="bi bi-github"></i>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
