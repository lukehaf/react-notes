/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import Draggable from 'react-draggable';

import ToggleButton from './ToggleButton';

class note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: false,
    };
  }

  handleDelete = () => {
    this.props.delete(this.props.id);
  };

  handleChange = (event) => {
    this.props.changeContent(this.props.id, event.target.value);
  }

  changeTitle = (event) => {
    this.props.changeTitle(this.props.id, event.target.value);
  }

  handleLock = () => {
    this.setState((prevState) => {
      return {
        isDisabled: !prevState.isDisabled,

      };
    });
  }

  onReposition = (e, data) => { /* from https://github.com/dartmouth-cs52-21S/react-notes-michellecchen/blob/main/src/components/note.js */
    const movedTo = {
      x: this.props.x + data.deltaX,
      y: this.props.y + data.deltaY,
    };
    this.props.onDragNote(this.props.id, movedTo);
  }

  render() {
    return (
      <div>
        <Draggable
          handle=".fa-arrows-alt"
          onDrag={this.onReposition}
          grid={[1, 1]}
          defaultPosition={{ x: 500, y: 20 }}
          position={{
            x: this.props.x,
            y: this.props.y,
          }}
        >
          <div id="note">
            <div id="topOfNote">

              <div id="lSideOfTop">
                <input value={this.props.title}
                  onChange={this.changeTitle}
                  disabled={this.state.isDisabled}
                />
                <i className="fa fa-trash" onClick={this.handleDelete} />

                <ToggleButton id="toggle" handleLock={this.handleLock} />
              </div>

              <i className="fa fa-arrows-alt" />

            </div>

            <div>
              <textarea onChange={this.handleChange}
                value={this.props.content}
                disabled={this.state.isDisabled}
              />

            </div>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default note;
