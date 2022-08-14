<details><summary>Appsynth Fullstack Assignment </summary>

## (04/05/22)
## Confidental
Please don't disclose this assignment with anyone. 

## Story and Goals
We plan to launch an URL Shortener service live. Your responsibility is to built the project from scratch and make sure the structure is flexible, easy to understand and easy to be supported by your team members. Since we are making a high-quality application, we should handle errors and logging properly.

## Your task
Your task is to create a scalable service with a clean architecture. We want to understand what you're able to achieve and what clean code and quality mean for you. 
You're also responsible for building the UI, you can use ReactJS or VueJS for client code.

## Expected Endpoints

**Shorten a new URL.**

- Displays a form to shorten URL
- Handles response from API (success/error) and inform the user accordingly

```
POST http://yourapp.com/shorten
```

**Retrieve original URL.**

- Accepts a `{key}` in param
- Redirect to the original URL
```
GET http://yourapp.com/{key}
```

## Requirements
 * The backend must be written in NodeJS only
 * We like Koa and Express but you can use any other framework you like
 * We like ReactJS and VueJS and want you to use one of these two frameworks
 * We prefer scalable, maintainable and testable code
 * Provide a list of security issues in your solution, and how you would fix them (Please add details in README file)
 * Provide a list of any scalability issues in your solution, and how you would fix them (Please add details this in README file)

## Extra points 
 * Extra points if you provide a dockerfile
 * Extra points for unit test implementation
 * Anything else that will show us your proficiency as a fullstack engineer
  
## Before you start 
  1. You can use this repository while you are developing the app. 
  2. To submit the test assignment please **close the issue "Assignment Done" in "issues" tab**.
  3. We will review the code **only after you close "Assignment Done" issue**.
  4. Feel free to reach out if you encounter any problems or have questions - good communication is a big part of the role.
  5. We wish you good luck and we're looking forward to review your code 😎
 
</details>
  
<details><summary>Documentation</summary>

  **Domain** : [short-url.live](http://www.short-url.live/) <br/>
  **Status** : Online
  
![This is an image](https://i.imgur.com/v92az1V.jpg)
## App features
  - Short URL generate
  - Short URL redirection
  - Urls saved with the data associated
  - Display Url
  - Search URL
    - Filter the list of url by title
    - Search term contained in the title
    - Case insensitive for the search using lower case only 
  - Error handler
    - Use of a middleware to recieve any format type of error and convert it to a standard format
    - Detect wrong url syntax (with express validator)
    - Detect Invalid URL, 404 error (with axios) 
  - API test
    - Use of Jest
    ![This is an image](https://i.imgur.com/huYrcRu.jpg)

## API Documentation
  **Base url:** http://www.short-url.live
  ### Get multiple Urls
  *Return the list of urls recorded*
  
  ```GET``` /shorten
  
  **Responses**
  
| Status | Description |
| --- | --- |
| 200 | Successfully retrieved Urls |
  
  
200 Response sample
  ```
  [
    {
        "title": "portfolio",
        "description": "Florian's portfolio",
        "longUrl": "https://flo-portfolio.com",
        "shortUrl": "https://appsynth.dev/wzygpgj",
        "createdDate": "2022-06-26T03:44:33.633Z",
        "key": "wzygpgj",
        "id": "62b7d6216fd06f309f5200a3"
    },
    {
        "title": "google",
        "description": "search engine",
        "longUrl": "https://google.com",
        "shortUrl": "https://appsynth.dev/ijvsf0g",
        "createdDate": "2022-06-26T03:44:47.263Z",
        "key": "ijvsf0g",
        "id": "62b7d62f6fd06f309f5200aa"
    },
    {
        "title": "amazon",
        "description": "e-commerce",
        "longUrl": "https://amazon.com",
        "shortUrl": "https://appsynth.dev/unwjous",
        "createdDate": "2022-06-26T03:45:04.974Z",
        "key": "unwjous",
        "id": "62b7d6406fd06f309f5200b1"
    }
]
  ```
  
 ### Post a Url
 *Generate a short url from a long url*
 
  ```POST``` /shorten
  
  
  **Body Parameters (JSON)**
  
| Name | Type | Description | Required |
| --- | --- | --- | --- |
| title | string  | Url title | True |
| description | string  | Description of the URL | False |
| longUrl | string  | Long URL to shorten | True |
  
  
  **Responses**
  
| Status | Description |
| --- | --- |
| 201 | Successfully posted Url |
  
  
201 Response sample
  ```
  {
    "title": "portfolio",
    "description": "Florian's portfolio",
    "longUrl": "https://flo-portfolio.com",
    "shortUrl": "https://appsynth.dev/qdszdgx",
    "createdDate": "2022-06-26T04:34:27.851Z",
    "key": "qdszdgx",
    "id": "62b7e1d36fd06f309f5200c8"
}
  ```
  
 ### Get a Url
 *Return the url data of a single url*
 
  ```GET``` /shorten/{url_key}
  
  
  **Body Parameters (JSON)**
  
| Name | Type | Description | Required |
| --- | --- | --- | --- |
| key | string  | Short url key | True |
 
  
  **Responses**
  
| Status | Description |
| --- | --- |
| 200 | Successfully posted Url |
  
  
200 Response sample
  ```
  {
    "title": "portfolio",
    "description": "Florian's portfolio",
    "longUrl": "https://flo-portfolio.com",
    "shortUrl": "https://appsynth.dev/qdszdgx",
    "createdDate": "2022-06-26T04:34:27.851Z",
    "key": "qdszdgx",
    "id": "62b7e1d36fd06f309f5200c8"
}
  ```  
  
 
  
 
## Security issue
- Docker and Digital Ocean credentials exposed
    - I don't have access to the repository setting where I could set secret strings
    - Can't neither use organisation secret, I'm using git hub free plan
    - Need to add the credentials in the Secret menu
- DDOS Attack
    - There is no limit of sending request
    - A bot could generate unlimited urls and overload mongoDb
    - Add a time expiration between each request
    - Use a signing authentication or by the user Ip set a daily limit of max URL generated
 
 
## Scability issue
  - Use of authentication user 
  - Use of NATS streaming server for a better communication between services and add easily new services
    
    
## About Me
With a real passion for computing, coding is what I do and I always will do.
Through years of personal, freelance and company experiences, I have acquired a wide-range of useful and adaptable knowledge.
Full stack development is really rich of technologies catching my interest and I learnt it.
  
Other skills I have :  System Integration, Game development, data science, Team managing <br />
Other languages I am comfortable with : C#, R, MQL4, SQL, Python, Solidity <br/>
Please visit my portfolio : [flo-portfolio.com](https://flo-portfolio.com) to know much more about me.

This assignment was really fun 😊, let's hope you will like my work.
 
 

 
 </details>
  
  
  
  

