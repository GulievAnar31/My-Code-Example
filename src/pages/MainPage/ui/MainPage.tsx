/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import React from 'react';

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
`;

const containerStyles = css`
    font-family: 'Arial', sans-serif;
    padding: 2rem;
    animation: ${assembleAnimation} 2s forwards;
    background-color: #f7f9fc;
    border-radius: 15px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 3rem auto;
`;

const headingStyles = css`
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2a2a2a;
    border-bottom: 2px solid #2a2a2a;
    display: inline-block;
    padding-bottom: 0.3rem;
`;

const listStyles = css`
    list-style-type: disc;
    margin-left: 2rem;
`;

const itemStyles = css`
    margin: 0.5rem 0;
    color: #555;
`;

const paragraphStyles = css`
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: #555;
`;

const MainPage = () => {
    return (
        <div css={containerStyles}>
            <div css={headingStyles}>Привет! Меня зовут Анар</div>
            <p css={paragraphStyles}>Я профессиональный фронтенд-разработчик...</p>

            <p css={paragraphStyles}>Что входит в мой стек:</p>
            <ul css={listStyles}>
                <li css={itemStyles}>HTML5 & CSS3...</li>
                <li css={itemStyles}>JavaScript (ES6+) – для создания интерактивности и динамики.</li>
                <li css={itemStyles}>React – популярная библиотека для создания интерфейсов.</li>
                <li css={itemStyles}>Redux – для управления состоянием приложения.</li>
                <li css={itemStyles}>Vue.js & Vuex – для создания интерфейсов и управления состоянием.</li>
                <li css={itemStyles}>TypeScript – для добавления строгой типизации.</li>
                <li css={itemStyles}>Webpack & Babel – инструменты сборки и транспиляции.</li>
            </ul>

            <p css={paragraphStyles}>Я постоянно следую за новыми технологиями и инновациями в мире фронтенд-разработки, чтобы всегда быть на волне и предлагать клиентам лучшие решения. Если вам нужен опытный и надежный разработчик, буду рад помочь!</p>
        </div>
    )
}

export default MainPage;
