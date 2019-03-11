import React from 'react';
import styled from 'styled-components';
import { MdApps, MdSimCard } from 'react-icons/md';
import { TiWiFi } from 'react-icons/ti';
import { FaPlayCircle, FaShoppingBag } from 'react-icons/fa';
import { GoDeviceMobile } from 'react-icons/go';
import ItemGrid from './ItemGrid';
import Dot from '../../pics/Dot.png';
import Liiga from '../../pics/Liiga.png';

const WrapGrid = () => (
  <Wrapper>
    <ItemGrid icon={<GoDeviceMobile />} title="Laitteet" />
    <ItemGrid icon={<MdSimCard />} title="Liittymät" />
    <ItemGrid icon={<TiWiFi />} title="Laajakaistat" />
    <ItemGrid order={2} title="Dot" pic={Dot} text="Laita piste perinteisille liittymille." />
    <ItemGrid icon={<FaPlayCircle />} title="TV ja viihde" />
    <ItemGrid icon={<MdApps />} title="Palvelut" />
    <ItemGrid icon={<FaShoppingBag />} title="Tarjoukset" />
    <ItemGrid order={2} title="Liiga" pic={Liiga} text="Telia on Liigan uusi koti." />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 13em;
  padding: 2em 6%;
  background: #fff;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 840px) {
    height: auto;
    align-items: flex-start;
    background: #f2f2f2;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 0 6%;
  }
`;

export default WrapGrid;
