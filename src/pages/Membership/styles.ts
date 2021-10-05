import { Theme, alpha } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabs: {
      top: 0,
      position: 'sticky',
      backgroundColor: theme.palette.background.default,
      zIndex: 999,
      transition: 'background-color 0.2s ease-in-out',
    },
    tab: {
      [theme.breakpoints.up('xs')]: {
        minWidth: '0px',
      },
    },
    bigTab: {
      width: '15rem',
    },
    searchField: {
      paddingRight: '2rem',
      paddingLeft: '2rem',
      paddingTop: '1rem',
    },
  }),
);

export const useCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: '2rem',
    },
    header: {
      paddingBottom: '2rem',
    },
    name: {
      paddingBottom: theme.spacing(),
    },
    item: {
      paddingBottom: theme.spacing(),
    },
    chip: {
      // paddingRight: theme.spacing(),
    },
    weightChip: {
      backgroundColor: alpha(theme.palette.warning.main, 0.1),
      border: 'none',
      fontWeight: 700,
    },
  }),
);

export const useListStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '2rem',
    },
    card: {
      padding: '2rem',
    },
  }),
);

export const useTableStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '1rem 2rem',
    },
    tablePaper: {
      transition: 'background-color 0.2s ease-in-out',
    },
    headerRow: {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    headerCell: {
      fontWeight: 700,
      position: 'sticky',
      top: 0,
    },
  }),
);

export const useTableRowStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: alpha(theme.palette.primary.main, 0.05),
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    },
  }),
);
