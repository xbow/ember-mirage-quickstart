export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

  this.namespace = 'api';
  
  /* 
     The following is a default function that returns all models of type 'user' that exist in mirage. 
     'Exist' means that they have been generated at runtime, either as part of a test or in 
     /mirage/scenarios/default.js
  */
  this.get('/users')


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
