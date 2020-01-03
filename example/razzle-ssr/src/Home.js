import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import logo from './react.svg';
import './Home.css';

function Home() {
  const { t, i18n } = useTranslation(['translations', 'alternate']);

  return (
    <div className="Home">
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h2>{t('message.welcome')}</h2>
      </div>
      <div className="Home-intro">
        <Trans i18nKey="guideline">
          To get started, edit <code>src/App.js</code> or <code>src/Home.js</code> and save to
          reload.
        </Trans>
        <div>
          <button onClick={() => i18n.changeLanguage('en')}>Switch to EN</button>
          <button onClick={() => i18n.changeLanguage('de')}>Switch to DE</button>
          <button onClick={() => i18n.changeLanguage('es')}>Switch to ES</button>
        </div>
      </div>
      <ul className="Home-resources">
        <li>
          <a href="https://github.com/jaredpalmer/razzle">Docs</a>
        </li>
        <li>
          <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
        </li>
        <li>
          <a href="https://palmer.chat">Community Slack</a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
