const ssr = false;
const load = ({ url }) => {
  const { pathname } = url;
  return {
    pathname
  };
};
export {
  load,
  ssr
};
