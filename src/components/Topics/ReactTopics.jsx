import React from 'react';
import styled from 'styled-components';

const ReactTopics = ({  }) => {
  return (
    <TopicWrapper>
      <TopicTitle>
        React
      </TopicTitle>
    </TopicWrapper>
  )
};

export default ReactTopics;

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