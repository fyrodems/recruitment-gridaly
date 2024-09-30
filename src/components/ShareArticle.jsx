import { useState } from 'react';
import styled from 'styled-components';

const ShareArticle = ({ url }) => {
  const [copyStatus, setCopyStatus] = useState('Copy');
  const [showTooltip, setShowTooltip] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopyStatus('Copied!');
    setTimeout(() => setCopyStatus('Copy'), 5000);
  };

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
  <>
    <Heading>Share article</Heading>
    <Container>
      <ArticleWrapper>
        <ArticleUrl>{url}</ArticleUrl>
        <Button
          onClick={handleCopy}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {copyStatus}
          {showTooltip && copyStatus === 
            'Copy' && (
            <span className="tooltip">Click to copy</span>
          )}
        </Button>
      </ArticleWrapper>

      <ShareButtons>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button facebook"
        >
         <img src="https://enterprise.gridaly.com/frontend/facebook-brands-solid.svg" alt="facebook logo" />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button linkedin"
        >
          <img src="https://enterprise.gridaly.com/frontend/linkedin-brands-solid.svg" alt="linkedin logo" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button twitter"
        >
          <img src="https://enterprise.gridaly.com/frontend/x-twitter-brands-solid.svg" alt="x logo" />
        </a>
      </ShareButtons>
    </Container>
</>
  );
};

export default ShareArticle;

const Container = styled.div`
display: grid;
place-items: center;
gap: 10px;

@media (min-width: 600px) {
display: flex;
justify-content: center;
}
`
const Heading = styled.h1`
font-size: 1.25rem;
margin-bottom: 10px;
`
const ArticleWrapper = styled.div`
display: flex;
`
const ArticleUrl = styled.div`
background: #F2F2F2;
padding: 6px 12px;
border-radius: 8px;
color: #414141;
overflow: hidden; 
text-overflow: ellipsis;
max-width: 300px;
line-clamp: 1;
white-space: nowrap;
`

const Button = styled.button`
position: relative;
cursor: pointer;
background: #7354F9;
transition: 250ms;
outline: 0;
border: 0;
padding: 8px 15px;
border-radius: 8px;
color: #fff;

    &:hover {
        background: #9780FF;

        .tooltip {
            visibility: visible;
            opacity: 1;
        }
    }

    .tooltop {
    position: absolute;
    top: -30px;
    background-color: #555;
    color: #fff;
    padding: 5px;
    border-radius: 4px;
    font-size: 12px;
    }
`

const ShareButtons = styled.div`
margin-left: 15px;
display: flex;
gap: 8px;
    .share-button img {
        height: 30px;
        width: 30px;
    };

    .share-button.facebook img { 
        filter: invert(31%) sepia(73%) saturate(2993%) hue-rotate(205deg) brightness(100%) contrast(91%);
    }

    .share-button.linkedin img {
       filter: invert(30%) sepia(72%) saturate(6865%) hue-rotate(199deg) brightness(91%) contrast(92%);
    }
`