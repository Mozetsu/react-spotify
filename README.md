# React Spotify

Spotify Clone built with Next JS 12 implementing the latest features. The project consumes Spotify's API in order to get the user's data (User details, Playlists).

<p align="center">
  <img src="https://raw.githubusercontent.com/Mozetsu/react-spotify/main/public/213124123.png" width="100%" />
</p>

## 📄 Objective

Started this project to get a better understanding of what it's like to build a React application using Next JS 12 along with its new features (Page-based routing, Middleware, etc).

<br>

## ⚙️ Stack

- Next JS
- Tailwind CSS
- Vercel

<br>

## 🎉 Features

- Authentication system (Login/Logout).
- Play/Pause songs.
- Get user playlists.
- Control volume through API.
- Responsive layout.

<br>

##### P.S. As Spotify's API is limited to my account you won't be able to login. Feel free to clone this repo and start the dev server to get it to work.

<br>

## 📘 What I Have Learned

After completing the project I have a better understanding on how to develop applications using Next JS. However, there's still plenty to cover as JS Frameworks are something new to me.

Applications can be handled by modifying (getting, setting) their states which can be translated to "current existing data" that can be consumed such as user details (username, session tokens, etc.), lists, text, images... Basically all kinds of data that holds value. When we need to fetch data between multiple components we cannot should use something like recoil which behaves as an extended version of useState making the data accessible globally by wrapping the main component in the app.js file in a RecoilRoot component.

I also got to know how efficient it is to create User Interfaces with Tailwind CSS and how fast it can make the entire process. Never had worked with another CSS Framework other than Bulma before and Tailwind really delivers on its promise.

<br>

## ⚡ Result

Users are presented with a login page where they can authenticate in order to acess the application. Requests are made to Spotify's API and when succeded users receive an access token which will be used to fetch their spotify data.

Users are redirected to the home "/" directory where they have all their playlists on the left sidebar. The current selected playlist will be presented in the center with a gradient in the header, as well as the playlist's image and name.

At the bottom of the screen the control bar is presented allowing users to play/pause, and set the volume of current playing songs.

<br>

## 🔒 Conclusion

This project took more time than expected as all concepts where new and errors kept showing up. Nevertheless, it has been completed and made me realise how much I still have to learn to up my skills to the next level. Building applications with frameworks is so much easier and effient when comparing to the vanilla JS approach. Super excited to dive deeper into React.
