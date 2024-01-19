import { useState } from "react";
import Chat from "../Chat/Chat";
import BotConfig from "../BotConfig/BotConfig";

const Tabs = () => {

    const [toggleState,setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index)
    }
    
  return (
    <div>
        <div className="container">

            <div className="bloc-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={()=>toggleTab(1)}>Base de informações</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={()=>toggleTab(2)}>Chat</div>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <BotConfig/>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <Chat/>
                </div>
            </div>
        </div>
    </div>

  )

}

export default Tabs