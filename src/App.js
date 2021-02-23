import { Route } from 'react-router-dom'
import Footer from './app/components/js/Footer.js'
import Home from './app/components/js/Home.js'

function App() {
  return (
    < >
      <Route path='/' component={Home} exact={true} />
      <Footer />
    </>
  );
}

export default App;
