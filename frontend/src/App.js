import GlobalStyle from './styles/global'

import { Container, Content} from './styles';
import Tabs from './components/Tabs/Tabs';
function App() {
  return (
    <div className="App">
      <h1>Bem vindos as configurações de chatbot WhatsApp</h1>
      <p>Aqui você pode criar e editar seu chatbot</p> <br/>
      <u><span className='listBack'>Votlar para listagem</span></u>
      <Container>
        <Content>
          <Tabs/>
        </Content>
        <GlobalStyle/>
      </Container>
    </div>
  );
}

export default App;
