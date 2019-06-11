import React from "react";
import ListItem from "./list-item";

const List = ({ dataProps }) => {
  const elements = dataProps.map(item => {
    const { id, ...someProps } = item;
    return (
      <li>
        <ListItem key={id} {...someProps} />
      </li>
    );
  });
  return <ul>{elements}</ul>;
};
export default List;
