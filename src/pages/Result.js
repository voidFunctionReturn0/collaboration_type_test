import React, { useState } from 'react';
import ShareThis from 'components/ShareThis';
import DESCRIPTION_SETS from 'const/DESCRIPTION_SETS';
import { Link } from 'react-router-dom';
import AllTypesModal from 'components/AllTypesModal';

const Result = ({ match, history }) => {
    const mbti = match.params.type;
    const result = DESCRIPTION_SETS[mbti];

    const [modalState, setModalState] = useState(false);
    const openAllTypesModal = () => setModalState(true);
    const closeAllTypesModal = event => {
        event.preventDefault();
        setModalState(false);
    }

    return (
        <>
            <div>
                나에게 딱 맞는 협업 유형은?
            </div>
            <div>
                <div>
                    <div>{result.title}</div>
                    <div>{result.animal}</div>
                </div>
                <div>이미지</div>
            </div>
            <div>
                <div>{result.ratio}</div>
                <div>{result.description}</div>
                <div>{result.celebrities}</div>
            </div>
            <div>
                <button onClick={openAllTypesModal}>전체 유형 보기</button>
            </div>
            <div>
                모이고 광고
            </div>
            <div>
                <ShareThis />
            </div>
            <div>
                <button><Link to="/">테스트 다시 하기</Link></button>
            </div>
            <AllTypesModal state={modalState} closeAllTypesModal={closeAllTypesModal} />
        </>
    );
};

export default Result;