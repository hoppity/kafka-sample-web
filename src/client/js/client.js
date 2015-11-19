import Debug from 'debug';
import App from '../../app';

var attachElement = document.getElementById('app');

var state = {
  items: [{
    name: 'AXJO',
    price: 5122.60
  }, {
    name: 'AORD',
    price: 5181.10
  }, {
    name: 'AAPL',
    price: 116.12
  }, {
    name: 'GOOG',
    price: 735.40
  }, {
    name: 'YHOO',
    price: 33.38
  }]
};

var app;

Debug.enable('myApp*');

// Create new app and attach to element
app = new App({
  state: state
});

app.renderToDOM(attachElement);