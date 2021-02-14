import React from 'react'
import "./Avatar.scss"
import styled from 'styled-components'
var sizes = {
    "normal" : {height : "100px" , width : "100px"},
    "small" : {height : "40px" , width : "40px"},
    "big" : {height : "150px" , width : "150px"}
}




const Container = styled.div`
    height : ${props => props.type.height};
    width : ${props => props.type.width};
    padding : 2px;
    cursor : pointer;
    border-radius : 50%;
    border : 2px solid var(--lightBlueMain);
    transition: all 150ms ease-in;

`
const converter = (type)=> {
    if (type === "big") {
        return sizes.big
    }
    if (type === "small") {
        return sizes.small
    }
    if (type === "normal") {
        return sizes.normal
    }
}
function Avatar({type , image  , ...props}) {
    console.log(converter(type))
    return (
        
        <Container type = {converter(type)} className = "avatar">
            <img src={image} alt = "avatar "/>
        </Container>
    )
}

export default Avatar;
