import React from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa'

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target='blank'
                                aria-label='Facebook' rel='noopener noreferrer'
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='blank'
                                aria-label='Instagram' rel='noopener noreferrer'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='blank'
                                aria-label='Twitter' rel='noopener noreferrer'>
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
