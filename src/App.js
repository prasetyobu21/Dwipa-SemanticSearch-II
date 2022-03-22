import './App.css';
import axios from 'axios';
import ImageSearch from './pages/ImageSearch';
import TextSearch from './pages/TextSearch';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const App = () => {
  const [isUploaded, setIsUploaded] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const [data, setData] = useState([]);
  const [searchType, setSearchType] = useState(null);
  const [attraction, setAttraction] = useState('BorobudurTemple');

  var apiResult;

  const searchPharmacyTxt = () => {
    const fd = new FormData();
    fd.append('attraction', attraction);
    setLoading('Loading...');
    setData([]);
    setSearchType(null);
    axios.post('http://34.87.166.109/txt/searchPharmacy', fd).then(res => {
      apiResult = res.data.result.bindings;
      if (apiResult.length == 0) {
        setLoading('Data not found');
      } else {
        setData(apiResult);
        setLoading(null);
        setSearchType('Pharmacy nearby:');
      }
      console.log(apiResult);
    });
  };

  const searchPharmacy = () => {
    const fd = new FormData();
    fd.append('file', isUploaded);
    setLoading('Loading...');
    setData([]);
    setSearchType(null);
    axios.post('http://34.87.166.109/img/searchPharmacy', fd).then(res => {
      apiResult = res.data.result.bindings;
      if (apiResult.length == 0) {
        setLoading('Data not found');
      } else {
        setData(apiResult);
        setLoading(null);
        setSearchType('Pharmacy nearby:');
      }
      console.log(apiResult);
    });
  };

  const searchTransportationTxt = () => {
    const fd = new FormData();
    fd.append('attraction', attraction);
    setLoading('Loading...');
    setData([]);
    setSearchType(null);
    axios
      .post('http://34.87.166.109/txt/searchTransportation', fd)
      .then(res => {
        apiResult = res.data.result.bindings;
        if (apiResult.length == 0) {
          setLoading('Data not found');
        } else {
          setData(apiResult);
          setLoading(null);
          setSearchType('Transportation nearby:');
        }
        console.log(apiResult);
      });
  };

  const searchTransportation = () => {
    const fd = new FormData();
    fd.append('file', isUploaded);
    setLoading('Loading...');
    setData([]);
    setSearchType(null);
    axios
      .post('http://34.87.166.109/img/searchTransportation', fd)
      .then(res => {
        apiResult = res.data.result.bindings;
        if (apiResult.length == 0) {
          setLoading('Data not found');
        } else {
          setData(apiResult);
          setLoading(null);
          setSearchType('Transportation nearby:');
        }
        console.log(apiResult);
      });
  };

  const searchATMTxt = () => {
    const fd = new FormData();
    fd.append('attraction', attraction);
    setLoading('Loading...');
    setData([]);
    setSearchType(null);
    axios.post('http://34.87.166.109/txt/searchATM', fd).then(res => {
      apiResult = res.data.result.bindings;
      if (apiResult.length == 0) {
        setLoading('Data not found');
      } else {
        setData(apiResult);
        setLoading(null);
        setSearchType('ATM nearby:');
      }
      console.log(apiResult);
    });
  };

  const searchATM = () => {
    const fd = new FormData();
    fd.append('file', isUploaded);
    setLoading('Loading...');
    setData([]);
    setSearchType(null);
    axios.post('http://34.87.166.109/img/searchATM', fd).then(res => {
      apiResult = res.data.result.bindings;
      if (apiResult.length == 0) {
        setLoading('Data not found');
      } else {
        setData(apiResult);
        setLoading(null);
        setSearchType('ATM nearby:');
      }
      console.log(apiResult);
    });
  };

  const searchRestaurantTxt = () => {
    const fd = new FormData();
    fd.append('attraction', attraction);
    setLoading('Loading...');
    setData([]);
    setSearchType(null);
    axios.post('http://34.87.166.109/txt/searchRestaurant', fd).then(res => {
      apiResult = res.data.result.bindings;
      if (apiResult.length == 0) {
        setLoading('Data not found');
      } else {
        setData(apiResult);
        setLoading(null);
        setSearchType('Restaurant nearby:');
      }
      console.log(apiResult);
    });
  };

  const searchRestaurant = () => {
    const fd = new FormData();
    fd.append('file', isUploaded);
    setLoading('Loading...');
    setData([]);
    setSearchType(null);
    axios.post('http://34.87.166.109/img/searchRestaurant', fd).then(res => {
      apiResult = res.data.result.bindings;
      if (apiResult.length == 0) {
        setLoading('Data not found');
      } else {
        setData(apiResult);
        setLoading(null);
        setSearchType('Restaurant nearby:');
      }
      console.log(apiResult);
    });
  };

  const fileSelectorHandler = event => {
    setIsUploaded(event.target.files[0]);
  };

  const selectAttraction = attr => {
    setAttraction(attr);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Button className="m-3" href="search-by-image">
              Search by Image
            </Button>
            <Button className="m-3" href="search-by-text">
              Search by Text
            </Button>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/search-by-image">
            <ImageSearch
              fileSelectorHandler={fileSelectorHandler}
              searchPharmacy={searchPharmacy}
              searchTransportation={searchTransportation}
              searchATM={searchATM}
              searchRestaurant={searchRestaurant}
              data={data}
              loading={isLoading}
              searchType={searchType}
            />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/search-by-text">
            <TextSearch
              searchPharmacy={searchPharmacyTxt}
              searchTransportation={searchTransportationTxt}
              searchATM={searchATMTxt}
              searchRestaurant={searchRestaurantTxt}
              data={data}
              loading={isLoading}
              searchType={searchType}
              attraction={attraction}
              selectAttraction={selectAttraction}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
