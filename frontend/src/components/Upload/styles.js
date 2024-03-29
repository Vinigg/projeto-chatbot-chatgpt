import styled, {css} from "styled-components";

const dragActive = css`
    border-color: #e57878;

`
const dragReject = css`
    border-color: #78e5d5;
`
export const DropContainer = styled.div.attrs({
    className: 'dropzone' 
})`
    border: 1px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;
    width: 1000px;
    margin: 0 0 50px 20px;
    transition: height 0.2s ease;

    ${props => (props.isDragActive && dragActive)};
    ${props => (props.isDragActive && dragReject)};
`;

const messageColors ={
    default: '#999',
    error: '#e57878',
    sucess: '#78e5d5'

}

export const UploadMessage = styled.p`
    display: flex;
    color: ${props => (messageColors[props.type || 'default'])};
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`;