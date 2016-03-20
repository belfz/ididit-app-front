import React from 'react';
import { connect } from 'react-redux';
import { adoptCat, login } from '../actions/actions';

let AvailableCatsList = ({dispatch, cats}) => {
  let list = cats.map(c => {
    return (
        <div key={c.id}>
          <p>{c.name}</p>
          <button onClick={() => dispatch(adoptCat(c.id))}>adopt?</button>
        </div>
    );
  });
  
//   login({username: 'admixn', password: 'admin'})(dispatch);

  return (
      <div className="catlist">
        <h4>available cats:</h4>
        {list}
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cats: state.catReducer.filter(c => c.adopted === false)
  };
};

AvailableCatsList = connect(
    mapStateToProps
)(AvailableCatsList);

export default AvailableCatsList;
