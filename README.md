# px2rem-loader

a [webpack](http://webpack.github.io/) loader for [px2rem](https://github.com/songsiqi/px2rem)

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
