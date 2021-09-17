import { connect } from "react-redux";
import SuccesPage from "../SuccesPage";

const mapStateToProps = (state: any) => {
  return {
    userdata: state.figma.user_data,
  };
};

export default connect(mapStateToProps, null)(SuccesPage);
// export default Home;
