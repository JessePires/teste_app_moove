import { extname, join } from 'path';

const getCSVFile = () => {
  const filePath = join(__dirname, '..', '..', 'public', 'users.csv');
  return filePath;
};

const csvFileName = (req, file, callback) => {
  const fileExtName = extname(file.originalname);
  callback(null, `users${fileExtName}`);
};

export { getCSVFile, csvFileName };
