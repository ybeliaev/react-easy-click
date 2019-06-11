import React from "react";

export default class ListItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { label, important = false } = this.props;
    return <span>{label}</span>;
  }
}
