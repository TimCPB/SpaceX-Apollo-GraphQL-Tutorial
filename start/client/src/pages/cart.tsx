import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Header, Loading } from '../components';
import { CartItem, BookTrips } from '../containers';
import { RouteComponentProps } from '@reach/router';
import * as GetCartItemsTypes from './__generated__/GetCartItems';

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;
;
