import styled from 'styled-components';

export const SliderWrap = styled.div`
  display: flex;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #303030;
  border-radius: 0.3rem;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-right: 1rem;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const InfoItem = styled.li`
  position: relative;
  display: block;
  background-color: #303030;
  border-bottom: 1px solid #444;
  padding: .25rem;
`;

export const Key = styled.span`
  margin-right: .5rem;
`;