import React, { useState } from 'react';
import QUESTION_SETS from 'const/QUESTION_SETS';

const Q = ({ match, history }) => {
    const QUESTION_COUNT = 12;
    const total = useState(QUESTION_COUNT)[0];
    const inputs = useState([])[0];
    const number = Number(match.params.number);
    const idx = number - 1;

    const onClick = (event) => {
        const input = event.target.name;
        const nextUrl = (number < QUESTION_COUNT) ?
            '/q/' + (number+1)
            : '/loading_result';

        inputs[idx] = input;
        history.push({
            pathname: nextUrl,
            state: { inputs: inputs}});
    };

    return (
        <>
            <div>
                테스트 진행 상황 {number}/{total} 
            </div>
            <div>
                {QUESTION_SETS[idx].question}
            </div>
            <div>
                이미지
            </div>
            <div>
                <button onClick={onClick} name={QUESTION_SETS[idx].answer1.type}>{QUESTION_SETS[idx].answer1.text}</button>
                <button onClick={onClick} name={QUESTION_SETS[idx].answer2.type}>{QUESTION_SETS[idx].answer2.text}</button>
            </div>
        </>
    );
};

export default Q;