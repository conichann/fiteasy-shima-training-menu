import fs from 'fs';
import matter from 'gray-matter';
import { join, parse } from 'path';
import { MenuContent } from '../types/menu';

const POST_DIR = join(process.cwd(), 'src/menus');
const EXTENSION = '.md';

// メニュー一覧の取得
export const getContetList = () => {
  const files = getMenuFileList().map((filename) => readMenuFile({ filename }));

  return createMenuList(files);
};

// ディレクトリから特定の拡張子のファイルを取得
const getMenuFileList = () => {
  const filenames = fs.readdirSync(POST_DIR);

  return filenames.filter((filename) => parse(filename).ext === EXTENSION);
};

// MetaDataを取得する
const readMenuFile = ({ filename }: { filename: string }): MenuContent => {
  const slug = parse(filename).name;
  const raw = fs.readFileSync(join(POST_DIR, `${slug}${EXTENSION}`), 'utf8');
  const matterResult = matter(raw);
  const { title, path, priority } = matterResult.data;

  return {
    title,
    path,
    priority,
  };
};

// NOTE: 必要であればpagingもここで行う
// sortを行う
const createMenuList = (fileList: MenuContent[]) => {
  const sortedDate = fileList.sort((a, b) => {
    return a.priority > b.priority ? 1 : -1;
  });

  return {
    menus: sortedDate,
  };
};
