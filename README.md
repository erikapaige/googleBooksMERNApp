# googleBooksMERNApp
This application allows a user to query and display books based on their search parameters.

![gBooks Graphic](/assets/googleBookHome.png)
<br>
![gBooks Graphic](/assets/googleBookSaved.png)

## Installation
The software used to create this generator include: React, React-Router, Material-UI (styling library for React), Node.js, Mongo, Axios, ENV and Express.  

**Please use 'npm init -y' followed by npm-i to install the NPM dependencies. Upon installation, confirm that all the packages were installed and appear in your package.json file.**
<br>
<br> 
If the dependencies listed above did not appear in your package.json file after running npm init-i, please run the following commands:
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MONGO: npm i mongoose
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ENV: npm i dotenv
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXPRESS: npm i express
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AXIOS: npm i axios
<br>

## Usage
Using GoogleBook Api, this application allows users to search for a book by title or author. Once presented with their search results, each book has two options. 

The first is to 'view more info.' This button will redirect the user to the Google Book homepage, where they can choose to explore more information or purchase the book. 

The second option is for a user to 'save' the book card. Once the 'save' button is clicked the book is stored in the Mongo database and will render on the 'Save' page. 

## Demo

<br>