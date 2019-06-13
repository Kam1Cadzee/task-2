import qs from 'query-string';
// Вернуть страницу из url
const getPageFromProps = ({ location }) => qs.parse(location.search).page;
export default getPageFromProps;
