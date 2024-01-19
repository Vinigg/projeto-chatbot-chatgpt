import styled from "styled-components";

export const BotContainer = styled.div `

.testelado{
    display: flex;
}
textarea{
    height: 150px;
    width: 1000px;
    overflow-y: scroll;
    margin: 0 0 0 20px;
    text-align: justify;
    resize: none;
    }
.btn{
    background-color: rgb(85, 85, 199);
    color: white;
    height: 50px;
    width: 200px;
    border-radius: 10px;
    align-items: center;
    margin: 0 0 0 100px;
}
.btnBack{
    border: solid;
    border-width: 2px;
    border-color: rgb(85, 85, 199);
    background-color: #fff;
    color: rgb(85, 85, 199);
    height: 50px;
    width: 200px;
    border-radius: 10px;
    align-items: center;
    margin: 0 100px 0 0;
}

.chatName,.chatVersion,.chatPromt span{
    font-weight: bold;
    color: #5166ba;
    margin: 10px;
    width: 100%;
}

.cima{
    width: 300px;
    height: 30px;
    border-radius: 5px;
    margin: 3px 0 0 10px;
    
}
.chatVersion,.chatName {
   display: grid;
   margin: 5px;
   padding: 5px;
}
.botao{
    display: flex;
    justify-content: center;
    align-items: center;
}

`