import styled from 'styled-components';
import React from 'react';
import Header from '../header';
import PlanetSlider from '../slider';
import CategoryList from '../category-list';
import Details from '../details';
import { GlobalStyle } from '../../styles/styled';

const AppWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <PlanetSlider />

        <div className="row mb2">
          <div className="col-md-6">
            <CategoryList />
          </div>
          <div className="col-md-6">
            <Details />
          </div>
        </div>
      </AppWrapper>
    </>
  )
}

export default App;
