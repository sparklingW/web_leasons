import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import * as consts from '../store/consts';

const HeaderNavigation = ({  }) => {
    const dispatch = useDispatch();
    const topics = useSelector(state => state.articles_reducer.topics);
    let histoty = useHistory();

    const toArticle = (title) => {
        const _title = title.toLowerCase();
        dispatch({
            type: consts.REQUEST_ARTICLES,
            payload: {
                currentTopic: title,
            }
        });
        histoty.push(`/lessons/${_title}`);
        localStorage.setItem('currentTopic', _title);
    };
    
    return (
        <NavigationWrapper>
            {
                topics.map(({title}) => (
                    <NavElement onClick={() => toArticle(title)} key={title}>
                        {title}
                    </NavElement>
                ))
            }
        </NavigationWrapper>
    )
};

export default HeaderNavigation;

const NavigationWrapper = styled.nav`
    margin-left: 2.5rem;
`;

const NavElement = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2em;
    margin: 0 0.75rem;
    font-family: 'Work Sans', sans-serif;
    &:hover {
        text-decoration: underline;
    };
`;