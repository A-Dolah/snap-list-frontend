import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from './layout/Spinner';
import ListItem from './ListItem';

import { ListStyle, ListItemsGridStyle } from './styles/ListStyles';
import { StandardButtonStyle } from './styles/ButtonStyles';

import { connect } from 'react-redux';
import { getList, removeList, updateList } from '../redux/actions/list';

const List = ({
  getList,
  removeList,
  updateList,
  list: { list, loading },
  match,
}) => {
  const history = useHistory();
  const routeChange = () => {
    let path = '/dashboard';
    history.push(path);
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    getList(match.params.id);
  }, [getList, match.params.id]);

  useEffect(() => {
    return () => list && updateList(list);
  }, [list]);

  return loading || list === null ? (
    <Spinner />
  ) : (
    <ListStyle>
      <h1>{list.name}</h1>
      <img
        src={
          list.image_url
            ? list.image_url
            : 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80'
        }
        alt="recipe"
      />
      <p className="lead">
        <i className="fas fa-user" /> Ingredients to buy for this recipe:
      </p>
      <ListItemsGridStyle>
        {list.ingredients
          .sort((ingredient, next) =>
            ingredient.done === next.done ? 0 : ingredient.done ? 1 : -1
          )
          .map((ingredient) => (
            <ListItem
              key={ingredient._id}
              ingredient={ingredient}
              list={list}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
            />
          ))}
      </ListItemsGridStyle>
      <StandardButtonStyle
        background="danger"
        color="light"
        onClick={() => {
          removeList(list);
          routeChange();
        }}
      >
        Remove List
      </StandardButtonStyle>
    </ListStyle>
  );
};

List.propTypes = {
  getList: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
  updateList: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, { getList, removeList, updateList })(
  List
);
