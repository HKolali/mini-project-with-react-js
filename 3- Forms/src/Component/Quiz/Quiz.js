import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OptionItem from './OptionItem';
import './Quiz.css'

class Quiz extends Component {

    constructor(props) {
        super(props)

        this.questions = [
            {
                id: 1, question: "What is your current passion project?",
                options: [
                    { textOption: "project 1", isCurrect: true },
                    { textOption: "project 2", isCurrect: false },
                    { textOption: "project 3", isCurrect: false },
                    { textOption: "project 4", isCurrect: false }
                ]
            },
            {
                id: 2, question: "Do you have any hobbies?",
                options: [
                    { textOption: "hobbies 1", isCurrect: false },
                    { textOption: "hobbies 2", isCurrect: false },
                    { textOption: "hobbies 3", isCurrect: true },
                    { textOption: "hobbies 4", isCurrect: false }
                ]
            },
            {
                id: 3, question: "How do you like to spend your free time?",
                options: [
                    { textOption: "free time 1", isCurrect: false },
                    { textOption: "free time 2", isCurrect: false },
                    { textOption: "free time 3", isCurrect: false },
                    { textOption: "free time 4", isCurrect: true }
                ]
            },
            {
                id: 4, question: "What kind of music are you into? ",
                options: [
                    { textOption: "music 1", isCurrect: false },
                    { textOption: "music 2", isCurrect: true },
                    { textOption: "music 3", isCurrect: false },
                    { textOption: "music 4", isCurrect: false }
                ]
            }
        ]

        this.state = {
            step: 0,
            currectAnswer: 0,
            questionNumber: 1
        }
    }

    clickHandler(isCurrect) {
        if (isCurrect) {
            this.setState({
                step: this.state.step + 1,
                questionNumber: this.state.questionNumber + 1,
                currectAnswer: this.state.currectAnswer + 1
            })
        } else {
            this.setState({
                step: this.state.step + 1,
                questionNumber: this.state.questionNumber + 1
            })
        }
    }

    render() {
        return (
            <div className='quiz'>
                {this.state.questionNumber > this.questions.length ? (<span className="quiz__result">{`You answered ${this.state.currectAnswer} questions correctly`}</span>) : (
                    <div className='quiz'>
                        <h1 className="quiz__question-number">{`Question ${this.state.questionNumber}/${this.questions.length}`}</h1>
                        <div className="quiz__question">
                            <span className="quiz__question-text">{`${this.state.questionNumber}- ${this.questions[this.state.step].question}`}</span>
                            <div className="options">
                                {this.questions[this.state.step].options.map(option => <button onClick={() => this.clickHandler(option.isCurrect)}>{option.textOption}</button>)}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

Quiz.propTypes = {

};

export default Quiz;