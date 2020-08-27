const getAboutList = async params =>
  (await fetch("http://localhost:3456/api/about")).json();

export default getAboutList;
