import React, { useEffect, useState } from 'react';
import { LoaderWrapper, LogoText, SvgIcon } from './Loader.styles';

const Loader = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 2500); // 2.5 seconds splash screen
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <LoaderWrapper
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SvgIcon viewBox="0 0 100 100">
                <path d="M50 10 L90 50 L80 50 L80 90 L60 90 L60 60 L40 60 L40 90 L20 90 L20 50 L10 50 Z" />
            </SvgIcon>
            <LogoText
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                Hayalimdeki Ev
            </LogoText>
        </LoaderWrapper>
    );
};

export default Loader;
