
### API 


```sh
  + Clone project 
  + Naviagte to folder 
  + npm install 
  + npm start (server will start on 3000 port)

```




```sh 
   http://localhost:3000/api/v1/getusers
   Method : Get
   
   {
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Emma",
                "last": "Pesola"
            },
            "location": {
                "street": {
                    "number": 2382,
                    "name": "Mechelininkatu"
                },
                "city": "Toholampi",
                "state": "Tavastia Proper",
                "country": "Finland",
                "postcode": 80399,
                "coordinates": {
                    "latitude": "-11.9046",
                    "longitude": "50.1490"
                },
                "timezone": {
                    "offset": "+9:30",
                    "description": "Adelaide, Darwin"
                }
            },
            "email": "emma.pesola@example.com",
            "login": {
                "uuid": "3b7e36ee-cce3-4f33-8572-a534b1e45d0c",
                "username": "blackostrich410",
                "password": "japan",
                "salt": "X5n9mncv",
                "md5": "33815fe1448e1d575f58ce34ca8eabaf",
                "sha1": "2aefbe3f2198a7203544dae6f0ed9c01dbd329b2",
                "sha256": "f72a57fa69fe95b4285cd7abaa077c09448f6808632273e26fa7dae9ff2d5570"
            },
            "dob": {
                "date": "1956-03-10T21:15:13.654Z",
                "age": 64
            },
            "registered": {
                "date": "2006-08-30T03:32:09.881Z",
                "age": 14
            },
            "phone": "02-833-807",
            "cell": "047-470-78-97",
            "id": {
                "name": "HETU",
                "value": "NaNNA604undefined"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/70.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/70.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/70.jpg"
            },
            "nat": "FI"
        }
    ],
    "info": {
        "seed": "c8291eb032859cc1",
        "results": 1,
        "page": 1,
        "version": "1.3"
    }
}


```

```sh
   http://localhost:3000/api/v1/getusers
   Method : Get
   Descri : Get Male summery from DB  

   [
    {
        "_id": "CH",
        "0-30": 0,
        "30-50": 0,
        "50plus": 1
    },
    {
        "_id": "NL",
        "0-30": 0,
        "30-50": 1,
        "50plus": 1
    }
]


```




```sh
    http://localhost:3000/api/v1/getfemalereoprt
    Method : Get
    Descri : Get Female Summery from DB  
      [
    {
        "_id": "NL",
        "0-30": 0,
        "30-50": 0,
        "50plus": 1
    },
    {
        "_id": "GB",
        "0-30": 0,
        "30-50": 0,
        "50plus": 1
    },
    {
        "_id": "FI",
        "0-30": 0,
        "30-50": 1,
        "50plus": 1
    },
    {
        "_id": "FR",
        "0-30": 1,
        "30-50": 0,
        "50plus": 0
    },
    {
        "_id": "DK",
        "0-30": 0,
        "30-50": 0,
        "50plus": 1
    }
]
```