import { connect } from "react-redux";
import HomePage from "components/HomePage";

const mapStateToProps = (state: any) => {
  return {
    userdata: state.figma.user_data.action.payload,
  };
};

export default connect(mapStateToProps, null)(HomePage);
