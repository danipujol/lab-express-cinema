const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;



router.get("/movies", (req, res, next) => {

   Movie.find() 
  .select({title: 1, image: 1})
.then((response) => {
    console.log(response)

    res.render("movies.hbs", {
        allMovies: response
    })

})
.catch((error) => {
    next(error)
})

})


router.get("/movies/:movieId", async (req,res, next)=>{
    try{
        const response = await Movie.findById(req.params.id)
        console.log(response);
        res.render("details.hbs", {
           movieMore: response 
        })
    } catch (error) {
        next(error)
      }

})