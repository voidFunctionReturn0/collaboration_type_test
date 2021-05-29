import React from 'react';
import PropTypes from 'prop-types';
import { Container, Overlay, Contents, Title, Body } from 'styles/AllTypesModalStyle';
import TypeItem from 'components/TypeItem';
import DESCRIPTION_SETS from 'const/DESCRIPTION_SETS.json';

const AllTypesModal = ({ state, closeAllTypesModal }) => {
    console.log();


    return state ? (
        <Container>
            <Overlay onClick={event => closeAllTypesModal(event)} />
            <Contents>
                <Title>
                    전체 유형 보기
                    <button onClick={event => closeAllTypesModal(event)}>X</button>
                </Title>
                <Body>
                    {Object.values(DESCRIPTION_SETS).map(type => (
                        <TypeItem
                            imgSrc={type.animal}
                        />
                    ))}
                </Body>
            </Contents>
        </Container>
    ) : (
        <></>
    );
};

AllTypesModal.propTypes = {
    state: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default AllTypesModal;