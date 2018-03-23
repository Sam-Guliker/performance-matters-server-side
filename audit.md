## Audit
Compression with `npm compression` will use gzip and deflate.

### Npm
```
npm install compression
```

### Api
```Javascript
var compression = require('compression')
```

### Usage
```Javascript
var compression = require('compression')
var express = require('express')

var app = express()

app.use(compression())

```
Testing with lightouse:
### Without compression
![without compression](images/performance.png)
### With compression
![with compression](images/performance-with.png)

## Speed:
### Without compression
![network](images/network.png)
### With compression
![network](images/networkwith.png)
