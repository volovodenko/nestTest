## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test exception

Open console in browser.
Run the code:

```
var myHeaders = new Headers();
myHeaders.append( "Content-Type", "multipart/form-data");

var formData = new FormData();
formData.append('name', 'John');
formData.append('surname', 'Doe');

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formData,
    redirect: 'follow'
};

var requestOptions1 = {
    method: 'GET'
};

fetch("https://raw.githubusercontent.com/rmolinamir/typescript-cheatsheet/master/TypeScript.png", requestOptions1)
    .then(response => response.blob())
    .then(result => {
        // Attach file
        formData.append('photo', result);

        console.log(result);

        fetch("http://localhost:3000/hello", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        })
    .catch(error => console.log('error', error));
```

And then remove

```
myHeaders.append( "Content-Type", "multipart/form-data");
```

and run code in browser again.
