import express from 'express';
import models from './src/data/models';
const app = express();

app.get('/clubs', function (req, res, next) {
  models.Club.findAll()
    .then(function (data) {
      res.status(200)
        .json({
          data: data
        })
    })
})

app.listen(3000, function() {
  console.log(`running on 3000`);
});
