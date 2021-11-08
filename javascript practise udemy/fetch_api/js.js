document.getElementById("btn").addEventListener("click", makerequest);

// function makerequest() {
//     console.log("Button Clicked")
//     const promiseobj = fetch('./adv.txt')
//     console.log(promiseobj)
//     promiseobj.then((res) => {
//         console.log(res); return res.text()
//      }).then((data) => {
//          console.log(data)})
// }

// function makerequest() {
//     console.log("Button Clicked")
//     fetch('./adv.txt').then((res) => {
//     if (!res.ok) {
//     throw Error(res.statusText)
//     }
//     console.log(res);
//     return res.text()
//     }).then((data) => {
//     console.log(data)
//     document.getElementById("divdata").innerText = data
//     }).catch((error) => { console.log(error) })
//     }
    