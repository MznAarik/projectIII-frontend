import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import CustomButton from "./components/UI/CustomButton"
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { TestComp } from './components/testFolder/TestComp'

function App() {
  const [count, setCount] = useState(0)
  const [apiData, setApiData] = useState(null);

  const Test = async () => {
    try {
      const response = await axios.get('api/test');
      setApiData(response.data)
    } catch (error) {
      console.error('API error', error);
    }
  }

  useEffect(() => {
    Test();
  }, [])
  return (
    <>
      <MantineProvider>
        <table border={1}>  {/* test table border */}
          {/* test components of useEffect */}
          <TestComp />
        </table>

        <table border={1}>
          <div >
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          {/* test api from laravel backend*/}
          <h1>{apiData ? apiData.message : "Loading..."}</h1>
          <div className="card">
            <CustomButton buttonText={`count is: ${count}`} onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </CustomButton>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </table>
      </MantineProvider>
    </>
  )
}

export default App
