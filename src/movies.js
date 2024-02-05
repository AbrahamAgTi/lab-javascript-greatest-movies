// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    const stevenMovies = moviesArray.filter(
        (movie) => movie.director == "Steven Spielberg"
      );
    
     return stevenMovies.filter(element => element.genre.includes("Drama")).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    if (moviesArray.length == 0)  {
        return 0
    } 
  
  
    else {
  
       const arrayFilter = moviesArray.filter(element => element.score)
       const scoreList = arrayFilter.map(element => element.score)
       let average = scoreList.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / scoreList.length
      return Number(average.toFixed(2))
    }


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const listfiltered = moviesArray.filter(element => element.genre.includes("Drama"))

    if (listfiltered.length == 0) {
        return 0
    } else {
        const scoreList = listfiltered.map(element => element.score)
        const sum = scoreList.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        let average = sum / scoreList.length
        average = average.toFixed(2)
        return Number.parseFloat(average)
    }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
    const sortedByYearArray = [...moviesArray] 
    sortedByYearArray.sort((a, b) =>  
       a.year - b.year) 
       
    return sortedByYearArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const titleArray = [];
    
    for (let i=0; i < moviesArray.length; i++){
        titleArray.push(moviesArray[i].title)
    }
    const sortedAlpha = titleArray.sort();
    if (sortedAlpha.length > 20){
        return sortedAlpha.slice(0,20)
    }
    else {
        return sortedAlpha
   }
 

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
        
    // Get an array of all arrays by year (an array for 1971, an array for 1973, etc...)
    const years = []

    // get an array of only years
    moviesArray.forEach(movie => {

        if (!years.includes(movie.year)) {
            years.push(movie.year)
        }

    })

    // change the array of [ year ] to an array of [{ year, score }]
    const moviesData = years.map(year => {

        // get an array of movies for each specific year
        const moviesFromYear = moviesArray.filter(movie => movie.year === year)

        return {
            year,
            score: scoresAverage(moviesFromYear),
        }

    })

    // Sort by score to get the highest year score
    moviesData.sort((a, b) => {
        return a.averageScore - b.averageScore
    })

    // Extract year and score from the movie with highest score
    const { year, score } = moviesData[moviesData.length - 1]

    return `The best year was ${year} with an average score of ${score}`
}
