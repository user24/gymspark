import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Workout = (workout) => {
  return (<div>
    <h3>{workout.ymd}</h3>
    {Object.keys(workout.exercises).map(name => {
      return (
        <Fragment>
          <h4>{name}</h4>
          {workout.exercises[name].kg}kg for {workout.exercises[name].sets.length} sets<br />
          {workout.exercises[name].sets.join(',')}
        </Fragment>);
    })}
  </div>);
};

const Workouts = (props) => {
  return props.workouts.map(Workout);
};

Workout.propTypes = {
  workout: PropTypes.shape({ ymd: "", exercises: [] })
};

Workout.defaultProps = {
  workout: {}
};
Workouts.propTypes = {
  workouts: PropTypes.array
};

Workouts.defaultProps = {
  workouts: []
};

export default Workouts;