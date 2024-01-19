import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
    h1{
        font-weight: bold,
    }
    p{
        font-weight: bold
    }
    .listBack{
        color: #808080,

    }
    html,body, #root{
        height: 100%
    }
    
`