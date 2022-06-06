# Step by step - how I created this app

These notes are a bit messy / WIP, will clean them up later!



## 0. Good to remember

### Set script execution policy

Work in an elevated Windows Power Shell and always perform:

```
Set-ExecutionPolicy Unrestricted -scope Process
```

#### More on running Ember in Windows:

https://cli.emberjs.com/release/appendix/windows/

Also look at the section concerning symlinks:

https://cli.emberjs.com/release/appendix/windows/#enablingsymlinks

### More helpful links:

Mirage docs: https://www.ember-cli-mirage.com/docs

Don't trust Google for mirage docs - google will often find docs for a very outdated version.

Faker: https://fakerjs.dev/guide/ (used to seed data in factories)

Actually, it does not work as documented, but we can use `ember-faker` instead:
https://www.npmjs.com/package/ember-faker





## 1. Initial setup

In an elevated Windows Power Shell:

```
Set-ExecutionPolicy Unrestricted -scope Process
```

```
Ember new app-name
```

Then try if starting it works:

```
ember serve
```




## 2. Add a route

### Add a 'users' route & template

```
ember generate route users 
```

Next steps:
* Create a model hook in `routes/users.js` with hard coded data
* Iterate over the users and render their names in `templates/users.hbs`

Outcome:
* It should now be possible to visit `localhost:4200/users` and see the users.




## 3. Use mirage as a mock-backend in development

### Install mirage

Install mirage as described here: https://www.ember-cli-mirage.com/docs/getting-started/installation
```
ember install ember-cli-mirage
```

Make sure ember creates the expected files. This is the expected output when running the above command:

```
Installing packages... This might take a couple of minutes.
npm: Installed ember-cli-mirage
installing ember-cli-mirage
  create \mirage\config.js
  create \mirage\scenarios\default.js
  create \mirage\serializers\application.js
Installed addon package.
```

If these files are not created, this may be due to the script execution policy described above under "Initial setup"


### Configure mirage

Set up the namespace 'api' in `mirage/config.js` 

(We will later set up ember to request data from `localhost/api/model-name`)


### Hard code endpoint with data in mirage 

In `mirage/config.js`, add:
```
  this.get('/users', () => {
    return {
      data: [
        { id: 1, type: 'users', attributes: { name: 'Jane Doe' } },
        { id: 2, type: 'users', attributes: { name: 'Alan Smithee' } }
      ]
    }
  })
```

### In Ember, set up an application adapter and serializer:

Generate an application adapter and set namespace to `api` as well,
so ember-data will try to fetch from data from `localhost/api/model-name`.

```
ember g adapter application
```
and add to `app/adapters/application.js`:
```
  namespace = 'api'
```

It may also be necessary to set up a serializer (I got an error message otherwise in ember 4.4, in earlier versions this wasn't neccessary).

```
ember g serializer application
```

### Add a user model and mock a corresponding endpoint in mirage

```
ember g model user
```

Define a model based on the example found here:
https://guides.emberjs.com/release/models/defining-models/#toc_defining-attributes


Disable linter warnings about decoraters: Create a file `jsconfig.json` with this content:
```
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```


### Update model() in the users route to fetch data

* inject dependency: store
* use this.store.findAll('user') to fetch users


### Use mirage as the backend in development mode

edit the relevant section in `config/environment.js` to reflect this:
```
  if (environment === 'development') {
    console.info('Starting in env "development" with mirage backend')
    ENV['ember-cli-mirage'] = {
      enabled: true
    }
  }
```

Restart ember for this to take effect.




## 4. Dynamically generate mock-data in mirage

### Set up mirage to use a JSON-API serializer:

Setup a serializer so the mock-backend will be JSON-API compliant (we set up
ember to expect this):

```
ember generate mirage-serializer application
```

And edit it to look like this:
```
import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  
});
```


### Install ember-faker

ember-faker is used to create random data for our mocked models.

The docs are confusing in this regard. In some versions, faker was bundled with mirage
but apparently, that is no longer the case.

As of now, `ember-faker` seems to be the best option.

```
ember install ember-faker
```

Create a factory:

```
ember generate mirage-factory user
```

Faker can now be imported like this:
```
import faker from 'faker'
```

Other ways to import found in the docs did not seem to work, bear that in mind below.


### Define a factory

And edit the created file. See here for details/examples:
https://www.ember-cli-mirage.com/docs/data-layer/factories

Furthermore, let's generate 'users' in the mirage/scenarios/default.js:
```
server.createList('user', 7)
```


## EOF