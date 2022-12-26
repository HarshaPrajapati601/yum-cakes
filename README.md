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

  <img width="611" alt="image" src="https://user-images.githubusercontent.com/56376002/209461803-1857fade-2629-493f-8091-ca9eb4bbc267.png">
  
  - Adding user, password, roles(admin, user)
  - So the only thing we have right now is the models. 
  - Right now, what we need to do is create the routes so we can, store data using the models.

  <img width="611" alt="image" src="https://user-images.githubusercontent.com/56376002/209500534-30a2b9f5-2bb9-4e51-987c-2acc90212dbd.png">
  
  
  ### Routes directory
  
  `server.js ---> route.use('/api', routeFile) -->  index.js --> route ---> controller ---> services`
  
  1. So from the server we are going to create kind of a link to a middleware, that middleware is going to be an index.js of a route inside the route               directory.
  2. So that index will kind of a kind of a sum, of all the different routes that we have on our API routes
     because this is an API server.Of course, you can extend this and create as many routes as you wish, but in this case it's goingto be an API route.
  3. whenever we go to an API, the index.js is going to be looking to whatever that comes after the API (api/) route.
  4. So if it's going to be example -  `myapp.com/api/auth` so the index will know its /auth, so it's going to redirect whatever file path given.
  5. So this index knows and then it's going to be redirecting whatever action we want to do to the
        file or the route that it's going to be handling all /auth routes
  6. So this one, of course is going to take a look of the /auth routes and see if we get a get/ post / a put /patch or if we have a something more complex      like params or something like that, and it will call a controller.
  7. So the `controller is going to be in charge of executing everything`. So the `controller is the one that has the request, the response and provides        the response`.
  8. And then we are going to be using services to kind of reuse some functions that we need.

- creating a route folder --> creating index.js
- In server.js we will import the routes and then use app.use() - want to go to something called /API, which is, you know, dot com, 
, we are going to be using this route file to decide what we want to do.

#### step 1.
- In server.js file

<img width="611" alt="image" src="https://user-images.githubusercontent.com/56376002/209506766-a0470cbb-a963-4331-adce-786ed7dc0a12.png">

#### step 2.

<img width="611" alt="image" src="https://user-images.githubusercontent.com/56376002/209506825-c20e3487-b04e-47fa-aa27-5a47b717b778.png">

#### step 3.

<img width="611" alt="image" src="https://user-images.githubusercontent.com/56376002/209506849-a6b46cba-c452-4ca8-a805-1282bc6d1173.png">

#### step 4.

<img width="611" alt="image" src="https://user-images.githubusercontent.com/56376002/209506873-894467c9-81a0-4c70-ad21-9cae68951fe3.png">

## Creating services
- create a service folder and add auth.service.js file now add a function to it

  <img width="488" alt="image" src="https://user-images.githubusercontent.com/56376002/209512076-d21b84b8-5e87-4181-b356-dfe7ef6e8b85.png">
  
- create a index.js file here where we will export all the required services

<img width="572" alt="image" src="https://user-images.githubusercontent.com/56376002/209512134-fa4a9372-9ada-4c3f-b243-03cd3c8df703.png">

- now, we can export the service in the controller as required

<img width="572" alt="image" src="https://user-images.githubusercontent.com/56376002/209512183-25372ecc-fcb3-43c3-be11-391f703feddf.png">


## Registering a User

`We create an endpoint (/auth/regsiter) and then we run the controller and the controller is going to provide a response.`

<img width="1093" alt="image" src="https://user-images.githubusercontent.com/56376002/209515060-ba20ae90-b429-409f-a759-cd106c305b75.png">

So now , we go to the authService and add the createUser method where- we will do these steps below - 

<img width="1093" alt="image" src="https://user-images.githubusercontent.com/56376002/209515132-fb49d323-5433-44d9-8eca-c1b34fd3e623.png">


###  1. check if email does not exist
- for this we will go to the schema add a static method which will have access to the users from mongoose db. and return from it if the user exists or not
 
 <img width="1093" alt="image" src="https://user-images.githubusercontent.com/56376002/209515258-46c94ad8-2924-4975-8c9b-a3651d06045e.png">
 
 
 <img width="1093" alt="image" src="https://user-images.githubusercontent.com/56376002/209523884-7555825a-b3d6-4366-b55f-e626d4b942a2.png">

<img width="1093" alt="image" src="https://user-images.githubusercontent.com/56376002/209523922-f840e536-3351-46b4-9bc9-68eb610ced29.png">

 - hashing the password with the salt
 
 <img width="1093" alt="image" src="https://user-images.githubusercontent.com/56376002/209523960-d8a26f4d-e939-468a-a6b5-27d79c11b260.png">

### 2. Genrating jwt token
- Now we need to send a jwt token ones the user logs in or register
- Verify the token
- send verification email
-  store the jwt as cookie 

<img width="1093" alt="image" src="https://user-images.githubusercontent.com/56376002/209525662-6abcea5a-e7f6-4644-8a96-9e59e0bf27d3.png">

In authservice.js 

<img width="1093" alt="image" src="https://user-images.githubusercontent.com/56376002/209525701-b09c9b1d-66c5-47e6-b239-48c9d0e5807c.png">

`Npm add jsonwebtoken`
- Now you need your super secret password
- Add it in .env file 
- NOW generating a token based on some user details and the super secret password

<img width="1093" alt="image" src="https://user-images.githubusercontent.com/56376002/209526635-09cc496a-8c95-4e01-a55c-5f05c56ff63d.png">

<!-- ### 3. Function to generating the email for verification  -->

- also use a cookie parser - app.use(cookieParser());

## Sign in user
 - Add a post /signin route and in the authController add the signIn method 
 - <img width="1093" alt="image" src="https://user-images.githubusercontent.com/56376002/209542750-8dd290c9-58ea-4b3a-b8ff-2e8e143a0c1e.png">
 
 - in Authservice create a method to check the user exisits with correct details 
 - Now for all user related methods which does not include auth details ,, create a userService and add a method to find by email

    <img width="528" alt="image" src="https://user-images.githubusercontent.com/56376002/209542867-68a30451-4db1-49eb-88e8-c3898d9e9e8a.png">

- Now in your auth service create a method to check both email and passwords - it returns the user
- <img width="528" alt="image" src="https://user-images.githubusercontent.com/56376002/209542936-b83505b8-6300-4662-8aae-2eac2a121725.png">

- create a method on the user schema to comparePassword  - pass the real unhashed password - it returns a true or false

    <img width="916" alt="image" src="https://user-images.githubusercontent.com/56376002/209543024-b26b86ae-878e-4653-87ca-79b523c00771.png">
    
 - create token
 - store the cookie and allow the user to sign in

## API ERROR HANDLING AND token checking

- right now we get errors like bad token or something which is just a string, but right now we want it to be like an object with error message , status code.
- to keep it consistent throught app,,when we send it to front end.
- So, how to do this?

### we need a Middleware to intercept these errors and turn them into something -usage of error class
 - Creating middlewares - ApiError.js
 - So what we want to do at the end of the day, we want to create a middleware and we want to tell the
   server, our main server in server file, that instead of using this inbuilt error handling from express, every time that we get an error,
   we want to use this (handleError)
  
  <img width="811" alt="image" src="https://user-images.githubusercontent.com/56376002/209544884-dd75b76d-2690-4e82-85a4-5146247cdc1d.png">

- now in server.js  - add the middleware
- `app.use((err,req,res,next)=>{
    handleError(err,res)
})`
-So now instead of the new Error everywhere we will use the APiError class (i.e our class extending the error class)

<img width="811" alt="image" src="https://user-images.githubusercontent.com/56376002/209546524-af5307c8-850c-4146-a14e-025237939a96.png">















