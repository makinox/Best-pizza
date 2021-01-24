import React from 'react';
import {FooterContainer, FooterContainerDetail} from './styled';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import PizzaIcon from '../../assets/Best Pizza.png';

export default function Footer() {
  return (
    <FooterContainer data-cy="footer">
      <FooterContainerDetail>
        <a href="https://facebook.com/">
          <FaFacebookSquare fontSize={25} />
        </a>
        <a href="https://instagram.com/">
          <FaInstagram fontSize={25} />
        </a>
      </FooterContainerDetail>
      <FooterContainerDetail>
        <img src={PizzaIcon} alt="Best pizza footer icon" />
      </FooterContainerDetail>
    </FooterContainer>
  );
}
