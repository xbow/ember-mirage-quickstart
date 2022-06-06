## New Walkthrough:

### Initial setup

In an elevated Windows Power Shell:

```
Set-ExecutionPolicy Unrestricted -scope Process
```

```
Ember new ember-mirage-quickstart
```

### Add a 'users' route

After installation:

```
ember generate route users 
```

Next steps:
* [x] Create a model hook in `routes/users.js` with hard coded data
* [x] Render the users in `templates/users.hbs`
* [x] Commit this step

### Add user model and mock a corresponding endpoint in mirage (did this second)

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

#### Install mirage (did this first)

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


#### Set up adapter (and serializer)

We need an application adapter to interface with the backend, and define a namespace.

```
ember g adapter application
```

and add to `app/adapters/application.js`:
```
  namespace = 'api'
```

It may also be necessary to set up a serializer (I got an error message otherwise in ember 4.4, in earlier versions this wasn't neccessary.)

```
ember g serializer application
```


#### Configure mirage

Set the namespace 'api' in `mirage/config.js`

Generate an application adapter and set namespace to `api` as well:
```
ember g adapter application
```
and add to `app/adapters/application.js`:
```
  namespace = 'api'
```

#### Hard code endpoint in mirage (we will add a factory later!)

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

#### Use mirage as the backend in development mode

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


