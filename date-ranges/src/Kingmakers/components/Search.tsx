import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {SearchShape} from '../types';

import {
  Icon,
} from "../"

const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  color: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Search(props: SearchShape) {
  const {
    type,
  } = props
  
  return (<>
            <SearchBox>
              <SearchIconWrapper>
                <Icon icon="search" color="primary" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={`Search ${type}…`}
                inputProps={{ 'aria-label': 'search' }}
              />
            </SearchBox>
          </>
  );
}
