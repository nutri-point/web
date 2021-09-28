import moment from 'moment';
import { forwardRef } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

export const MaterialRouterLink = forwardRef<
  HTMLAnchorElement,
  RouterLinkProps
>((props, ref) => <RouterLink innerRef={ref} {...props} />);

export const formatDate = (date: Date) => moment(date).format('L');

export const getAge = (date: Date) => moment().diff(date, 'years');
