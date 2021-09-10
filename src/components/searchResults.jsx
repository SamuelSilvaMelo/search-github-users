import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from './loading';

const SearchResults = (props) => {
  const { searching, wasSearched, totalResult, userList } = props

  const notResults = () => (
    <span className="nothing-researched">
      Nenhum resultado encontrado.
    </span>
  );

  const results = () => (
    <article className="user-list">
      { userList.map((user, index) => (
        <section key={ index }>
          <div>
            <img src={ user.avatar_url } alt={ user.login } />
            <Link to={ `user/${user.login}` }>
              <h4>{ `@${user.login}` }</h4>
            </Link>
          </div>
        </section>
      ))}
    </article>
  )

  if (searching) {
    return <Loading />
  }

  if(wasSearched && totalResult > 0) {
    return results()
  }

  if(wasSearched && totalResult === 0) {
    return notResults()
  }

  return (
    <span className="nothing-researched">
      Faça uma pesquisa!
    </span>
  )
}

const mapStateToProps = (state) => ({
  searching: state.searchUserReducer.isFetching,
  wasSearched: state.searchUserReducer.data.searchRequested,
  totalResult: state.searchUserReducer.data.total_count,
  userList: state.searchUserReducer.data.items,
});

SearchResults.propTypes = {
  searching: PropTypes.bool.isRequired,
  wasSearched: PropTypes.bool.isRequired,
  totalResult: PropTypes.number.isRequired,
  userList: PropTypes.arrayOf(PropTypes.object),
};

SearchResults.defaultProps = {
  usesrList: [],
}

export default connect(mapStateToProps)(SearchResults);
