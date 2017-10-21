# Coffee@CU

To run locally, clone the repo with `git clone https://github.com/thecolumbialion/coffeecu.git` so that you get the submodule for [materialize-custom](https://github.com/parthibanloganathan/materialize-custom) as well.

You need to create a file called `settings.json` at `coffeecu/` formatted as follows:
```
{
  "public": {
    "recaptcha": {
      "key": [
        "<RECAPTCHA KEY>"
      ]
    }
  },
  "private": {
    "mailgun": {
      "username": [
        "<MAILGUN USERNAME>"        
      ],
      "password": [
        "<MAILGUN PASSOWRD>"
      ]
    },
    "google": {
      "clientId": [
        "<GOOGLE CLIENT ID>"
      ],
      "secret": [
        "<GOOGLE CLIENT SECRET>"
      ]
    },
    "recaptcha": {
      "secret": [
        "<RECAPTCHA SECRET>"
      ]
    },
    "admins": [
      "<ID OF ADMIN>"
    ]
  }
}

```

Install Meteor first with `curl https://install.meteor.com/ | sh`. Finally perform `./run.sh` to start the app and view it in your browser at `http://localhost:3000`.

To restore a database given a database dump (you can ask Lesley to grab one), use . `mongorestore -h 127.0.0.1 --port 3001 -d meteor PATH` where `PATH` is the path to your restoration directory.

Tested on Chrome and Safari. ¯\\\_(ツ)_/¯


Dependencies
------------
For login:
- accounts-password
- accounts-google
- acccounts-ui
- service-configuration
- useraccounts:core
- useraccounts:materialize
- useraccounts:iron-routing

For styling:
- materialize:materialize-custom
- semantic:ui
- fourseven:scss (to compile SCSS for materialize)

For email:
- cunneen:mailgun (need to create Mailgun account too)

For search:
- easy:search

For image upload:
- tomi:upload-server
- tomi:upload-jquery

For routing:
- iron:router

For bug tracking:
- meteorhacks:kadira

For SEO:
- manuelschoebel:ms-seo

For recaptcha:
- bratanon:recaptcha

Hacks:
-----
materialize:materialize-custom is found in `/packages` and is pulled from [the GitHub repo](https://github.com/Dogfalo/materialize) and has the following modifications:
`sass/components/_variables.scss` is modified for a custom color scheme. But we have to compile this scss. So in `package.js`, we add `api.use('fourseven:scss');` and 
```
  api.addFiles([
    'dist/js/materialize.js',
    // Added custom
    'sass/components/_buttons.scss',
    'sass/components/_cards.scss',
    'sass/components/_carousel.scss',
    'sass/components/_chips.scss',
    'sass/components/_collapsible.scss',
    'sass/components/_color.scss',
    'sass/components/_dropdown.scss',
    'sass/components/_form.scss',
    'sass/components/_global.scss',
    'sass/components/_grid.scss',
    'sass/components/_icons-material-design.scss',
    'sass/components/_materialbox.scss',
    'sass/components/_mixins.scss',
    'sass/components/_modal.scss',
    'sass/components/_navbar.scss',
    'sass/components/_normalize.scss',
    'sass/components/_prefixer.scss',
    'sass/components/_preloader.scss',
    'sass/components/_roboto.scss',
    'sass/components/_sideNav.scss',
    'sass/components/_slider.scss',
    'sass/components/_table_of_contents.scss',
    'sass/components/_tabs.scss',
    'sass/components/_toast.scss',
    'sass/components/_tooltip.scss',
    'sass/components/_typography.scss',
    'sass/components/_variables.scss',
    'sass/components/_waves.scss',
    'sass/components/date_picker/_default.date.scss',
    'sass/components/date_picker/_default.scss',
    'sass/components/date_picker/_default.time.scss',
    'sass/materialize.scss',
    //
  ], 'client');
```
