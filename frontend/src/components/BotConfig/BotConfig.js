import { useState } from 'react'
import { BotContainer } from './styles'
import {uniqueId} from 'lodash'
import Upload from '../Upload'
import api from '../../services/api'

const BotConfig = () => {
  let state ={
    uploadedFiles: [],
  }

  const  handleUpload = files => {
    
    state = { uploadedFiles: [files,
      files[0].name,
      files.id = uniqueId(),
    ]}
    

    processUpload(state.uploadedFiles)
  };

  /*const updateFile = (id,data) => {
    this.setState({uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
      return id === uploadedFile.id ? {...updateFile, ...data} : uploadedFile;
    })})
  }*/

  const processUpload = (uploadedFile) =>{
    const data = new FormData();
    console.log(uploadedFile)
    console.log(uploadedFile[0][0])
    data.append('file', uploadedFile[0][0], uploadedFile[1])

    api.post('/posts', data)
  }
  
  const [botName,setBotName] = useState("")
  const [versionBot, setVersionBot] = useState("")
  const [promptMessage, setPromtMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
     
    console.log(botName,typeof(botName))
    console.log(promptMessage, typeof(promptMessage))
    const arqName = state.uploadedFiles[1]
    const data = {
      name: botName,
      prompt: promptMessage,
      fileName: arqName
    }
    api.post('/bots',data)
  }
  return (
    
    <div>
        <BotContainer>
        <form onSubmit={handleSubmit}>
          <div className='testelado'>
          <div>
          <label className='chatName'>
            <span className='teste2'>Nome do chatbot</span>
            <input className='cima' type="text" name="botname" required placeholder="Nome do chatbot" onChange={(e) => setBotName(e.target.value)} value={botName}/>
          </label>
          </div>
          <div>
          <label className='chatVersion'>
            <span className='teste2'>Versão do chatbot</span>
            <select className='cima' name="selectVersion" onChange={(e) => setVersionBot(e.target.value)}>
            <option value="1"  >gpt-3.5-turbo</option>
            <option value="2" >gpt-4.0-turbo</option>
            <option value="3">davincci</option>
            </select>
          </label>
          </div>
          </div>
          <br/>
          <label className='chatPromt'>
            <span>Prompt</span><br/>
            <textarea className="prompt" type="textl" name = "instructions" required onChange={(e) => setPromtMessage(e.target.value)} value={promptMessage}/>
          </label>
          <label >
            <span className='chatVersion'>Documentos</span>
            <Upload className='Docs'onUpload ={handleUpload}/>
          </label>
          <div className='botao'>
            <button className="btnBack">Voltar</button>
            <button className="btn">Salvar chatbot</button>
          </div>
        </form>
        </BotContainer>
    </div>
  )
}

export default BotConfig