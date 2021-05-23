import React from 'react';
import ShareThis from 'components/ShareThis';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <>
        <>
          <div>
            회사에서 살아남기
          </div>
          <div>
            나에게 딱 맞는 협업 유형 테스트
          </div>
          <div>
            <button><Link to="/q/1">시작하기</Link></button>
          </div>
        </>
        <footer>
          <ShareThis />
        </footer>
      </>
    );
};

export default Home;