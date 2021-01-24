import React from 'react';
import {
  SliderWrap,
  Image,
  InfoList,
  InfoItem,
  Key
} from './styled';

export const PlanetSlider: React.FC = () => {
    return (
      <SliderWrap>
        <Image
          src="https://starwars-visualguide.com/assets/img/planets/5.jpg" 
          alt="planet"/>
        <div>
          <h3>Planet Name</h3>
          <InfoList>
            <InfoItem>
              <Key>Population</Key>
              <span>123124</span>
            </InfoItem>
            <InfoItem>
              <Key>Rotation Period</Key>
              <span>43</span>
            </InfoItem>
            <InfoItem>
              <Key>Diameter</Key>
              <span>100</span>
            </InfoItem>
          </InfoList>
        </div>
      </SliderWrap>
    )
}