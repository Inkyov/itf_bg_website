import promise from 'bluebird';
import pgpomise from 'pg-promise';

const options = {
  promiseLib: promise
}

const pgp = pgpomise(options);
const connectionString = 'martininkyov://localhost:5432/participants';
const db = pgp(connectionString);

function getAllParticipants(req, res, next) {
  db.any('select * from participants')
    .then(function (data) {
      res.status(200)
        .json({
          data: data
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getClubParticipants(req, res, next) {
  db.any(`select * from participants where club_id = ${req.club_id}`)
    .then(function (data) {
      res.status(200)
        .json({
          data: data
        })
        .catch(function (err) {
          return next(err);
        });
    })
}

function createParticipant() {

}

module.exports = {
  getAllParticipants,
  getClubParticipants,
  createParticipant
};
