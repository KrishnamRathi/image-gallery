import React from 'react';
import Header from './components/Header';
import Home from './screens/Home';

function App() {
  const [keyword, setKeyword] = React.useState('');

  return (
    <div>
      <Header keyword={keyword} setKeyword={setKeyword} />
      <Home keyword={keyword}/>
    </div>
  );
}

export default App;
