import React from 'react';

const LoadingResult = ({ location, history }) => {
    /**
     * 1. E vs I
     * 2. J vs P
     * 3. T vs F
     * 4. N vs S
     * 5. P vs J
     * 6. I vs E
     * 7. S vs N
     * 8. F vs T
     * 9. I vs E
     * 10. T vs F
     * 11. N vs S
     * 12. J vs P
     */

    const scores = location.state.inputs;
    const loadingTime = 2000;

    const calculateScore = type => scores.filter(element => type === element).length;
    const makeMbti = scores => {     
        const scoreE = calculateScore('E');
        const scoreI = calculateScore('I');
        const scoreS = calculateScore('S');
        const scoreN = calculateScore('N');
        const scoreT = calculateScore('T');
        const scoreF = calculateScore('F');
        const scoreJ = calculateScore('J');
        const scoreP = calculateScore('P');
        
        const mbti =
            ((scoreE > scoreI) ? 'E' : 'I')
            + ((scoreS > scoreN) ? 'S' : 'N')
            + ((scoreT > scoreF) ? 'T' : 'F')
            + ((scoreJ > scoreP) ? 'J' : 'P');
        
        setTimeout(() => history.push(`/result/${mbti}`), loadingTime);      
    }
    
    makeMbti(scores);
    
    return (
        <>
            <div>
                나의 협업 유형 분석 중...
            </div>
            <div>
                이미지
            </div>
        </>
    );
};

export default LoadingResult;