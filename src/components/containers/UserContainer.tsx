import { connect } from "react-redux";
import GridForm from "../UserRegister";
import { submitUser } from "../actions/users";

const mapStateToProps = (state: any) => {
  return {
    userdata: state && state.figma.user_data,
  };
};

export default connect(mapStateToProps, { submitUser })(GridForm);
// export default Home;
