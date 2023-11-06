#### BRIEF

We have been asked by a local chef to design a website that allow users to find recipes to cook.
Recipes should be stored using an API.

A team consisting of 4 developers have been assigned to the project.


#### MVP 

* The app should allow the user to view all recipes
* The app should allow users to search for recipes based on cuisine, dietry requirements, or particular ingredients
* The app should allow users to add and remove recipes to and from their favourites


#### EXTENSIONS 

* Allow users to create a shopping list based on the ingredients from each recipe
* Allow users to add a new recipe
* Provide suggestions when user cannot decide on what to cook
 

#### ADVANCED EXTENSIONS

* Search by contents of fridge
* Link ingredients to an online grocery app
* Update favourites, with rating system after cooking. 


#### TO PLAY APP

1. The full app has been deployed and can be viewed here https://sgar.vercel.app/

### SET UP TO RUN LOCALLY

1. Clone repo from git hub
2. Open up 2 terminals, client & server 
3. Client > npm install   (to install node modules)
4. Server > npm install   (to install node modules)
5. Server > this has been separately deployed to fly.io, no need to run
5. Client > npm start  ( to start app running on localhost:3000)


#### LEARNINGS

1. Importance of careful planning in advance ensuring we have afull understanding of the customers needs.
2. Full undertanding allowed us to design our own API ensuring all of the search criteria was accessable in a format compatable wth the search functions required.
3. We retrospectivly amended the json file to take a favourited value.
4. The form presented issues as the nutriution was set up as objects requiring solving at a later stage. The code written for this was dependent on the ingredients also being entered and a required field had to be added otherwise the app failed.
5. WHen returning a search result, as the search bar was part of the recipes grid, we had to use the <      > function to hide the bar unless set to true.
6. Git branches - the importnace of making many small commits and ensuring there were no cross scope changes made in the process.
7. Team work and communication - to effectivley manage workload and time constraints.

#### PROCESS

1. Planning - Brief - this allowed us to consider all functionality the app required. This grew over time as we thought of new features.
2. All wireframes diagrams and sitemap diagrams were designed with our original vision of how the site would look and flow being mindful of the user experience, agreeing on file structure
3. API was discussed and all data was gathered. We used chatGBT to provide this in json format with all of our required keys.
4. Installed all dependencies such as express, cors, mongodb and nodemon
5. Updated Scripts accordingly
6. Server.js file was created
7. We created the seeds file and connected mongoDB (running seeds)
8. Set up insomnia and created a file called create_router.js. Each CRUD function was written and tested to include, GET, POST, DELETE, PUT
9. On succesful testing of back end we moved onto the front end.
10. Created react app.
11. Wrote code for recipesService to connect front end to back end. One CRUD method at a time starting with Get all recipes.
12. Wrote next method allowing us to search for one recipe by ID
13. Wrote routes within app.js
14. We performed some basicc styling so that the app would take some shape allowing us to move on.
14. Designed NavBar to allow routing to each page.
15. Worked on favourites which presented a lot of issues. Instead of creating a new favourites collection, we amended the recipes collection to allow updating the favourites value with true or false.
16. After a majority of mobbing/paired programming, we started to branch off goiven that time contraints were approaching.
17. Search bar was added to allow users to search by cusine, ingredient and dietry.
17. Favourtites heart was added to show filled when selected. 
18. Carousel was added to allow users to seach by cuisine
19. Logo suggestions were presented and a colour palette was agreed
20. further styling added
21. Add new recipe form was added.
22. Final Styling was completed