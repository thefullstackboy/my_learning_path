// import { async } from "regenerator-runtime";
//use function over and over
import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';
import { uploadRecipe } from './modal.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// export const getJSON = async url => {
//   try {
//     const fetchPro = fetch(url);
//     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
//     const data = await res.json();
//     if (!res.ok) throw new Error(` ${data.message} ${res.status}`);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };

export const AJAX = async (url, uploadData = undefined) => {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

      //after some time out.
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(` ${data.message} ${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};

// export const sendJSON = async (url, uploadData) => {
//   try {
//     const fetchPro = fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(uploadData),
//     });
//     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
//     const data = await res.json();
//     use for error message
//     if (!res.ok) throw new Error(` ${data.message} ${res.status}`);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };
