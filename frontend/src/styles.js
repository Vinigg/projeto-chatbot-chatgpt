import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    *, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: flex;
  height: flex;
  background: #f1f1f1;
  margin: 100px auto 0;
  word-break: break-all;
  border: 1px solid rgba(0, 0, 0, 0.274);
}

.bloc-tabs {
  display: flex;
}
.tabs {

  padding: 15px;
  text-align: center;
  width: 50%;
  background: rgba(128, 128, 128, 0.075);
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.274);
  box-sizing: content-box;
  position: relative;
  outline: none;
}
.tabs:not(:last-child){
  border-right: 1px solid rgba(0, 0, 0, 0.274);
}

.active-tabs  {
  background: white;
  border-bottom: 6px solid rgb(88, 147, 241);
}

.active-tabs::before {
  content: "";
  display: flex;
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% + 2px);
  height: 5px;
  background: transparent;
  
}

button {
  border: none;
  
}
.content-tabs {
  
}
.content {
  background: white;
  padding: 20px;
  width: 1080px;
  height: 100%;
  display: none;
}
.content h2 {
  padding: 0px 0 5px 0px;
}
.content hr {
  width: 100px;
  height: 2px;
  background: #222;
  margin-bottom: 5px;
}
.content p {
  width: 100%;
  height: 100%;
}
.active-content {
  display: block;
}
`