import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Signin from './components/SignIn/Signin';
import Signup from './components/SignUp/Signup';
import Browse_Series from './components/Browse_Page/Browse_Netflix/Browse_Series';
import Browse_Movies from './components/Browse_Page/Browse_Netflix/Browse_Movies';
import MyList from './components/My-List/MyList';

import { useStateValue } from './StateProvider/StateProvider';
import { auth } from './firebase';

// Series - Detailed Info
import DetailDocumentaries from './components/Browse_Page/Detail-Page/Series/DetailDocumentaries';
import DetailComedies from './components/Browse_Page/Detail-Page/Series/DetailComedies';
import DetailChildren from './components/Browse_Page/Detail-Page/Series/DetailChildren';
import DetailFeel from './components/Browse_Page/Detail-Page/Series/DetailFeel';
import DetailCrime from './components/Browse_Page/Detail-Page/Series/DetailCrime';

// Movies - Detailed Info
import DetailDrama from './components/Browse_Page/Detail-Page/Movies/DetailDrama';
import DetailThriller from './components/Browse_Page/Detail-Page/Movies/DetailThriller';
import DetailSuspense from './components/Browse_Page/Detail-Page/Movies/DetailSuspense';
import DetailRomance from './components/Browse_Page/Detail-Page/Movies/DetailRomance';
import DetailChildren2 from './components/Browse_Page/Detail-Page/Movies/DetailChildren2';

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);

  console.log('User is >>>', user);

  return (
    <Router>
      <div className="app">

        <Switch>

          <Route path="/browse/series/documentaries">
            <DetailDocumentaries />
          </Route>
          <Route path="/browse/series/comedies">
            <DetailComedies />
          </Route>
          <Route path="/browse/series/children">
            <DetailChildren />
          </Route>
          <Route path="/browse/series/crime">
            <DetailCrime />
          </Route>
          <Route path="/browse/series/feel-good">
            <DetailFeel />
          </Route>
          <Route exact path="/browse/series">
            <Browse_Series />
          </Route>

          <Route path="/browse/movies/suspense">
            <DetailSuspense />
          </Route>
          <Route path="/browse/movies/thriller">
            <DetailThriller />
          </Route>
          <Route path="/browse/movies/drama">
            <DetailDrama />
          </Route>
          <Route path="/browse/movies/romance">
            <DetailRomance />
          </Route>
          <Route path="/browse/movies/children">
            <DetailChildren2 />
          </Route>
          <Route exact path="/browse/movies">
            <Browse_Movies />
          </Route>

          <Route path="/browse/mylist">
            <MyList />
          </Route>

          <Route path="/signin">
            <Signin />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
