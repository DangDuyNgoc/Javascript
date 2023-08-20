//"Flat" - làm phẳng mảng
var dethArray = [1, 2, [3,4], 5, 6, [7, 8, 9]];

var flatArr = dethArray.reduce(function(flatOutput, dethItem){
    console.log(flatOutput);
    console.log(dethItem);
    return flatOutput.concat(dethItem);
}, []);

console.log(flatArr);

// Lấy ra các khoá học đưa vào một mảng mới
var topics = [
    {
        topic: "Front-end",
        course: [
          {
              id: 1,
              title: "HTML, CSS"
          },
          {
              id: 2,
              title: "Javascript"
          }
        ]
    },
    {
        topic: "Back-end",
        course: [
          {
              id: 1,
              title: "PHP"
          },
          {
              id: 2,
              title: "NodeJS, MySQL"
          }
        ]
    },
];

var newCourses = topics.reduce(function(name, main){
  return name.concat(main.course);
}, []);

console.log(newCourses);

var htmls = newCourses.map((course) => {
  return `
    <div> 
      <h2>${course.title}</h2>
      <p>ID:${course.id}</p>
    </div>
  `
})
var html = htmls.join('');
document.getElementById('block').innerHTML = html
//
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
  }
];

function calculateRating(arr) {
   
  var a = arr.filter((e)=>{
    return e.Director ==='Christopher Nolan';
  });
    var imdb = a.reduce(function(total, score){
    return  (total + parseFloat(score.imdbRating)) 
  },0)
  return imdb / a.length;
}

console.log(calculateRating(watchList));

console.log(calculateRating(watchList));

// phương thức reduce() có logic như thế nào?
Array.prototype.reduce2 = function(callback, result) {
  let i = 0;
  if(arguments.length < 2) {
    i =1;
    result = this[0];
  }
  for( ;i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
}

const number = [1,2,3,4,5];

// trường hợp không truyền initial value, lấy phần tử đầu tiên làm initial value
const results = number.reduce2((total, index)=> {
  return total + index;
});

console.log(results);

// trường hợp truyền initial value
const result2 = number.reduce2((total, index)=> {
  return total + index;
}, 10)

console.log(result2);
