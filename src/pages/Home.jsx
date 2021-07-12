import React from 'react';
import './home.css';
import SearchResults from '../components/searchResults';
import UserSearchBar from '../components/userSearchBar';

const Home = () => (
  <>
    <header className="home-header">
      <div className="header-logo">
        <img src="/git-1.png" alt="GitHub Logo" />
      </div>
      <h1 className="header-title">
        Encontre usuários no GitHub
      </h1>
      <div>
        <a
          className="header-link"
          href="https://github.com/"
          target="_blank"
          rel='noreferrer'
        >
          Ir para o GitHub
        </a>
      </div>
    </header>
    <main>
      <UserSearchBar />
      <SearchResults />
    </main>
  </>
);

export default Home;
