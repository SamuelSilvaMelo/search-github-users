import React from 'react';
import './user.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestUserInformations, requestUserRepositories } from '../redux/actions';
import Loading from '../components/loading';
import UserInformations from '../components/userInformations';

class UserPage extends React.Component {
  constructor(props) {
    super(props)

    const { match: { params: { id } } } = props;
 
    this.state = {
      userLogin: id,
    }
  }

  componentDidMount() {
    const { requestUserData, requestRepositories } = this.props;
    const { userLogin } = this.state;
    requestUserData(userLogin);
    requestRepositories(userLogin);
  }

  render() {
    const { isFetching, userData } = this.props;

    if (isFetching) {
      return (
        <Loading />
      )
    }

    if(userData.login) {
      return (
        <UserInformations />
      )
    }

    return (
      <div>Usuário não encontrado.</div>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.userInformationsReducer.userData.isFetching,
  userData: state.userInformationsReducer.userData.data,
});

const mapDispatchToProps = (dispatch) => ({
  requestUserData: (userLogin) => dispatch(requestUserInformations(userLogin)),
  requestRepositories: (userLogin) => dispatch(requestUserRepositories(userLogin)),
});

UserPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  }),
  requestUserData: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  userData: PropTypes.arrayOf(PropTypes.object),
  requestRepositories: PropTypes.func.isRequired,
};

UserPage.defaultProps = {
  userData: {
    data: {},
    isFetching: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
