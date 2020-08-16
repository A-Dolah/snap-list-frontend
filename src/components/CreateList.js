import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import IngredientCard from './IngredientCard';
import SubmitListModal from './SubmitListModal';

import { IngredientsStyle } from './styles/CreateListStyles';
import { StandardButtonStyle } from './styles/ButtonStyles';

import { connect } from 'react-redux';
import {
  addIngredientToSuggested,
  removeIngredientFromPicked,
} from '../redux/actions/ingredients';
import { toSubmitList } from '../redux/actions/list';

const CreateList = ({
  suggestedIngredients,
  pickedIngredients,
  cloudinaryUri,
  addIngredientToSuggested,
  removeIngredientFromPicked,
  toSubmitList,
  submittingList,
}) => {
  const onPick = (e) => {
    addIngredientToSuggested(e.target.textContent);
  };
  const onRemove = (e) => {
    removeIngredientFromPicked(e.target.textContent);
  };

  if (!cloudinaryUri) {
    return <Redirect to="upload" />;
  }

  return (
    <Fragment>
      {suggestedIngredients && (
        <Fragment>
          <IngredientsStyle>
            <h1>Suggested Ingredients:</h1>
            <div>
              {suggestedIngredients.map((ingredient, index) => (
                <IngredientCard
                  key={index}
                  ingredient={ingredient}
                  cardType="suggested"
                  onClick={onPick}
                />
              ))}
            </div>
          </IngredientsStyle>
          <IngredientsStyle>
            <h1>Picked Ingredients:</h1>
            {pickedIngredients ? (
              <div>
                {pickedIngredients.map((ingredient, index) => (
                  <IngredientCard
                    key={index}
                    ingredient={ingredient}
                    cardType="picked"
                    onClick={onRemove}
                  />
                ))}
              </div>
            ) : (
              <p>Click on a Suggested Ingredient above to pick it!</p>
            )}
          </IngredientsStyle>

          <StandardButtonStyle
            color="light"
            background="primary"
            disabled={!pickedIngredients}
            onClick={() => toSubmitList(true)}
          >
            Create List!
          </StandardButtonStyle>
          <SubmitListModal
            ariaHideApp={false}
            isOpen={submittingList}
            toSubmitList={toSubmitList}
            contentLabel="Submit List"
            closeTimeoutMS={200}
            className="modal"
          />
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  suggestedIngredients: state.ingredients.suggestedIngredients,
  pickedIngredients: state.ingredients.pickedIngredients,
  submittingList: state.list.submittingList,
  cloudinaryUri: state.image.cloudinaryUri,
});

CreateList.propTypes = {
  suggestedIngredients: PropTypes.array,
  pickedIngredients: PropTypes.array,
  cloudinaryUri: PropTypes.string,
};

export default connect(mapStateToProps, {
  addIngredientToSuggested,
  removeIngredientFromPicked,
  toSubmitList,
})(CreateList);
