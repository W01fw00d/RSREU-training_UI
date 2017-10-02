import { concatUrlParams } from './utils';

const PORT = '8080';

export const api = {
  getHistoryData: (callback) => callback([
    { id: 1, move: 'added', book: 'The Trial', author: 'Franz Kafka', text: 'to your Must Read Titles', time: '2 years' },
    { id: 2, move: 'added', book: 'Fight Club', author: 'Chuck Palahniuk', text: 'to your Must Read Titles', time: '2 years' },
  ]),
  getCategoriesData: (callback) => (
    fetch(`http://localhost:${PORT}/api/categories`)
      .then(response => callback([
        { id: 1, title: 'Must Read Titles', color: '#ff517e' },
        { id: 2, title: 'Best Of List', color: '#ffb700' },
        { id: 3, title: 'Classic Novels', color: '#03bedf' },
        { id: 4, title: 'Non Fiction', color: '#847ede' },
      ]))
  ),
  getInitData: (search, callback) => (
    fetch(`http://localhost:${PORT}/api/filters`)
      .then(response => {
        const filters = [
          { id: 1, title: 'All Books', active: true },
          { id: 2, title: 'Most Recent', active: false },
          { id: 3, title: 'Most Popular', active: false },
          { id: 4, title: 'Free Books', active: false },
        ];

        fetch(`http://localhost:${PORT}/api/books?`)
          .then(response => {
            const books = [
              { id: 1, title: 'Jewels of Nizam', author: 'Geeta Devi', img: 'JewelsOfNizam.jpg', stars: 5, labels: 'label1' },
              { id: 2, title: 'Cakes & Bakes', author: 'Sanjeev Kapoor', img: 'CakesAndBakes.jpg', stars: 5, labels: 'label1' },
              { id: 3, title: 'Jamie\'s Kitchen', author: 'Jamie Oliver', img: 'JamiesKitchen.jpg', stars: 4, labels: 'label1' },
              { id: 4, title: 'Inexpensive Family Meals', author: 'Simon Holst', img: 'InexpensiveFamilyMeals.jpg', stars: 3, labels: 'label2' },
              { id: 5, title: 'Paleo Slow Cooking', author: 'Chrissy Gawer', img: 'PaleoSlowCooking.jpg', stars: 4, labels: 'label1' },
              { id: 6, title: 'Cook Like an Italian', author: 'Toble Puttock', img: 'CookLikeAnItalian.jpg', stars: 3, labels: 'label1' },
              { id: 7, title: 'Suneeta Vaswani', author: 'Geeta Devi', img: 'SuneetaVaswani.jpg', stars: 5, labels: 'label2' },
              { id: 8, title: 'Jamie Does', author: 'Jamie Oliver', img: 'JamieDoes.jpg', stars: 3, labels: 'label2' },
              { id: 9, title: 'Jamie\'s Italy', author: 'Jamie Oliver', img: 'JamiesItaly.jpg', stars: 5, labels: 'label1' },
              { id: 10, title: 'Vegetables Cookbook', author: 'Matthew Biggs', img: 'VegetablesCookbook.jpg', stars: 3, labels: 'label2' }
            ];

            callback({ filters, books });
          });
      })
  ),
  updateBook: (params, callback) => (
    fetch('http://localhost:3000/update-book-api/?' + concatUrlParams(params))
      .then(response => callback({ history: response.history, books: response.books }))
  ),
  getBooks: (params, callback) => (
    fetch(`http://localhost:${PORT}/api/books?` + concatUrlParams(params))
      .then(response => callback({ books: response }))
  ),
  addBook: (params, callback) => (
    fetch('http://localhost:3000/add-book-api/?' + concatUrlParams(params))
      .then(response => callback({ books: response.books, history: response.history }))
  ),
};
