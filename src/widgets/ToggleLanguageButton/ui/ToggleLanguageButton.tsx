import React from 'react';
import { ButtonComponent } from 'shared/ui/Button';
import ChangeLanguageIcon from 'shared/assets/icons/changeLanguage.svg';
import { useTranslation } from 'react-i18next';
import styles from './ToggleLanguageButton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export const ToggleLanguageButton = () => {
    const { i18n } = useTranslation();

    const toggleTheme = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ButtonComponent className={classNames(styles.ToggleLanguageButton, {}, [])} onClick={toggleTheme}>
            <ChangeLanguageIcon />
        </ButtonComponent>
    );
}