This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
A small copy of Spotify, written entirely on a bunch of Next js + TypeScript. The application implements a player, with the ability to rewind, switch songs, repeat, as well as enable random order. When you go to a particular song or artist, there is a request on the server side, which allows you to get a ready page with SEO optimization, as well as cache the result of the response. On the "around-you" page page, there is a request to get data about the user with the help of the service ..[ipinfo.io](https://ipinfo.io/) so if you don't want to reveal your location, use a VPN. Then the result of the most popular songs in your country is displayed. 
All songs have a shortened version due to the use of free [Api](https://rapidapi.com/yourdevmail/api/shazam-api7).
