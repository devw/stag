### Testing the scripttag

1. in the JS console run the these commands

```
state = {...} // from Amazon S3>kastor-customize-saves>__templates/>login-popup/>*.json

customize(state)
customize(state, 'register')
```

### Access the Shadow-DOM

```
const sd = document.body.querySelector('login-popup').shadowRoot;
sd.querySelectorAll('[type="radio"]');
```
