import { style } from '@vanilla-extract/css';
import { consts } from './consts.css';

export const headingStyle = style({
  color: consts.color.primary,
  textAlign: 'center',
});

export const menuStyle = style({
  width: 'calc(100% - 30px)',
  maxWidth: 1200,
  padding: '20px 25px',
  boxSizing: 'border-box',
  border: `3px solid`,
  borderColor: consts.color.primary,
  borderRadius: 4,
  margin: '0 15px 30px 15px',
  '@media': {
    'screen and (min-width: 768px)': {
      width: 'calc(100% - 30px)',
      margin: '0 15px 30px 15px',
    },
    'screen and (min-width: 1024px)': {
      width: 'calc(100% - 30px)',
      margin: '0 15px 40px 15px',
    },
    'screen and (min-width: 1200px)': {
      width: 1200,
      margin: '0 auto 40px auto',
    },
  },
});

export const linkStyle = style({
  color: consts.color.text,
  cursor: 'pointer',
  textDecoration: 'underline',
  ':hover': {
    opacity: 0.6,
  },
});
