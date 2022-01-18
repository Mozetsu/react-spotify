# React Spotify

Spotify Clone built with Next JS 12 implementing the latest \_middleware features as well as next authentication. The project consumes Spotify's API in order to get the user's data (User details, Playlists).

<p align="center">
  <img src="https://raw.githubusercontent.com/Mozetsu/react-spotify/main/public/213124123.png" width="100%" alt=" />
</p>

# Stack

- Next JS
- Tailwind CSS
- Vercel

# Objectives

Started this project to get a better understanding of what it's like to build a React application using Next JS 12 along with its new features (Page-based routing, Middleware, etc).

# What I Have Learned

After completing the project I have a better understanding on how to develop applications using Next JS. However, there's still plenty to cover as JS Frameworks are something new to me. Applications can be handled by modifying (getting, setting) their states which can be translated to "current existing data" that can be consumed such as user details (username, session tokens, etc.), lists, text, images... Basically all kinds of data that holds value. When we need to fetch data between multiple components we cannot should use something like recoil which behaves as an extended version of useState making the data accessible globally by wrapping the main component in the \_app.js file in a RecoilRoot component. I also got to know how efficient it is to create User Interfaces with Tailwind CSS and how fast it can make the entire process. Never had worked with another CSS Framework other than Bulma before and Tailwind really delivers on its promise.
