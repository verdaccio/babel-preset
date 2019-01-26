# @verdaccio/babel-preset

Configurable Babel preset for Verdaccio projects

## Usage

To use the preset in your `.babelrc` file, you have to add it using:

```json
{
  "presets": ["@verdaccio"]
}
```

### Options

Flow transpile is enabled by default, but can be explicitely enabled like:

```json
{
  "presets": [["@verdaccio", {"flow": true}]]
}
```

To use Typescript

```json
{
  "presets": [["@verdaccio", {"typescript": true}]]
}
```

To use a different Node targed version (by default is `6.10`)

```json
{
  "presets": [["@verdaccio", {"node": "6.10"}]]
}
```

Enable debug

```json
{
  "presets": [["@verdaccio", {"debug": true}]]
}
```

@verdaccio/babel-preset is a open source project with [MIT license](LICENSE)
