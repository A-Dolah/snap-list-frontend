import React from 'react';
import PropTypes from 'prop-types';

import { ListItemStyle } from './styles/ListStyles';

import { connect } from 'react-redux';
import { toggleListIngredient } from '../redux/actions/list';

const ListItem = ({
  toggleListIngredient,
  ingredient: { ingredient, done, _id },
  hoveredItem,
  setHoveredItem,
  list,
}) => (
  <ListItemStyle
    onClick={async () => {
      await toggleListIngredient({ _id, ingredient, done });
    }}
    onMouseOver={() => {
      setHoveredItem(ingredient);
    }}
    onMouseLeave={() => {
      setHoveredItem(null);
    }}
    notHovered={hoveredItem && hoveredItem !== ingredient}
    done={done}
  >
    <p>{ingredient}</p>
  </ListItemStyle>
);

ListItem.propTypes = {
  toggleListIngredient: PropTypes.func.isRequired,
};

export default connect(null, { toggleListIngredient })(ListItem);
