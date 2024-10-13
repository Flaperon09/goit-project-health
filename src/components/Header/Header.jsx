import { theme } from 'constants/theme'; // Импорт файла темизации
import { HeaderElement, LogRegElement, LogRegItem, Logo } from './Header.styled';

// Импорты картинок для логотипа
import logoMobile from 'images/logo-mobile.png';
import logoMobile2x from 'images/logo-mobile@2x.png';
import logoTablet from 'images/logo-tablet.png';
import logoTablet2x from 'images/logo-tablet@2x.png';
import logoDesktop from 'images/logo-desktop.png';
import logoDesktop2x from 'images/logo-desktop@2x.png';

export const Header = () => {
    return (
        <HeaderElement>
            <Logo>
                <source srcSet={`${logoMobile} 1x, ${logoMobile2x} 2x`} media={`(max-width: ${theme.breakpoints.tablet})`} />
                <source srcSet={`${logoTablet} 1x, ${logoTablet2x} 2x`} media={`(max-width: ${theme.breakpoints.desktop})`} />
                <source srcSet={`${logoDesktop} 1x, ${logoDesktop2x} 2x`} media={`(min-width: ${theme.breakpoints.desktop})`} />
                <img src={logoMobile} alt="logo" />
            </Logo>
            <LogRegElement>
                <LogRegItem>LOG IN</LogRegItem>
                <LogRegItem>REGISTRATION</LogRegItem>
            </LogRegElement>
        </HeaderElement>
    )
};