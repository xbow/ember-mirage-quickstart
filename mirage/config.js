export default function () {
  this.namespace = 'api';

  /* 
     The following are default functions that return all models of type 'user' that exist in mirage. 
     'Exist' means that they have been generated at runtime, either as part of a test or in 
     /mirage/scenarios/default.js
  */
  this.get('/users');
  this.get('/users/:id');
  this.get('/restaurants');

  /* Alternatively, the function below returns a hard-coded json response

  this.get('/users', () => {
    return { 
      data: [
        { id: 1, type: 'users', attributes: { 'first-name': 'Jane', 'last-name': 'Doe' } },
        { id: 2, type: 'users', attributes: { 'first-name': 'Alan', 'last-name': 'Smithee' } },
      ]
    };
  });

  */
}
