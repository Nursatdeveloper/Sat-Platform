import React from 'react'
import { IQuestion } from '../types/IQuestion'
import AnswerBlock from './AnswerBlock'

const PracticeTestAnswers = () => {
    const questions: IQuestion[] = [
        { id: 1, number: 1, question: 'What is the main idea of the text', answerA: 'Answer A', answerB: 'Answer B', answerC: 'Answer C', answerD: 'Answer D'},
        { id: 2, number: 2, question: 'What is the meaning of word \'splendid', answerA: 'Answer A', answerB: 'Answer B', answerC: 'Answer C', answerD: 'Answer D'},
        { id: 3, number: 3, question: 'What is the main idea of the text', answerA: 'Answer A', answerB: 'Answer B', answerC: 'Answer C', answerD: 'Answer D'},
        { id: 4, number: 4, question: 'What is the main idea of the text', answerA: 'Answer A is the longest asnwer in this answer sheet ans might be even longer if i will write more', answerB: 'Answer B', answerC: 'Answer C', answerD: 'Answer D'},
        { id: 5, number: 5, question: 'What is the main idea of the text', answerA: 'Answer A', answerB: 'Answer B', answerC: 'Answer C', answerD: 'Answer D'},
        { id: 6, number: 6, question: 'What is the main idea of the text', answerA: 'Answer A', answerB: 'Answer B', answerC: 'Answer C', answerD: 'Answer D'},
    ]

  return (
    <div className='answer-viewer'>
        {questions.map((question, index) =>
            <AnswerBlock question={question} index={index} />
        )}

        <style jsx>
            {`
                .answer-viewer {
                    border:1px solid #e3e3e3;
                    width:35%;
                    height: 85vh;
                    overflow-y: scroll;
                }
            `}
        </style>
    </div>
  )
}

export default PracticeTestAnswers