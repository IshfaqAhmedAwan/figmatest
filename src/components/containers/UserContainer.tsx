import { connect } from "react-redux";
import GridForm from "components/UserRegister";
import { submitUser } from "components/actions/users"

const mapStateToProps = (state: any) => {
  return {
    userdata: state && state.figma.user_data,
  };
};

export default connect(mapStateToProps, { submitUser })(GridForm);
