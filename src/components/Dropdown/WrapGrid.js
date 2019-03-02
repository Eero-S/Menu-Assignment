import React from 'react';
import styled from 'styled-components';
import { MdApps, MdSimCard } from 'react-icons/md';
import { TiWiFi } from 'react-icons/ti';
import { FaPlayCircle, FaShoppingBag } from 'react-icons/fa';
import { GoDeviceMobile } from 'react-icons/go';
import ItemBig from './ItemBig';
import ItemImg from './ItemImg';
import Dot from '../../pics/Dot.png';
import Liiga from '../../pics/Liiga.png';

const WrapGrid = () => (
  <Wrapper>
    <ItemBig icon={<GoDeviceMobile />} title="Laitteet" />
    <ItemBig icon={<MdSimCard />} title="Liittymät" />
    <ItemBig icon={<TiWiFi />} title="Laajakaistat" />
    <ItemImg title="Dot" pic={Dot} text="Laita piste perinteisille liittymille." />
    <ItemBig icon={<FaPlayCircle />} title="TV ja viihde" />
    <ItemBig icon={<MdApps />} title="Palvelut" />
    <ItemBig icon={<FaShoppingBag />} title="Tarjoukset" />
    <ItemImg title="Liiga" pic={Liiga} text="Telia on Liigan uusi koti." />
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
