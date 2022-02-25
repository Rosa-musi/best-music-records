import './App.css';
import styled from 'styled-components'
import CardTable from './components/CardTable/CardTable'
import {albums} from './utils/data'

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

function App() {
  return (
    <MainDiv>
      {albums.map((album, i) => {
        return <CardTable key={i} {...album}/>
      })}
      
    </MainDiv>
  );
}

export default App;
