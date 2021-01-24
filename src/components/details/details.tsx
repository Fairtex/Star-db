import React from 'react';
import {
  Wrapper,
  Image,
  Item,
  Key
} from './styled';

export const Details: React.FC = () => {
  return (
    <Wrapper className="card">
        <Image src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />

        <div className="card-body">
          <h4>R2-D2</h4>
          <ul className="list-group list-group-flush">
            <Item className="list-group-item">
              <Key>Gender</Key>
              <span>male</span>
            </Item>
            <Item className="list-group-item">
              <Key>Birth Year</Key>
              <span>43</span>
            </Item>
            <Item className="list-group-item">
              <Key>Eye Color</Key>
              <span>red</span>
            </Item>
          </ul>
        </div>
      </Wrapper>
  )
}