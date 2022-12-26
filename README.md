Repository - https://github.com/ferlobo1985/UDMY-REACT-FS-Flickbase/blob/master/info.md

# Installations Flickbase
<img width="520" alt="image" src="https://user-images.githubusercontent.com/56376002/209423582-b41d3535-479d-4f8a-a5b7-056515b06edb.png">
    "react-router-bootstrap": "^0.26.1",

    "formik": "^2.2.9",
    "yup": "^0.32.11"
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@mui/icons-material": "^5.6.2",
    "@mui/material": "^5.7.0",

    "draft-js": "^0.11.7",
    "draft-js-export-html": "^1.4.1",
    "react-draft-wysiwyg": "github:jpuri/react-draft-wysiwyg#pull/1245/head",

    "react-cookies": "^0.1.1",
    "react-moment": "^1.1.2",
    "react-toastify": "^9.0.1",
    
# Add git ignore file globally and add the ignored files
<img width="520" alt="image" src="https://user-images.githubusercontent.com/56376002/209457676-d2255165-92bd-4897-9e42-2b31f1f9aa48.png">

# Dotnet package 
`Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.`

<img width="908" alt="image" src="https://user-images.githubusercontent.com/56376002/209458165-a60e43ab-7564-432b-af67-8b0897db2d08.png">

- go to mongodb cloud service -and create a db - from connect get the uri link
- Now here we don't want our `Password` to be pushed to git or anywhere and be seen by anyone, so we use dotnet, so it let's us create a file called dot .env and it's like the enivronment file that we have on the server, but in our case it will only work on the dev dependencies
Because we are not putting it on git hub( remember in gitignore we added the .env to ignore it)
``So we are not sharing our keys with anyone else``

## How the env works
- we need to select or we need to create kind of a keyword and then this one is going to be equal to something
 in this case, lets just go just server we have right here the `cluster,for example. So this is going to be the host.`
- So if I select this, this is my host right now
<img width="1214" alt="image" src="https://user-images.githubusercontent.com/56376002/209457770-15260e70-f8e4-48df-8354-e04c023d1174.png">

-S0 here , my host is `@cluster0.vi7ylhq.mongodb.net/cakeDatabase` = DB host;
- In .env file add the DB_HOST = ;
- in server.js file add the require dotenv config , so it makes the .env file available here to use

<img width="1214" alt="image" src="https://user-images.githubusercontent.com/56376002/209457836-aae1f101-94f4-4f8d-a398-5e50c285fc0f.png">

### All right, so why is this so important?
- whenever we put this in production, it is going to look into the noode env, `process.env.DB_host`, and if it doesnot find it in the mongoUri, then it wont be able to connect to the mongo db .
- But when we put to we put it in production. we don't need to change the variables. `process.env.DB_host`. and in prod it's going to be whatever we set on Heroku in this case.
(So, we don't have to do this work twice -- we set up once for both local dev and production)


### Creating models (Articles and users) and routes
- Add models -
- Creating User schema with mongoose
- `npm i validator` - to add validatoions 
  <img width="611" alt="image" src="https://user-images.githubusercontent.com/56376002/209461803-1857fade-2629-493f-8091-ca9eb4bbc267.png">
  
  <img width="611" alt="image" src="https://user-images.githubusercontent.com/56376002/209500534-30a2b9f5-2bb9-4e51-987c-2acc90212dbd.png">

  <img width="611" alt="image" src="https://user-images.githubusercontent.com/56376002/209461803-1857fade-2629-493f-8091-ca9eb4bbc267.png">
  
  - Adding user, password, roles(admin, user)
  - So the only thing we have right now is the models. 
  - Right now, what we need to do is create the routes so we can, store data using the models.

