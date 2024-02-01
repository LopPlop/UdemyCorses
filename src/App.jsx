
import Header from './components/Header/Header'
import CoreConceptList from './components/CoreConceptList.jsx';
import CoreConceptExampleList from './components/CoreConceptExampleList.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main>
       <CoreConceptList />
       <CoreConceptExampleList />
      </main>
    </>
  );
}

export default App;
