import { Container, Divider, Grid } from '@mui/material'
import React, { FC, useState } from 'react'
import { IQuestion } from '../types/IQuestion';

interface AnswerBlockProps {
    question: IQuestion,
    index: number
}

const AnswerBlock:FC<AnswerBlockProps> = ({question, index}) => {

    const [answer, setAnswer] = useState<string>('');

    const selectAnswer = (letter: string) => {
        if(answer === letter) {
            setAnswer('');
            console.log(answer)
        } else {
            setAnswer(letter);
        }
    }

    const selected = {
        border: '1px solid green',
        borderRadius: '5px'
    }

  return (
    <Grid 
        key={index}
        sx={{
            p:2
        }}
    >
        <Grid container>
            <div className='number'>{question.number}.</div>
            <div className='question'>{question.question}</div>
        </Grid>
        <div 
            className='container' 
            onClick={() => selectAnswer('A')}
            style={ answer === 'A' ? selected : null}
        >
            <div className={ answer === 'A' ? 'circle-selected' : 'circle'}> A </div>
            <span>{question.answerA}</span>
        </div>
        <Divider />
        <div 
            className='container' 
            onClick={() => selectAnswer('B')}
            style={ answer === 'B' ? selected : null}
        >
            <div className={ answer === 'B' ? 'circle-selected' : 'circle'}> B </div>
            <span>{question.answerB}</span>
        </div>
        <Divider />
        <div 
            className='container' 
            onClick={() => selectAnswer('C')}
            style={ answer === 'C' ? selected : null}
        >
            <div className={ answer === 'C' ? 'circle-selected' : 'circle'}> C </div>
            <span>{question.answerC}</span>
        </div>
        <Divider />
        <div 
            className='container' 
            onClick={() => selectAnswer('D')}
            style={ answer === 'D' ? selected : null}
        >
            <div className={ answer === 'D' ? 'circle-selected' : 'circle'}> D </div>
            <span>{question.answerD}</span>
        </div>
        <style jsx>
            {`
                .circle {
                    border-radius: 50%;
                    border: 2px solid #4d4d4d;
                    min-width:22px;
                    height:22px;
                    text-align:center;
                    margin-right:10px;
                    color: #4d4d4d;
                    font-weight: 600;
                    font-size: 12px;
                }
                .circle-selected {
                    border-radius: 50%;
                    border: 2px solid green;
                    min-width:22px;
                    height:22px;
                    text-align:center;
                    margin-right:10px;
                    color: white;
                    background-color:green;
                    font-weight: 600;
                    font-size: 12px;
                }
                .container {
                    padding:10px;
                    font-size: 15px;
                    display: flex;
                    cursor:pointer;
                    font-size: 13px;
                }

                .question{
                    margin-bottom:10px;
                    font-size: 14px;
                }

                .number {
                    font-size: 14px;
                }
            `}
        </style>
    </Grid>
  )
}

export default AnswerBlock