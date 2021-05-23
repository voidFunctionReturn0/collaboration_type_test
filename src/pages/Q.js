import React, { useState } from 'react';
import questionSet from 'res/question_set';

const Q = ({ match, history }) => {
    const total = useState(12)[0];
    const inputs = useState([])[0];
    const number = Number(match.params.number);
    const idx = number - 1;

    const onClick = (event) => {
        const input = Number(event.target.name);
        const nextUrl = (number < 12) ?
            '/q/' + (number+1)
            : '/loading_result';

        inputs[idx] = input;
        history.push(nextUrl);
        console.log(inputs);
    };

    return (
        <>
            <div>
                테스트 진행 상황 {number}/{total} 
            </div>
            <div>
                {questionSet[idx].question}
            </div>
            <div>
                이미지
            </div>
            <div>
                <button onClick={onClick} name="0">{questionSet[idx].answer1}</button>
                <button onClick={onClick} name="1">{questionSet[idx].answer2}</button>
            </div>
        </>
    );
};

export default Q;