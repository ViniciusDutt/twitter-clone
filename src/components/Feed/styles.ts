import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Tab = styled.div`
    margin-top: 9px;
    padding: 12px 0 16px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    outline: 0;
    cursor: pointer;
    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);
    
    &:hover {
        background: var(--twitter-dark-hover);
    }
`;

export const Tweets = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`;