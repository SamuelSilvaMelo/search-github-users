import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchUserInput, requestUsersInformations } from '../redux/actions';

const UserSearchBar = (props) => {
  const { searchBtnDisabled, sendUserInput, requestAPI, query, quantity } = props;
  return(
    <form className="search-form">
      <fieldset>
        <label htmlFor="search-user-input">
          <input
            type="text"
            id="search-user-input"
            value={ query }
            name="query"
            placeholder="Digite um nome de usuário"
            onChange={ sendUserInput }
          />
        </label>
        <label>
          <input
            type="number"
            value={ quantity }
            name="quantity"
            min="1"
            max="20"
            onChange={ sendUserInput }
          />
        </label>
        <button
          type="button"
          disabled={ searchBtnDisabled }
          onClick={ () => requestAPI(query, quantity) }
        >
          Pesquisar
        </button>
      </fieldset>
    </form>
  );
};

const mapStateToProps = (state) => ({
  searchBtnDisabled: state.searchUserReducer.searchBtnDisabled,
  query: state.searchUserReducer.searchInput.query,
  quantity: state.searchUserReducer.searchInput.quantity,
});

const mapDispatchToProps = (dispatch) => ({
  sendUserInput: ({ target }) => dispatch(searchUserInput(target)),
  requestAPI: (userName, quantity) => dispatch(requestUsersInformations(userName, quantity)),
});

UserSearchBar.propTypes = {
  searchBtnDisabled: PropTypes.bool.isRequired,
  sendUserInput: PropTypes.func.isRequired,
  requestAPI: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchBar);
