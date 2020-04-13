import React from 'react';
import styled from 'styled-components';

const QuestionMark = ({ bottom, left }) => (
  <QM bottom={bottom} left={left}>
    <SVG>
      <svg data-name="Слой 1" id="Слой_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <title/>
        <path d="M64,85a2,2,0,0,1-2-2c0-12,5.79-18.16,10.9-23.63,4.17-4.46,7.76-8.31,7.76-14.69a16.66,16.66,0,0,0-33.32,0,2,2,0,0,1-4,0,20.66,20.66,0,0,1,41.32,0c0,8-4.49,12.77-8.83,17.42C71,67.25,66,72.59,66,83A2,2,0,0,1,64,85Z"/>
        <path d="M64,96.26a2.25,2.25,0,1,0,2.25,2.25A2.25,2.25,0,0,0,64,96.26Z"/>
        <path d="M64,128a64,64,0,1,1,64-64A64.07,64.07,0,0,1,64,128ZM64,4a60,60,0,1,0,60,60A60.07,60.07,0,0,0,64,4Z"/>
      </svg>
      <TooltipText>
        To proceed click at the one of the links below  
      </TooltipText>
    </SVG>
  </QM>
);

export default QuestionMark;

const QM = styled.div`
  position: absolute;
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  width: 16px;
  height: 16px;
`;
const SVG = styled.div`
  position: relative;
`;
const TooltipText = styled.span`
  font-size: 12px;
  visibility: hidden;
  width: 120px;
  border: 1px solid black;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: .2vh .3vw;

  /* Position the tooltip */
  position: absolute;
  bottom: -1vh;
  left: 1.5vw;
  z-index: 1;

  ${SVG}:hover & {
    visibility: visible;
  }
`;