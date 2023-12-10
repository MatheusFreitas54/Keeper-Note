import React from 'react';
import styled from 'styled-components';

const TagHeader = styled.header`
    background-color: #0046BB;
    margin: auto -16px;
    padding: 10px 32px 16px 46px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

    h1 {
        color: #fff;
        font-weight: 200;
    }
`

const Header: React.FC = () => {
    return (
        <TagHeader>
            <h1>Keeper Note</h1>
        </TagHeader>
    )
};

export default Header;