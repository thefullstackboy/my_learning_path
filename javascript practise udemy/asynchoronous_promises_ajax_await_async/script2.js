// // // // 'use strict'
// // // // //const countriesContainer = document.querySelector('.countries');


// // // // // const getCountryData = function (country) {
    
// // // // // const request = new XMLHttpRequest();
// // // // // //firt new xmlHttp request liknt hota ha jise se ki data call  kare sake 
// // // // // // https://restcountries.com/v3/name/{name}
// // // // // // https://restcountries.com/v2/name/{name}
// // // // // request.open('GET', `https://restcountries.com/v2/name/${country}`);
// // // // // //open .get se link set kare
// // // // // request.send();

// // // // // request.addEventListener('load', function () {
// // // // // const [data] = JSON.parse(this.responseText);
// // // // // console.log(data);
// // // // // const html = `
// // // // //         <article class="country">
// // // // //             <img class="country__img" src="${data.flags[0]}" />
// // // // //             <div class="country__data">
// // // // //                 <h3 class="country__name">COUNTRY</h3>
// // // // //                 <h4 class="country__region">${data.name}</h4>
// // // // //                 <p class="country__row"><span>👫</span>${(
// // // // //                     +data.population / 1000000
// // // // //                 ).toFixed(1)} people</p>
// // // // //                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// // // // //                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// // // // //             </div>
// // // // //         </article>
// // // // //     `;
// // // // //     countriesContainer.insertAdjacentHTML('beforeend', html);
// // // // //     countriesContainer.style.opacity = 1;
// // // // // });

// // // // // // }
// // // // // // getCountryData('portugal');
// // // // // // getCountryData('usa');
// // // // // // getCountryData('germany');
// // // // // // getCountryData("india")
// // // // // // getCountryData("china")





  
// // // // // const countriesContainer = document.querySelector('.countries');


// // // // // const getCountryData = function (country) {
// // // // // const request = new XMLHttpRequest();

// // // // // // https://restcountries.com/v3/name/{name}
// // // // // // https://restcountries.com/v2/name/{name}
// // // // // request.open('GET', `https://restcountries.com/v2/name/${country}`);
// // // // // request.send();

// // // // // request.addEventListener('load', function () {
// // // // // const [data] = JSON.parse(this.response);
// // // // // console.log(data);
// // // // // let currency = []
// // // // // // for(i = 0; i < )
// // // // // data.currencies.map((item) =>{
// // // // //     currency.push({
// // // // //         code: item.code,
// // // // //         name: item.name,
// // // // //         symbol: item.symbol,
// // // // //     })
// // // // // })
// // // // // console.log("currency",currency);
// // // // // const html = `
// // // // //         <article class="country">
// // // // //             <img class="country__img" src="${
// // // // //                 data.flags[0]}" />
// // // // //             <div class="country__data">
// // // // //                 <h3 class="country__name">COUNTRY</h3>
// // // // //                 <h4 class="country__region">${data.name}</h4>
// // // // //                 <p class="country__row"><span>👫</span>${(
// // // // //                     +data.population / 1000000
// // // // //                 ).toFixed(1)} people</p>
// // // // //                 <p class="country__row"><span>🗣️</span>${currency[0].code}</p>
// // // // //                 <p class="country__row"><span>🗣️</span>${currency[0].name}</p>
// // // // //                 <p class="country__row"><span>🗣️</span>${currency[0].symbol}</p>
// // // // //                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// // // // //             </div>
// // // // //         </article>
// // // // //     `;
// // // // //     countriesContainer.insertAdjacentHTML('beforeend', html);
// // // // //     countriesContainer.style.opacity = 1;
// // // // // });

// // // // // }
// // // // // getCountryData('portugal');
// // // // // getCountryData('pakistan');
// // // // // getCountryData('germany');
// // // // // getCountryData("india")
// // // // // getCountryData("china")





// // // // // const getCountryNeighbour = function (country) {
    
// // // // // const request = new XMLHttpRequest();
// // // // // //firt new xmlHttp request liknt hota ha jise se ki data call  kare sake 
// // // // // // https://restcountries.com/v3/name/{name}
// // // // // // https://restcountries.com/v2/name/{name}

// // // // // //Ajax call county 1
// // // // // request.open('GET', `https://restcountries.com/v2/name/${country}`);
// // // // // //open .get se link set kare
// // // // // request.send();

// // // // // request.addEventListener('load', function () {
// // // // // const [data] = JSON.parse(this.responseText);
// // // // // console.log(data);

// // // // // // Render country
// // // // // renderCountry(data);

// // // // // //Get neighbour country (2)
// // // // // const [neighbour] = data.borders;

// // // // // if (!neighbour) return;

// // // // // // Ajax call country 2
// // // // // const request2 = new XMLHttpRequest();
// // // // // request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
// // // // // //open .get se link set kare
// // // // // request2.send();

// // // // // request2.addEventListener('load', function(){
// // // // //     const data2 = JSON.parse(this.responseText);
// // // // //     console.log(data2);

// // // // //     renderCountry(data2, 'neighbour')

// // // // // })
// // // // //   });
// // // // // };

// // // // // getCountryNeighbour('Sri Lanka');

// // // // // setTimeout(() => {
// // // // //     console.log(`1 second passed`);
// // // // //     setTimeout(() => {
// // // // //         console.log(`2 seconds passed`);
// // // // //         setTimeout(() => {
// // // // //             console.log(`3 second passed`);
// // // // //             setTimeout(() => {
// // // // //                 console.log(`4 second passed`);
// // // // //             }, 1000)
// // // // //         }, 1000)
// // // // //     }, 1000)
// // // // // }, 1000)
// // // // // Consuming Promises
// // // // // Chaining Promises
// // // // // Handling Rejected Promises
// // // // // Throwing Errors Manually

// // // // // const getCountryData = function (country) {
// // // // //   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
// // // // //     .then(function (response) {
// // // // //       console.log(response);
// // // // //       return response.json();
// // // // //     })
// // // // //     .then(function (data) {
// // // // //       console.log(data);
// // // // //       renderCountry(data[0]);
// // // // //     });
// // // // // };


// // // // // const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
// // // // // console.log(request);

// // // // // const getCountryData  = function (country) {
// // // // //     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(

// // // // //     ))
// // // // // }

// // // // // const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
// // // // // console.log(request);
// // // // // const getCountryData = function (country) {
// // // // //     fetch(`https://restcountries.com/v2/name/${country}`).then(function(
// // // // //         response
// // // // //         ) {
// // // // //             console.log(response);
// // // // //             return response.json();
// // // // //         })
// // // // //         .then(function (data) {
// // // // //             console.log(data);
// // // // //             renderCountry(data[0]);
// // // // //         });
        
// // // // // };

// // // // const btn = document.querySelector('.btn-country');
// // // // const countriesContainer = document.querySelector('.countries');

// const renderCountry = function(data, className = ' ') {
//     const html = `
//         <article class="country ${className}">
//             <img class="country__img" src="${data.flags[0]}"/>
//             <div class="country__data">
//                 <h3 class="country__name">COUNTRY</h3>
//                 <h4 class="country__region">${data.name}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                     +data.population / 1000000
//                 ).toFixed(1)} people</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//         </article>
//     `;
// // // //     countriesContainer.insertAdjacentHTML('beforeend', html);
// // // //     countriesContainer.style.opacity = 1;
// // // // };


// // // // // const renderError = function (msg) {
// // // // //     countriesContainer.insertAdjacentText('beforeend', msg);
// // // // //     countriesContainer.style.opacity = 1;
// // // // //   };

// // // // // const getCountryData = function (country) {
// // // // //     //Country 1
// // // // //     fetch(`https://restcountries.com/v2/name/${country}`)
// // // // //     .then(response => {
// // // // //         console.log(response);
// // // // //         return response.json()        
// // // // //     })     
// // // // //     .then(data => {
// // // // //        renderCountry(data[0]);
// // // // //        const neighbour = data[0].borders[0];
// // // // //        if (!neighbour) return;

// // // // //        //country 2
// // // // //        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
// // // // //     })
// // // // //     .then(response => response.json())
// // // // //     .then(data => renderCountry(data, 'neighbour'))
// // // // //     .catch(err => {;
// // // // //         console.error(`${err} 🍕🍕🍕`);
// // // // //         renderError(`Something went wrong 🍕🍕 ${err.message}. Try again!`)
// // // // //     })
// // // // //     .finally(() => {
// // // // //         countriesContainer.style.opacity = 1;
// // // // //     });
// // // // // };

// // // // // btn.addEventListener('click', function(){
// // // // //    getCountryData('portugal');
// // // // // });

// // // // // getCountryData('fasdr');


// // // // /*wd
// // // // try {
// // // //     //add();
// // // //     document.write("skipped code<br>");    
// // // // }

// // // // catch (e) {
// // // //     document.write("Function defined nahi ha<br>");
// // // // }

// // // // finally {
// // // //     document.write("get executed whether there is exception or not <br>");    
// // // // }
// // // // */

// // // // // function getRectArea(w, h) {
// // // // //     if (isNaN(w) || isNaN(h)) {
// // // // //        throw("this no peramert not number")
// // // // //     }
// // // // // }
// // // // //     try {
// // // // //        getRectArea(10, 15);
// // // // //     }

// // // // //     catch (e) {
// // // // //         document.write(e);        
// // // // //     }
    
// // // // //     document.write("<br><br>I have no idea with going on above")

// // // // //  whereAmI = () => {
// // // // // let  latitude = prompt("enter data1");
// // // // // let longitude = prompt("enter data2");

// // // // // const apiuse =  fetch(https://geocode.xyz/api.)
// // // // // let abc = apiuse.latitude;
// // // // // let get = apiuse.longitude;
// // // // // }
// // // // // console.longitude(whereAmI());

// // // // const whereAmI = function (lat, lng) {
// // // //     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
// // // //       .then(res => {
// // // //         if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
// // // //         return res.json();
// // // //       })
// // // //       .then(data => {
// // // //         console.log(data);
// // // //         console.log(`You are in ${data.city}, ${data.country}`);
  
// // // //         return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
// // // //       })
// // // //       .then(res => {
// // // //         if (!res.ok) throw new Error(`Country not found (${res.status})`);
  
// // // //         return res.json();
// // // //       })
// // // //       .then(data => renderCountry(data[0]))
// // // //       .catch(err => console.error(`${err.message} 💥`));
// // // //   };
// // // //   whereAmI(52.508, 13.381);
// // // //   whereAmI(19.037, 72.873);
// // // //   whereAmI(-33.933, 18.474);
// // // 'use strict';

// // // const btn = document.querySelector('.btn-country');
// // // const countriesContainer = document.querySelector('.countries');

// // // const renderCountry = function (data, className = '') {
// // //   const html = `
// // //   <article class="country ${className}">
// // //     <img class="country__img" src="${data.flag}" />
// // //     <div class="country__data">
// // //       <h3 class="country__name">${data.name}</h3>
// // //       <h4 class="country__region">${data.region}</h4>
// // //       <p class="country__row"><span>👫</span>${(
// // //         +data.population / 1000000
// // //       ).toFixed(1)} people</p>
// // //       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// // //       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// // //     </div>
// // //   </article>
// // //   `;
// // //   countriesContainer.insertAdjacentHTML('beforeend', html);
// // //   countriesContainer.style.opacity = 1;
// // // };

// // // const renderError = function (msg) {
// // //   countriesContainer.insertAdjacentText('beforeend', msg);
// // //   countriesContainer.style.opacity = 1;
// // // };

// // // const getJSON = function (url, errorMsg = 'Something went wrong') {
// // //   return fetch(url).then(response => {
// // //     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

// // //     return response.json();
// // //   });
// // // };

// // 'use strict';

// // const btn = document.querySelector('.btn-country');
// // const countriesContainer = document.querySelector('.countries');

// // const renderCountry = function (data, className = '') {
// //   const html = `
// //   <article class="country ${className}">
// //     <img class="country__img" src="${data.flag}" />
// //     <div class="country__data">
// //       <h3 class="country__name">${data.name}</h3>
// //       <h4 class="country__region">${data.region}</h4>
// //       <p class="country__row"><span>👫</span>${(
// //         +data.population / 1000000
// //       ).toFixed(1)} people</p>
// //       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //     </div>
// //   </article>
// //   `;
// //   countriesContainer.insertAdjacentHTML('beforeend', html);
// //   countriesContainer.style.opacity = 1;
// // };

// // const renderError = function (msg) {
// //   countriesContainer.insertAdjacentText('beforeend', msg);
// //   countriesContainer.style.opacity = 1;
// // };

// // const getJSON = function (url, errorMsg = 'Something went wrong') {
// //   return fetch(url).then(response => {
// //     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

// //     return response.json();
// //   });
// // };




// // const whereAmI = function (lat, lng) {
// //     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
// //       .then(res => {
// //         if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
// //         return res.json();
// //       })
// //       .then(data => {
// //         console.log(data);
// //         console.log(`You are in ${data.city}, ${data.country}`);
  
// //         return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
// //       })
// //       .then(res => {
// //         if (!res.ok) throw new Error(`Country not found (${res.status})`);
  
// //         return res.json();
// //       })
// //       .then(data => renderCountry(data[0]))
// //       .catch(err => console.error(`${err.message} 💥`));
// //   };
// //   whereAmI(52.508, 13.381);
// //  // whereAmI(19.037, 72.873);
// //  // whereAmI(-33.933, 18.474);
// // fetch('https://api.covid19api.com/summary')
// // .then ( (apidata) => {
// //         console.log(apidata);
// //         return apidata.json();
// // })

// // .then((actualdata) =>{
// //     const mydata = actualdata.Countries[76];
// //     console.log(mydata)
   

// //     document.getElementById('apidata').innerHTML = `The name of the country is ${mydata.Country}. The Total Confirmed cases
// //     here is ${mydata.TotalConfirmed} and the TotalDeaths cases here is ${mydata.TotalDeaths} and
// //      finally the TotalRecoverd cases here is ${mydata.TotalRecovered}`;
// // })

// // .catch( (error) => {
// //     console.log(`The error`);
// // })

// // console.log('Test start');
// // setTimeout(() => console.log('0 sec timer'), 0);
// // Promise.resolve('Resolved promise 1').then(res =>
// //     console.log(res));

// // Promise.resolve('Resolved promise 2').then(res => {
// //     for(let i = 0; i < 10;  i++) {}
// //     console.log(res);
// // });

// //     console.log('Test end');

// // const lotteryPromise = new Promise(function(resolve,
// //     reject) {
// //         console.log("Lotter draw is happening")
// //         setTimeout(function () {
// //             if(Math.random() >= 0.5) {
// //                 resolve("you win money😎😎😎😎😎😎😎");
// //             } else {
// //                 reject("You lost your money😲😲😲😲😲😲😲");
// //             }
// //         }, 2000);

// // });


// // lotteryPromise.then(res => console.log(res)).catch(err =>
// //      console.error(err));

// //      // promisifying setTimeout
// //      const wait = function (seconds) {
// //          return new Promise(function (resolve) {
// //              setTimeout(resolve, seconds * 1000);
// //          });
// //      }
// //      Promise.resolve('abc').then(x= > console.log(x));
// //      Promise.resolve('abc').then(x= > console.log(x));
     
// // navigator.geolocation.getCurrentPosition(
// //     position => console.log(position),
// //     err => console.error(err)
// // );
// // console.log('Getting position');

// // const getPosition = function () {
// //     return new Promise(function (resolve, reject) {
// //         navigator.geolocation.getCurrentPosition(resolve, reject);
// //     });
// // };

// // getPosition().then(pos => console.log(pos));

// /* important
// const getRollNo = () => {
//     setTimeout( () => {
//         console.log('API getting roll no');
//         let roll_no = [1,2,3,4,5];
//         console.log(roll_no);

//         setTimeout( (rollno) => {
//             const biodata = {
//                 name : 'vinod',
//                 age : 26              
//             }

//             console.log(`my roll no is ${rollno} .My name is ${biodata.name} and I am ${biodata.age} years old.      
//             `);

//             setTimeout( (name) => {
//                 biodata.gender = 'male';
//                 console.log(`my roll no is ${rollno} .My name is ${biodata.name} and I am ${biodata.age} years old.      
//                                my gender ${biodata.gender}`);
//            }, 2000, biodata.name);

//         },2000, roll_no[1])
//     },2000);
// }

// getRollNo();

// important */
// //executor
// //promise produce 
// // const pobj1 = new Promise( (resolve, reject) => {
// //     setTimeout( () => {
// //         let roll_no = [1,2,3,4,5];
// //         resolve(roll_no);
// //         reject('Error while communicating');
// //     }, 2000);

// // } );

// // const getBiodata = (indexdata) => {
// //     return new Promise ( (resolve, reject) => {
// //         setTimeout((indexdata) => {
// //             let biodata = {
// //                 name : 'vinod',
// //                 age : 26
// //             }
// //             resolve(`My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} years old`)

// //         },2000, indexdata)

// //     });
// // }
// // //....promise consume
// // pobj1.then((rollno) =>{
// //     console.log(rollno);
// //     return getBiodata(rollno[1]);
// // }).then( (kuchbhi) =>{
// //     console.log(kuchbhi);
// // }).catch((error) => {
// //     console.log(error);
// // })


// // const wait = function (seconds) {
// //     return new Promise(function (resolve) {
// //         setTimeout(resolve, seconds * 1000);
// //     });
// // };

// //    const imgContainer = document.querySelector('.images');
// //   const createImage = function(imgpath) {
// //       return new Promise(function(resolve, reject) {
// //           const img = document.createElement('img');
// //           img.src = imgpath;

// //           img.addEventListener('load', function () {
// //               imgContainer.append(img);
// //           });

// //           img.addEventListener('error', function() {
// //               reject(new Error('Image not found'))
// //           });
// //       });
// //   };

// //   let currentImg;

// //   createImage('img/img-1.jpg').then(img => {
// //       console.log('Image 1 loaded')
// //   }).catch(error => console.error(err));


// //   createImage('img/img-1.jpg')
// //   .then(img => {
// //    currentImg = img;
// //    console.log('Image 1 loaded');
// //    return wait(2);
// //   })
// //   .then(() => {
// //       currentImg.style.display = 'none';
// //       return createImage('img/img-2.jpg')
// //       return wait(2);
// //   })
// //   .then(() => {
// //       currentImg.style.display ='none';
// //   })
// //   .catch(err => console.error(err));


// const getPosition = function () {
//     return new Promise (resolve, reject)
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     }

// const whereAmI = async function(country) {
//     const res = await fetch(`https://restcountries.com/v2/name/${country}`);
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
// };

// whereAmI('portugal');
// //console.log('FIRST')

// try {
//     let y = 1;
//     const x = 2;
//     x  = 3;
// } catch(err) {
//     alert(err.message);
// }
// console.log('1: WIll get location');
// const city = whereAmI();
// console.log(city);


// whereAmi().then(city => console.log(city))
// // console.log('3: Finished getting location');
// const get3Countries = async function (c1, c2, c3) {
//     try {
//         const [data1] = await Promise.all([
//             `https://restcountries.com/v3/name/${c1}`
//         );
//         const [data2] = await getJSON(
//             `https://restcountries.com/v3/name/${c2}`
//             );

//          const [data3] = await getJSON(
//              `https://restcountries.com/v3/name/${c3}`
//                 );

//                 //console.log([data1.capital, data2.capital, data3.capital]);
                
//           ]);
//                console.log(data);
//         } catch (err) {
//             console.error(err);
//         }
//     }
//const get3Countries = async function (c1, c2, c3) {
  //  try {
      // const [data1] = await getJSON(
      //   `https://restcountries.eu/rest/v2/name/${c1}`
      // );
      // const [data2] = await getJSON(
      //   `https://restcountries.eu/rest/v2/name/${c2}`
      // );
      // const [data3] = await getJSON(
      //   `https://restcountries.eu/rest/v2/name/${c3}`
      // );
      // console.log([data1.capital, data2.capital, data3.capital]);
  
//       const data = await Promise.all([
//         getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//         getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//         getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//       ]);
//       console.log(data.map(d => d[0].capital));
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   get3Countries('portugal', 'canada', 'tanzania');


// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');

//         resolve(10);
//     }, 1 * 1000);

// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has resolved');
//         resolve(20);
//     }, 2 * 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The third promise has resolved');
//         resolve(30);
//     }, 3 * 1000);
// });
  
// Promise.all([p1, p2, p3])
//     .then(results => {
//         const total = p1 + p2 + p3 ;

//         console.log(`Results: ${results}`);
//         console.log(total);
//     });
// const getJSON = "Fsd";

// (async function () {
//     const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//     ]);
//     console.log(res[0]);
// })();
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');
//         resolve(10);
//     }, 1 * 1000);

// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has resolved');
//         resolve(20);
//     }, 2 * 1000);
// });


// Promise.race([p1, p2])
//     .then(value => console.log(`Resolved: ${value}`))
//     .catch(reason => console.log(`Rejected: ${reason}`));



// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//       setTimeout(resolve, seconds * 1000);
//     });
//   };
  
//   const imgContainer = document.querySelector('.images');
  
//   const createImage = function (imgPath) {
//     return new Promise(function (resolve, reject) {
//       const img = document.createElement('img');
//       img.src = imgPath;
  
//       img.addEventListener('load', function () {
//         imgContainer.append(img);
//         resolve(img);
//       });
  
//       img.addEventListener('error', function () {
//         reject(new Error('Image not found'));
//       });
//     });
//   };
  
// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// PART 1
// const loadNPause = async function () {
//   try {
//     // Load image 1
//     let img = await createImage('img/img-1.jpg');
//     console.log('Image 1 loaded');
//     await wait(2);
//     img.style.display = 'none';

//     // Load image 1
//     img = await createImage('img/img-2.jpg');
//     console.log('Image 2 loaded');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//   }
// };
// loadNPause();

// PART 2
// // const loadAll = async function (imgArr) {
// //   try {
// //     const imgs = imgArr.map(async img => await createImage(img));
// //     const imgsEl = await Promise.all(imgs);
// //     console.log(imgsEl);
// //     imgsEl.forEach(img => img.classList.add('parallel'));
// //   } catch (err) {
// //     console.error(err);
// //   }
// // };
// // loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);


// const pobj1 = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         let roll_no = [1,2,3,4,5];
//         resolve(roll_no);
//        // reject('Error while communicating');
//     }, 2000);

// });

// const getBiodata = (indexdata) => {
//     return new Promise ( (resolve, reject) => {
//         setTimeout((indexdata) => {
//             let biodata = {
//                 name : 'vinod',
//                 age : 26
//             }
//             resolve(`My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} years old`)

//         },2000, indexdata)
//     } );
// }
//         async function getDate(){
//             const rollnodata = await pobj1;
//             console.log(rollnodata);

//             const biodata = await getBiodata(rollno[1]);
//             console.log(biodata)
//         }
   



 

    // getDate()

    async function f() {
    
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
      });
    
      let result = await promise; // wait until the promise resolves (*)
    
      alert(result); // "done!"
    }
    
    
    f();
    
