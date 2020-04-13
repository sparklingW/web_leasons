import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const JSTopics = ({  }) => {
  return (
    <TopicWrapper>
      <TopicTitle>
        JavaScript
      </TopicTitle>
    </TopicWrapper>
  )
}

export default JSTopics;

const TopicWrapper = styled.div`
  display: flex;
`;
const TopicTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  font-size: 2.1em;
  font-style: bold;
  font-family: 'Maven Pro', sans-serif;
`;