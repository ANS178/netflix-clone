import './styles/App.css';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Starting Point</h1>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOG}/>
      <Row title='TRENDING NOW' fetchUrl={requests.fetchTrending}/>
      <Row title='TOP RATED' fetchUrl={requests.fetchTopRated}/>
      <Row title='ACTION' fetchUrl={requests.fetchActionMovies}/>
      <Row title='COMEDY' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='HORROR' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='ROMANCE' fetchUrl={requests.fetchRomanceMovies}/>
      {/* <Row title='DOCUMENTARIES' fetchUrl={requests.fetchDocumentaires}/> */}
    </div>
  );
}

export default App;
