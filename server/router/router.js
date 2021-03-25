const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const uri = 'mongodb+srv://Hari:Harikishore@cluster0.bjl2j.mongodb.net/register?retryWrites=true&w=majority'
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const ObjectID = require('mongodb').ObjectID;
client.connect((err, dbInstance) => {
    if (err) {
        console.log(err)
    }
    else {

        console.log('connected to db')
    }
    const dbObject = dbInstance.db('register');
    const dbCollection = dbObject.collection('edulin');
    // SIGN UP USER
    router.post('/signup',(req,res)=>{
      const error = {};
      let data = {};
        //   FIND THE EMAIL ALREADY EXISTS
       dbCollection.findOne({email:req.body.email},(err,result)=>{
          if (err) {
            console.log(err);
          }
          // USER ALREADY EXISTS
          else if (result) {
            error.message = "This email is already registered";
            res.status(401).send(error);
          }
          else{
            dbCollection.findOne({username:req.body.username},(_err1,_result1)=>{
              if(_err1) console.log(_err1)
              else if(_result1){
                 error.message = "This username is already taken";
                 res.status(401).send(error);
              }
              else{
                // HASHING THE PASSWORD
                bcrypt.genSalt(10, (err, salt) => {
                  if (err) console.log(err);
                  bcrypt.hash(req.body.password, salt, (err, hash) => {
                    data = {
                      email: req.body.email,
                      username: req.body.username,
                      hashPassword: hash,
                      images: [],
                      profile: "",
                    };
                    // INSERT USER INFO
                    dbCollection.insertOne(data, (_err, _result) => {
                      if (_err) console.log(err);
                      else {
                        console.log(_result.ops);
                        res.send("success");
                      }
                    });
                  });
                });
              }
            })
          
          }

      })
    })
    router.post('/signin',(req,res)=>{
        console.log(req.body)
        const data = req.body
        let error = ""
        dbCollection.findOne({ email: data.email }, (err, result) => {
           console.log(result);
           if (err) {
             console.log(err);
           }
           // CHECK NAME IS EXIST
           else if (!result) {
             console.log("REg err")
              error = "This email is not registered";
              res.status(401).send(error);
           }
             // CHECK PASSWORD IS CORRECT USING BCRYPT
            bcrypt.compare(data.password,result.hashPassword,(err,results)=>{
                 if(!results){
                   error = "Password is not valid"
                   res.status(401).send(error);
                     console.log("success:M")
                 }
                 else{
                     res.send(JSON.stringify({username:result.username,profile:result.profile}))
                     console.log("success")
                 }
             });
        
         });
    });
    router.get('/hello',(req,res)=>{
      res.send("HELLO")
    })
    router.get('/course/:name/:level', (req, res) => {
      var name = req.params.name
      var level = req.params.level
      console.log("sj")
      var request=require('request');
      var arr;
      var options = {
      //   host: 'www.google.com',
        path: '/course',
          headers: {
              "Accept": "application/json, text/plain, */*",
              "Authorization": "Basic QnN5V1VUckJKVEd5THcwcVQ5Y2R1NTVaVzlRN0tONG1JTUZkQkZZdzpvNFhCdzdoVmFlWDA4dmpmZ1lGSjJsOHFBenpCTUFBcWdjeXJReDlkMzBtR1Bib0pidFVYa1VTY3N2ekFqVzRseENGUFNkMmFFcmd1T0JIVFAzSmdjbFhvNmVpOUpLVDc5ejYwOWFMbnBITEI0Y1VjRUlGeWtDZGFZaHU5Q1ExcQ==",
              "Content-Type": "application/json;charset=utf-8"    
          }
      };

      request.get(`https://www.udemy.com/api-2.0/courses/?page=1&search=${name}&price=price-free&instructional_level=${level}`,options,(err,res1,body) => {
        if(err){
          console.log(err)
        } //TODO: handle err
        if(res1.statusCode === 200 )
        {
          var parsed = JSON.parse(res1.body);
          res.status(200).send(parsed)  
          arr = parsed.results
          console.log("OK")
          // for (let i = 0; i < arr.length; i++) {
          //         console.log(arr[i].title)
          //         console.log(`https://www.udemy.com${arr[i].url}`)
          //         console.log("-------------------------------------------------")
          // }
        } //etc
        //TODO Do something with response
      });    
    }) 
});


module.exports = router