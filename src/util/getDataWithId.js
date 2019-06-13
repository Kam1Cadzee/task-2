import shortid from 'shortid';

// Вернуть полученные данные с id
const getDataWithId = data => {
  return data.map(item => ({ ...item, id: shortid.generate() }));
};
export default getDataWithId;
