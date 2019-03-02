import React from 'react';
import styled from 'styled-components';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { MdSearch } from 'react-icons/md';

const ItemSerach = () => (
  <Wrapper>
    <TextField
      id="input-with-icon-textfield"
      placeholder="Etsi..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <MdSearch />
          </InputAdornment>
        )
      }}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 20%;
  padding: 15px 0;
  padding-right: 4em;
  height: 70px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  :hover {
    color: #990ae3;
  }
  @media (max-width: 840px) {
    width: 95%;
    padding-left: 1em;
    padding: 0;
    margin: 0;
  }
`;

export default ItemSerach;
