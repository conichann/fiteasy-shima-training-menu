import { createThemeContract, createTheme } from '@vanilla-extract/css';

// テーマのベース
export const consts = createThemeContract({
  color: {
    primary: null,
    text: null,
  },
});

// テーマに値を設定し使用する
export const mainTheme = createTheme(consts, {
  color: {
    primary: '#9acc1e',
    text: '#e22255',
  },
});
