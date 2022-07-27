import type { NextPage } from 'next';
import { getContetList } from '../lib/api';
import { MenuContent } from '../types/menu';
import { headingStyle, menuStyle, linkStyle } from '../styles/item.css';

const Home: NextPage<{ menus: MenuContent[] }> = ({ menus }) => {
  return (
    <>
      <h1 className={headingStyle}>トレーニングメニュー</h1>
      {menus.map((value) => {
        return (
          <div key={value.priority} className={menuStyle}>
            <a
              className={linkStyle}
              href={`fiteasy-shima-training-menu${value.path}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {value.title}
            </a>
          </div>
        );
      })}
    </>
  );
};

export const getStaticProps = () => {
  const { menus } = getContetList();
  return {
    props: { menus },
  };
};

export default Home;
