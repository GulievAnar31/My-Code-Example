import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from './Navbar';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

i18n.init({
  lng: 'en',
  resources: {
    en: {
      navbar: {
        main: 'Main',
        about: 'About',
      },
    },
  },
});

jest.mock('shared/ui/Link', () => ({
  LinkComponent: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe('Navbar', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Navbar />
      </I18nextProvider>
    );

    expect(getByText('Main')).toBeInTheDocument();
    expect(getByText('Main').closest('a')).toHaveAttribute('href', '/');
    
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('About').closest('a')).toHaveAttribute('href', '/about');
  });
});
