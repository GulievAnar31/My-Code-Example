/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import { useTranslation } from 'react-i18next'
import React from 'react'

const assembleAnimation = keyframes`
  0% {
    clip-path: inset(50% 50% 50% 50%);
  }
  50% {
    clip-path: inset(0% 50% 0% 50%);
  }
  100% {
    clip-path: inset(0% 0% 0% 0%);
  }
`

const containerStyles = css`
    font-family: 'Arial', sans-serif;
    padding: 2rem;
    animation: ${assembleAnimation} 2s forwards;
    background-color: var(--primary-color);
    border-radius: 15px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 3rem auto;
`

const headingStyles = css`
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2a2a2a;
    border-bottom: 2px solid #2a2a2a;
    display: inline-block;
    padding-bottom: 0.3rem;
`

const listStyles = css`
    list-style-type: disc;
    margin-left: 2rem;
`

const itemStyles = css`
    margin: 0.5rem 0;
    color: #555;
`

const paragraphStyles = css`
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: #555;
`

const MainPage: React.FC = () => {
  const { t } = useTranslation('main')

  return (
        <div css={containerStyles}>
            <div css={headingStyles}>{t('greetings')}</div>
            <p css={paragraphStyles}>{t('i\'m')}</p>

            <p css={paragraphStyles}>{t('stack.title')}</p>
            <ul css={listStyles}>
                <li css={itemStyles}>{t('stack.html')}</li>
                <li css={itemStyles}>{t('stack.js')}.</li>
                <li css={itemStyles}>{t('stack.react')}</li>
                <li css={itemStyles}>{t('stack.redux')}</li>
                <li css={itemStyles}>{t('stack.vue')}</li>
                <li css={itemStyles}>{t('stack.ts')}</li>
                <li css={itemStyles}>{t('stack.webpack')}</li>
            </ul>

            <p css={paragraphStyles}>{t('description')}</p>
        </div>
  )
}

export default MainPage
