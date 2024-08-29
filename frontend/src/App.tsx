import { useEffect } from 'react'
import './App.css'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { Button, MantineProvider } from '@mantine/core';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/');
      const data = await res.json();
      console.log(data);
    };
    
    void fetchData();
  }, []);

  return (
    <>
    <MantineProvider> 
      <Button color='#0B7285'>
        Hello world
      </Button>
    </MantineProvider>
    </>
  )
}

export default App
