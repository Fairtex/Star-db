import React from 'react';
import {List, Item} from './styled';

export const CategoryList: React.FC = () => {
  return (
    <List className="list-group">
      <Item className="list-group-item">
        Luke Skywalker
      </Item>
      <Item className="list-group-item">
        Darth Vader
      </Item>
      <Item className="list-group-item">
        R2-D2
      </Item>
    </List>
  )
}