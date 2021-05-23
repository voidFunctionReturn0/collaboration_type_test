import React from 'react';
import ShareThis from 'components/ShareThis';

const Result = ({match}) => {
    return (
        <>
            <div>
                나에게 딱 맞는 협업 유형은? {match.params.type} 
            </div>
            <div>
                <div>테스트 결과 제목</div>
                <div>이미지</div>
            </div>
            <div>
                테스트 결과 본문
            </div>
            <div>
                <button>전체 유형 보기</button>
            </div>
            <div>
                모이고 광고
            </div>
            <div>
                <ShareThis />
            </div>
            <div>
                <button>테스트 다시 하기</button>
            </div>
        </>
    );
};

export default Result;