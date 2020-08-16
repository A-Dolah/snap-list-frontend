import React from 'react';
import PropTypes from 'prop-types';

import { IngredientCardStyle } from './styles/CreateListStyles';

const IngredientCard = ({ ingredient, cardType, onClick }) => {
  return (
    <IngredientCardStyle
      background={cardType === 'picked' ? 'success' : 'primary'}
      color="light"
      onClick={onClick}
    >
      {ingredient}
    </IngredientCardStyle>
  );
};

IngredientCard.propTypes = {
  ingredient: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IngredientCard;
