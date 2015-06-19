# px2rem-loader

## webpack config

```
{
  loaders: [{ test: /\.css$/, loader: "style!css!px2rem" }],
}
```

or

```
{
  loaders: [{ test: /\.vue$/, loader: vue.withLoaders({css: 'css!px2rem'})}],
}
```
