import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>What are you, GAY?!</p>
      <button onClick={props.onTroubleshootingComfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingComfirmation: PropTypes.func
};

export default ConfirmationQuestions;
