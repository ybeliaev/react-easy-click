import React from "react";

export default class ListItem extends React.Component {
  constructor() {
    super();
    this.onLabelClick = () => {
      console.log(`This label: ${this.props.label}`);
    };
  }
  render() {
    const { label, important = false } = this.props;
    return <span onClick={this.onLabelClick}>{label}</span>;
  }
}
