import React from "react";
import "./modal.css";
 class Modal extends React.Component {
  onClose = e => {
    e.stopPropagation()
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    return (
      <div className="modal" id="modal">
        <h2>Contact</h2>
        <div className="content">{this.props.children}</div>
        <div className="actions">
          <button className="toggle-button" onClick={this.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
export default Modal
