import {Link} from "react-router-dom";
import styled from 'styled-components';

export const SigninFormContainer = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: #335C67;
${'' /* linear-gradient(
  108deg,
  rgba(1, 147, 86,1) 0%,
  rgba(10, 201, 122, 1) 100%
) */}
`

export const SigninFormWrapper = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px){
  height: 80%;
}
`

export const SigninContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px){
  padding: 10px;
}`

// brings user back to home screen
export const SigninIcon = styled(Link)`
margin-left: 5px;
margin-top: 32px;
text-decoration: none;
color: #E7D8C9;
font-weight: 700;
font-size: 32px;
cursor: pointer;
text-align: center;

@media screen and (max-width: 480px){
  margin-left: 16px;
  margin-top: 8px;
}
`
export const SigninForm = styled.form`
background: #E09F3E;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

@media screen and (max-width: 400px){
  padding: 32px 32px;
}
`
export const SigninFormH1 = styled.h1`
margin-bottom: 20px;
font-size: 20px;
color: #fff;
font-weight: 400;
text-align: center;

`
export const SigninFormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`
export const SigninFormInput = styled.input`
padding: 16px 16px;
margin-bottom: 12px;
border: none;
border-radius: 4px;
background-color: #FFF3B0;
outline: none;
`
export const SigninFormButton = styled(Link)`
${'' /* background: #E09F3E;
border: none;
border-radius: 4px;
color: #EFEBCE;
cursor: pointer;
font-size: 20px;
padding: 16px 0;
text-align: center; */}
margin-left: 5px;
margin-top: 32px;
text-decoration: none;
color: #FFF3B0;
font-weight: 600;
font-size: 24px;
cursor: pointer;
text-align: center;

@media screen and (max-width: 480px){
  margin-left: 16px;
  margin-top: 8px;
}
`
export const SigninText = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`
export const SpanInfo = styled.span`
text-align: left;
margin-bottom: 24px;
color: red;
font-size: 14px;
`