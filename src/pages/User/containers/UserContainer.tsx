import { connect } from 'react-redux';
import UserForm from 'components/UserRegister';
import { submitUser } from 'store/actions/users';

const mapStateToProps = (state: any) => {
  return {
    userdata: state && state.user.info,
  };
};

export default connect(mapStateToProps, { submitUser })(UserForm);
