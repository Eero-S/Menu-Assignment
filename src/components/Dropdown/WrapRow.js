import React from 'react';
import styled from 'styled-components';
import { MdRoom, MdHelp, MdCall } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import ItemSmall from './ItemSmall';

const WrapRow = () => (
  <Wrapper>
    <ItemSmall icon={<MdRoom />} title="Etsi kauppa" />
    <ItemSmall icon={<MdHelp />} title="Etsi ohjeita" />
    <ItemSmall icon={<IoIosPeople />} title="Kysy yhteisöltä" />
    <ItemSmall icon={<MdCall />} title="Ota yhteyttä" />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 840px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    order: 2;
  }
`;

export default WrapRow;
