import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from '@chatscope/chat-ui-kit-react'
import { useState } from 'react'
import api from '../../services/api'

const Chat = () => {
  const [name,setName] = useState()
  const [prompt,setPrompt] = useState()
  const instructions = async () =>{
    api.get('/bots',(req,res)=>{
      const {name,prompt} = res.body;

      return setName(name),setPrompt(prompt)
    })
  }

  const API_KEY = "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"
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "Hello im chatbot",
      sender: "ChatGPT"
    }
  ])
  const handleSend = async(message) =>{
    const newMessage = {
      message: message,
      sender: "user",
      direction: 'outgoing',
    }

    const newMessages = [...messages, newMessage]; //"empilhar mensagens"

    setMessages(newMessages)// mudar state

    setTyping(true);

    
    await processMessageToChatGPT(newMessages,name,prompt);
  }

  async function processMessageToChatGPT(chatMessages,name,prompt) {
    
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if(messageObject.sender=== "ChatGPT"){
        role = 'assistant'
      } else {
        role = 'user'
      }
      return{ role: role, content: messageObject.message}
    });

    const systemMessage ={
      role: 'system',
      content: `Ao final de cada resposta pergunte: "Posso ajudar em algo mais?"`
    }

    const apiRequestBody = {
      'model': 'gpt-3.5-turbo',
      'messages': [
        systemMessage,
        ...apiMessages
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions",{
      method: 'POST',
      headers:{
        'Authorization': 'Bearer ' + API_KEY,
        'Content-Type': "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data)=>{
      return data.json()
    }).then((data)=>{
      setMessages(
        [...chatMessages,{
          message:data.choices[0].message.content,
          sender: 'ChatGPT'
        }]
      );
      setTyping(false);
    })
  }

  return (
    
    <div>
      <script onLoad={instructions}></script>
      <div style={{position: "relative", height:"500px", width:"1000px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList 
            scrollBehavior='smooth'
            typingIndicator = {typing ? <TypingIndicator content='ChatGPT está escrevendo'/>:null}
            >
              {messages.map((message,i)=>{
                return <Message key ={i} model={message}/>
              })}
            </MessageList>
            <MessageInput placeholder='Escreva a mensagem aqui' onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Chat