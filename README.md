# Chat App

## Deployed App

You can view the deployed version of the app [here](https://chat-app-7473d.firebaseapp.com)

## Run App Locally

1. Install dependencies by running `yarn` or `npm install`

2. Run app in development mode by running `yarn start` or `npm start`

3. Open [http://localhost:3000](http://localhost:3000) to view app in browser


## Run Tests Locally

1. Install dependencies by running `yarn` or `npm install` (if you haven't already done so)

2. `yarn test` or `npm test`


## More About My Chat App Journey

- Initially I was planning on making a simple websocket server using `socket.io` that would broadcast all incoming messages to connected users.
    - I then remembered that Firebase offers a realtime database service. After some research, I quickly decided that Firebase's realtime database was the right solution due to the fact that the data is synced across all clients in realtime.
- After deciding to use the Firebase database, I had also initially decided to use their authentication service for the initial login experience.
    - The authentication service was very simple to use, but I ultimately decided to keep it simple and just store the current user's `username` in `sessionStorage`
- I think one of the most challenging things for me was working with React Router in TypeScript
    - It's been quite some time since I had worked with React Router so I had to refresh my memory on how to get it working and then came the TS errors. It took me a while to figure out how to properly type router and router component props. I also had a `.ts` extension on `PrivateRoute` instead of `.tsx` which was really throwing me off 🤦🏻‍♀️.


## "Future" Features

If I had more time to work on the chat app I would love to implement all the features that I thought about along the way including:
- Multiple chat rooms
    - Ability to invite specific users to said chat room
- User avatars
- Emoji keyboard 👩🏻‍💻
- Giphy integration
- Message reactions (like in iMessage)
- Chrome notifications
- Customizable styling of chat dashboard (e.g. dark/light mode)
- Write more tests


