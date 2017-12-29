# app-demo

With [Get Started](https://docs.canner.io/en/get-started), you can build a CMS using Firebase as backend in minutes.

## Steps

#### 1. Create a new project at Firebase
#### 2. Install [Firebase Tool](https://github.com/firebase/firebase-tools)
#### 3. Enable Anonymous login at your Firebase project
#### 4. Install `@canner/cli`
#### 5. Create project at Canner, set up your Firebase settings on your project.
#### 6. Update `public/index.html` Firebase config.

```js
  var config = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID"
  };
```

6. Deploy your website on [Firebase hosting](https://firebase.google.com/docs/hosting/)

Select project

```
  firebase init
```

Deploy host

```
  firebase deploy
```

7. Deploy your data to Firebase, and schema to Canner through Canner cli tool.

Deploy schema

```
  canner schema:deploy
```

Import data

```
  canner data:import
```

## Reference

- Firebase CLI: https://github.com/firebase/firebase-tools
- Firebase hosting: https://firebase.google.com/docs/hosting/

## License
The MIT License (MIT)

Copyright (c) 2017, Canner.

Permission is hereby granted, free of charge, to any person obtaining a 
copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS 
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.
