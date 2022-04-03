Roman
Mark
Andy

# Introduction
- After learning some React and MongoDB basics, our team wanted to further their knowledge of the MERN stack so we built a lightweight chat app (using socket.io for realtime chat).  Every member on this team has had their hands on every portion of this app from writing React code, backend code and CSS.  We all learned a lot about the MERN stack as a whole, as well as the additional knowledge we picked up from using socket.io tutorials and combing through the docs for all the technologies we used.
- [Server Code](https://github.com/snacksident/p3server) 

# Technologies Used for Front End
- Javascript (utlizing Axios for API interaction)
- socket.io (for realtime chatting)
- React.js
- timeago.js package (for timestamping messages)
- jwt-decode 

# User Stories
- as a user i want to create an account to start chatting
- as a user i want to login in and log out of my account
- as a user i want to be able to delete my account
- as a user i want to have a profile where i could edit my name, profile picture, and the about me section
- as a user i want to see a name, thumbnail of profile picture, and timestamp for each post

# Final Product
![Chat-app](./public/chat-app2.jpg)
![Chat-app](./public/chat-app.jpg)

# ERDs 
![ERD](./public/newerd.png)

# Wireframes
![landing page](./public/Untitled.png)
![logged in view](./public/Untitled%202.png)

# How To Install
- Fork and clone this repo to your own machine (you will also need the back-end repo as well [found here](https://github.com/snacksident/p3server))
- Change directory to your recently cloned repo, run `npm i` to install dependences listed above in Technologies Used 
- This application was created with `Create-React-App`, so you will need a `.env.local` file to hold the variable `REACT_APP_SERVER_URL={your server url here}`
- Run `npm start` to get the front end loaded
- Your app is now running!

# Features
- chat app usable by many users at once
- edit user profile
- live messages 

# Future Features
- ability to post something other than text (images, sound, etc)
- differentiate between private/public rooms - auth lock'd rooms

# User Views
| Method | URL Pattern | Purpose                                             |
|--------|-------------|-----------------------------------------------------|
| GET    | /           | renders landing page - shows login / welcome / chat |
| GET    | /timeline   | after logged in - view profile and chat             |
|        |             |                                                     |