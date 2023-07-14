// server/data.js

const img1 = require('../images/img1.jpg'); // Replace with the correct image file path
const img2 = require('../images/img2.jpg'); // Replace with the correct image file path
const img3 = require('../images/img3.jpg'); // Replace with the correct image file path
const img4 = require('../images/img4.jpg'); // Replace with the correct image file path
const img5 = require('../images/img5.jpg'); // Replace with the correct image file path

const data = [
  {
    _id: '1',
    title: 'Lion King',
    author: 'author 1',
    image: img1,
  },
  {
    _id: '2',
    title: 'Little Kids',
    author: 'Author 2',
    image: img2,
  },
  {
    _id: '3',
    title: 'Cinderella',
    author: 'Author 3',
    image: img3,
  },
  {
    _id: '4',
    title: 'Clifford',
    author: 'Author 4',
    image: img4,
  },
  {
    _id: '5',
    title: 'I Beleive I can',
    author: 'Author 5',
    image: img5,
  },
];

export default data;
