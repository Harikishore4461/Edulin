const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors')
const router = require('./router/router')
const port = 4200;

app.use(bodyparser.json())
app.use(cors())
app.use('/',router)

// var request=require('request');

// var options = {
// //   host: 'www.google.com',
//   path: '/course',
//     headers: {
//         "Accept": "application/json, text/plain, */*",
//         "Authorization": "Basic QnN5V1VUckJKVEd5THcwcVQ5Y2R1NTVaVzlRN0tONG1JTUZkQkZZdzpvNFhCdzdoVmFlWDA4dmpmZ1lGSjJsOHFBenpCTUFBcWdjeXJReDlkMzBtR1Bib0pidFVYa1VTY3N2ekFqVzRseENGUFNkMmFFcmd1T0JIVFAzSmdjbFhvNmVpOUpLVDc5ejYwOWFMbnBITEI0Y1VjRUlGeWtDZGFZaHU5Q1ExcQ==",
//         "Content-Type": "application/json;charset=utf-8"    
//     }
// };

// request.get('https://www.udemy.com/api-2.0/courses/?page=1&search=python&price=price-free&instructional_level=beginner',options,function(err,res,body){
//   if(err){
//     console.log("HELLO")
//   } 
//   if(res.statusCode === 200 )
//   {
//     // console.log("HELLO!!")
//     var parsed = JSON.parse(res.body);
//     var arr = parsed.results
//     for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i].title)
//             console.log(`https://www.udemy.com${arr[i].url}`)
//             console.log("-------------------------------------------------")
        
//     }
//   } //etc

// });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))