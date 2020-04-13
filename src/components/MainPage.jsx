import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { siteTopics } from '../usefuldata';
import QuestionMark from './QuestionMark';

export default function MainPage({  }) {
  const history = useHistory();
  const handleLink = (link) => history.push(`/lessons/${link}`);
  return (
    <MainPageWrapper>
      <Title>
        Learn Web
        <QuestionMark 
          bottom={'2.5vw'}
          left={'22.3vh'}
        />
      </Title>
      <SiteMap>
          {
            siteTopics.map((el) => (
              <Link id={el.id}>
                <LinkText onClick={() => handleLink(el.id)}>
                  { el.title }
                </LinkText>
              </Link>
            ))
          }
      </SiteMap>
      <CreditsBlock>
        <Credits target='_blank' href='https://www.linkedin.com/in/ilya-velychko-43b9b7166'>
          Created by Ilya Velychko
        </Credits>
      </CreditsBlock>
    </MainPageWrapper>
  )
}

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Title = styled.div`
  position: relative;
  font-family: 'Fira Code', monospace;
  font-size: 2.1vmax;
  margin-bottom: 1.2rem;
`;
const SiteMap = styled.div`
  width: 11vw;
  display: flex;
  flex-direction: column;
`;
const Link = styled.span`
  border-bottom: 1px solid black;
  cursor: pointer;
  width: 100%;
  margin: 0.5vmax 0;
  padding-bottom: 0.4em;
`;
const LinkText = styled.span`
  font-family: 'Maven Pro', sans-serif;
  font-size: 1.2vmax;
`;
const CreditsBlock = styled.footer`
  border: 1px solid black;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Credits = styled.a`
  color: black;
  text-decoration: none;
  font-family: 'Indie Flower', cursive;
  font-size: 2.1vmax;
  &:visited {
    color: black;
  }
`;