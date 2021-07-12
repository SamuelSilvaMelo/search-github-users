import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UserInformations = (props) => {
  const { userData, repositories } = props;
  return (
    <main className="user-main-page">
      <div className="user-main-page-div">
        <div className="user-information">
          <img src={userData.avatar_url} alt={`${userData.name} photo`}/>
          <h1>
            <span className="user-name">{userData.name}</span>
            <span className="user-login">{userData.login}</span>
          </h1>
          <a
            href={userData.html_url}
            target="_blank"
            rel='noreferrer'
          >
            Página do GitHub
          </a>
          <div className="user-bio">
            {userData.bio}
          </div>
          <div className="user-followers-and-following">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" fill="rgb(135,143,153)">
              <path fillRule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
            </svg>
            <span>{ userData.followers }</span>
            <span>followers</span>
            <span>.</span>
            <span>{ userData.following }</span>
            <span>following</span>
          </div>
        </div>
        <div className="user-information-repositories">
          <header>
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="30" width="30" fill="rgb(202,209,217)">
              <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
            </svg>
            <span>{ userData.public_repos }</span>
            Repositórios
          </header>
          <div className="repositories-list">
            { repositories.map((repository) => (
              <div key={repository.id }>
                <a
                  href={ repository.html_url }
                  target="_blank"
                  rel="noreferrer"
                >
                  { repository.name }
                </a>
                <span>{ repository.language }</span>
              </div>
            )) }
          </div>
        </div>
      </div>
    </main>
  );
}

const mapStateToprops = (state) => ({
  userData: state.userInformationsReducer.userData.data,
  repositories: state.userInformationsReducer.userRepositories.data,
});

UserInformations.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object).isRequired,
  repositories: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default connect(mapStateToprops)(UserInformations);
