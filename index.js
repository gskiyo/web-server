const express = require('express')
const path = require('path');
const app = express()

app.use(express.urlencoded({ extended: false}));
// console.log(__dirname);

app.use(express.static(path.join(__dirname, "public")))

// app.get('/', function (req, res) {
//     console.log(req);
//   res.send('<h1>トップページ!!</h1>');
// })

// 開閉指示関連
app.post('/api/v1/quiz', function (req, res) {
    const answer = req.body.answer;
    console.log(answer);
    if(answer === "2"){
        // res.send("<h1>正解！</h1>");
        res.redirect("/correct.html");
    }else{
        // res.send("<h1>不正解！</h1>");
        res.redirect("/wrong.html");
    }
    
  })

//   mqtt接続関連
  app.post('/api/v1/mqttconnect', function (req, res) {
    const answer = req.body.answer;
    console.log(answer);
    console.log("Mqtt process");
    if(answer === "2"){
        // res.send("<h1>正解！</h1>");
        res.redirect("/correct.html");
    }else{
        // res.send("<h1>不正解！</h1>");
        res.redirect("/mqttinfo.html");
    }
    
  })

//   ここで設定値関連をしてみようか
  app.get('/api/v1/users', function (req, res) {
    res.send({
        name: "Mike",
        age: 30
    })
  })
  
const PORT = process.env.PORT || 3000;
console.log(PORT);

app.listen(PORT,function(){
    console.log("I am runnung");
})
