import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';
import Widget from '../src/components/Widget';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Responda o Quiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>O Guia do Mochileiro das Galaxias</h1>
          </Widget.Header>
          <Widget.Content>
            Texto
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}
