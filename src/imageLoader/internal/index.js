import xhrRequest from './xhrRequest.js';
import { setOptions, getOptions } from './options.js';

const internal = {
  xhrRequest,
  setOptions,
  getOptions
};

export { setOptions, getOptions, xhrRequest };
export default internal;
