import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListCard from './ListCard';

import {
  ListsGridStyle,
  EmptyListsGridStyle,
  ListsGridHeaderStyle,
  CardsGridStyle,
} from './styles/ListsStyles';

import { connect } from 'react-redux';
import { getLists } from '../redux/actions/list';

const Lists = ({ getLists, list: { lists } }) => {
  useEffect(() => {
    setTimeout(() => getLists(), 200);
  }, [getLists]);

  const [hoveredCard, setHoveredCard] = useState(null);

  const inAllListsTab = window.location.pathname.includes('lists');

  return (
    <Fragment>
      {lists ? (
        <ListsGridStyle fullWidth={inAllListsTab}>
          <ListsGridHeaderStyle>
            <h1>{!inAllListsTab ? `Recent` : `All`} Lists</h1>
            <p className="lead">
              <i className="fas fa-user" /> Your {!inAllListsTab && `newest`}{' '}
              lists:
            </p>
          </ListsGridHeaderStyle>
          <CardsGridStyle>
            {!inAllListsTab
              ? lists
                  .slice(0, 4)
                  .map((list) => (
                    <ListCard
                      key={list._id}
                      list={list}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                    />
                  ))
              : lists.map((list) => (
                  <ListCard
                    key={list._id}
                    list={list}
                    hoveredCard={hoveredCard}
                    setHoveredCard={setHoveredCard}
                  />
                ))}
          </CardsGridStyle>
          {!inAllListsTab && <Link to="/lists">See All Lists</Link>}
        </ListsGridStyle>
      ) : (
        <EmptyListsGridStyle>
          <h1> Lists</h1>
          <p>
            {' '}
            You don't have any lists. Go ahead and create one{' '}
            <Link to="/upload">here</Link>!
          </p>
        </EmptyListsGridStyle>
      )}
    </Fragment>
  );
};

Lists.propTypes = {
  lists: PropTypes.object,
};

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, { getLists })(Lists);
