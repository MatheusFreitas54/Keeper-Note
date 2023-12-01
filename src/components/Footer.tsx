import React from 'react';
import styled from 'styled-components';

const TagFooter = styled.footer`
    position: absolute;
    text-align: center;
    bottom: 0;
    width: 100%;
    height: 2.5 rem;

    p {
        color: #ccc;
    }
`;

const Footer: React.FC = () => {
    const year: number = new Date().getFullYear()

    return (
    <TagFooter>   
        <p>
            Copyright © {year}
        </p>
    </TagFooter>
  )
}

export default Footer;
