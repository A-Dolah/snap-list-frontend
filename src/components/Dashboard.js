import React, { useEffect } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { FiPlus } from 'react-icons/fi';
import Lists from './Lists';
import { countIngredientsToBuy } from '../utils/countIngredients';

import {
  DashboardGridStyle,
  DashboardGridHeaderStyle,
  DashboardGridCardStyle,
  DashboardIllustrationStyle,
  DashboardAddLink,
} from './styles/DashboardStyles';
import { ListsGridContainerStyle } from './styles/ListsStyles';

import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../redux/actions/profile';

const Dashboard = ({
  getCurrentProfile,
  profile: { date },
  auth: { user },
  list: { lists },
  width,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <DashboardGridStyle>
      <DashboardGridHeaderStyle>
        <h1> Welcome {user && user.name}!</h1>
      </DashboardGridHeaderStyle>
      <DashboardGridCardStyle gridArea="a">
        Your shopping lists:
        <div>{lists ? lists.length : 0}</div>
      </DashboardGridCardStyle>
      <DashboardGridCardStyle gridArea="b">
        {lists
          ? `Items to buy:`
          : `You don't have any outstanding items to buy!`}
        <div>{countIngredientsToBuy(lists)}</div>
      </DashboardGridCardStyle>
      <DashboardGridCardStyle gridArea="c">
        You have been with us since <br />
        <Moment format="MMMM D, YYYY">{date}</Moment>
      </DashboardGridCardStyle>
      {width > 700 && (
        <DashboardIllustrationStyle
          className="dash-illustration"
          src="https://growwwkit.com/wp-content/uploads/2019/11/phonies-cov.gif"
          alt="illustration"
        />
      )}
      <DashboardAddLink to="/upload">
        <span>
          <FiPlus style={{ width: '90px', height: '90px', color: 'white' }} />
        </span>
      </DashboardAddLink>
      <ListsGridContainerStyle>
        <Lists />
      </ListsGridContainerStyle>
    </DashboardGridStyle>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  width: PropTypes.number,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  list: state.list,
  width: state.general.width,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount,
})(Dashboard);
