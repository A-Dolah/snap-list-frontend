import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ListCardStyles } from './styles/ListsStyles';

const ListCard = ({ list, hoveredCard, setHoveredCard }) => (
  <ListCardStyles notHovered={hoveredCard && hoveredCard !== list.name}>
    <Link
      to={`/lists/${list._id}`}
      onMouseOver={() => {
        setHoveredCard(list.name);
      }}
      onMouseLeave={() => {
        setHoveredCard(null);
      }}
    >
      <h4>{list.name}</h4>
      <p>
        Created on <Moment format="YYYY/MM/DD">{list.date}</Moment>
      </p>
    </Link>
  </ListCardStyles>
);

ListCard.propTypes = {
  list: PropTypes.object.isRequired,
};

export default ListCard;
