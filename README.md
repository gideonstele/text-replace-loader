# Text Replace Loader

## Install

```bash
npm install --save-dev text-replace-loader
```

## Usage

**replacement.js**

```javascript
module.exports = {
  'dev': {
    'NAME' :'Hello, Kitty!',
    'FETCH_URL' :'http://localhost:8080/path/to/res',
  },
  'prod': {
    'NAME' :'Hello, World!',
    'FETCH_URL' :'http://prod.your-site/path/to/res',
  }
}
```

**webpack.config.js**

```javascript

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|css)$/,
        use: [
          {
            loader: 'text-replace-loader',
            options: {
              prefix: '__',
              replacement: require('./replacement')[process.env.NODE_ENV]
            }
          }
        ]
      }
    ]
  }
}

```

### Opotions

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|*prefix*|`String`|`__`|The prefix identifier of the placeholder which will be matched.|
|*replacement*|`Object`|`{}`|The matched data which should be key-value pairs, and the keys can not need to be prefixed.|
