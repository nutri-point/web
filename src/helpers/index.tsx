import moment from 'moment';
import { forwardRef } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

import { DEFAULT_DATE_FORMAT } from './constants';

export const MaterialRouterLink = forwardRef<
  HTMLAnchorElement,
  RouterLinkProps
>((props, ref) => <RouterLink innerRef={ref} {...props} />);

export const formatDate = (date: Date) =>
  moment(date).format(DEFAULT_DATE_FORMAT);

export const getAge = (date: Date) => moment().diff(date, 'years');

export const hasSubstring = (subject: string, substring: string) =>
  subject.toLowerCase().includes(substring.toLowerCase());
