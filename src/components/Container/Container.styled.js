import styled from 'styled-components';
// Импорт картинок бекграунда
import {
    greyTablet, greyTablet2x, leavesTablet, leavesTablet2x, bananaTablet,
    bananaTablet2x, strawberryTablet, strawberryTablet2x,
    greyDesktop, greyDesktop2x, leavesDesktop, leavesDesktop2x, bananaDesktop,
    bananaDesktop2x, strawberryDesktop, strawberryDesktop2x
} from 'images';

export const Wrapper = styled.div`
    width: ${props => { return props.theme.breakpoints.mobile }};
    margin: 0 auto 0 auto;

    background-color: ${props => { return props.theme.colors.background }};
    /* background-color: azure; */

    // Медиазапрос для планшета
    @media screen and (min-width: ${props => { return props.theme.breakpoints.tablet }}) {
        width: ${props => { return props.theme.breakpoints.tablet }};
        height: 1024px;

        // Картинки для бекграунда планшета
        background-image: url(${strawberryTablet}), url(${bananaTablet}), url(${leavesTablet}), url(${greyTablet});
        background-color: ${props => { return props.theme.colors.background }};
        background-size: 308px, 491px, 602px, 521px;
        background-position-x: 440px, 280px, 0px, 250px;
        background-position-y: 560px, 600px, 500px, 480px;
        background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;

        // Медиазапрос retina для картинок бекграунда
        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
            background-size: 308px, 491px, 602px, 521px;
            background-image: url(${strawberryTablet2x}), url(${bananaTablet2x}), url(${leavesTablet2x}), url(${greyTablet2x});
        };
    };

    // Медиазапрос для десктопа
    @media screen and (min-width: ${props => { return props.theme.breakpoints.desktop }}) {
        width: ${props => { return props.theme.breakpoints.desktop }};
        height: 850px;
        justify-content: left;
        padding-top: 80px;

        border-bottom: none;

        // Картинки для бекграунда планшета
        background-image: url(${leavesDesktop}), url(${strawberryDesktop}), url(${bananaDesktop}), url(${greyDesktop});
        background-size: 746px, 362px, 498px, 603px;
        background-position-x: 350px, 930px, 800px, 680px;
        background-position-y: 0px, 480px, 0px, 35px;

        // Медиазапрос retina для картинок бекграунда
        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
            background-size: 746px, 362px, 498px, 603px;
            background-image: url(${leavesDesktop2x}), url(${strawberryDesktop2x}), url(${bananaDesktop2x}), url(${greyDesktop2x});
        };
    }
`;

export const HeaderWrapper = styled.div`
    width: ${props => { return props.theme.breakpoints.mobile }};
    height: 80px;
    padding-top: 18px;

    border-bottom: 2px solid ${props => { return props.theme.colors.headerUnderLine }};

    // Медиазапрос для планшета
    @media screen and (min-width: ${props => { return props.theme.breakpoints.tablet }}) {
        width: ${props => { return props.theme.breakpoints.tablet }};
    };

    // Медиазапрос для десктопа
    @media screen and (min-width: ${props => { return props.theme.breakpoints.desktop }}) {
        width: ${props => { return props.theme.breakpoints.desktop }};

        border-bottom: none;
    }
`;