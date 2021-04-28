import { customAlphabet, nanoid } from 'nanoid';

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
};

export const uuid = (length=8) => {
  let generateId = customAlphabet(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890", 8
  );
  let id = generateId(length);
  return id;
}