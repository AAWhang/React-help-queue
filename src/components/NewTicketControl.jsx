import React from 'react';
import helloworld from '../assets/images/helloworld.jpg';
import ComfirmationQuestions from './ComfirmationQuestions';
import NewTicketForm from './NewTicketForm';
import PropTypes from 'prop-types';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingComfirmation = this.handleTroubleshootingComfirmation.bind(this);
  }

  handleTroubleshootingComfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){

    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}/>;
    } else {
      currentlyVisibleContent = <ComfirmationQuestions onTroubleshootingComfirmation={this.handleTroubleshootingComfirmation}/>;
    }
    return (
      <div>
        <img src={helloworld}/>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;
