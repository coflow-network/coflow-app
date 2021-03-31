
export const callOnKeystroke = (func, keyCode = 13) => {
  return (event) => {
    if (event.keyCode === keyCode) {
      event.preventDefault()
      func();
    }
  };
};

export const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const dropKey = (obj, key) => {
	const newObj = obj;
	delete newObj[key];
	return newObj;
}