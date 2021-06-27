/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';

class toggleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
    };
  }

  handletoggle = () => {
    this.setState((prevState) => {
      return {
        editMode: !prevState.editMode,

      };
    });
  };

  render() {
    return (
      <div onClick={this.handletoggle}>

        {
          this.state.editMode && <i className="fa fa-check" /> /* the && operator
          won't evaluate the second expression, if the first expression
          returns false when evaluated! */
        }
        {!this.state.editMode && <i className="fa fa-edit" />}
      </div>
    );
  }
}
export default toggleButton;
