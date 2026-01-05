import React from 'react';
import { FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { FooterContainer, FooterContent, FooterSection, SocialIcons, Copyright } from './Footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <h4>Hayalimdeki Ev</h4>
                    <p>Doğal yaşamın zarafetini evinize getiriyoruz. Modern konfor ve rustik estetiğin buluşma noktası.</p>
                </FooterSection>

                <FooterSection>
                    <h4>Hızlı Linkler</h4>
                    <ul>
                        <li><a href="#">Hakkımızda</a></li>
                        <li><a href="#">Koleksiyonlar</a></li>
                        <li><a href="#">S.S.S.</a></li>
                        <li><a href="#">İletişim</a></li>
                    </ul>
                </FooterSection>

                <FooterSection>
                    <h4>Bizi Takip Edin</h4>
                    <p>En yeni tasarımlardan haberdar olun.</p>
                    <SocialIcons>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaPinterest /></a>
                    </SocialIcons>
                </FooterSection>
            </FooterContent>

            <Copyright>
                &copy; {new Date().getFullYear()} Hayalimdeki Ev. Tüm hakları saklıdır.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;
