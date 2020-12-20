# serieschecker-api

SeriesChecker API Project

## Requirements

- nodejs v14.15.3
- npm v6.14.9

## Getting Started

1. clone it
    ```
    git clone https://github.com/CheolHoSin/serieschecker-api.git
    ```
1. install and copy configuration sample file
    ```
    cd serieschecker-api
    npm i
    cp ./config/config.sample.yaml ./config/config.yaml
    ```
1. Run and enjoy it
    ```
    npm run start
    curl -XGET http://localhost:8424/api/v1/hello
    ```

## Development

```
npm run start-dev
```

## Testing

```
NODE_ENV=testing npm run test
```

## Coverage

```
NODE_ENV=testing npm run cover
```

## Code Conventions

Custom Javascript Covention based on [airbnb](https://github.com/airbnb/javascript).

See `.eslintrc.yaml`

## License

MIT

## Author

- uzulove <uyio2002@gmail.com>