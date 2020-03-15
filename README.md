# blogapp
Blog application for simple CRUD operations and state management with Context

This application is build with Expo.
For fully opperational application, you will need to create you own API. Just follow the next steps:
1. Create new file outside of root directory of this application.
2. In your terminal, navigate to the new file and run the command "npm init -y", 
after it's complete run the next command "npm install json-server ngrok" to install json-server and ngrok. 
(These two packages will help you to set up you server to work on localhost and are only good to work with them while in development).
3. In package.json file add these two scripts:
  "db": "json-server -w db.json -p 3000",
  "tunnel": "ngrok http 3000"
4. In root directory of your server create a file named db.json and inside of it configure it like this:
------------------

{
  "blogpost": []
}

------------------
This should be enough to get you started.

5. In server project folder open two terminals. In the first one run the command "npm run db" 
and in second one run "npm run tunnel" and your server is up and ready.
6. Next step is to navigate to the React Native project root/api/jsonServer.js and edit the baseURL "https://YOUR_NEW_ADDRESS.ngrok.io" 
which you can find in the secont terminal of you server (where you ran the command npm start tunnel)
7. In root directory of the app run "npm start" and you are good to go.

Note: This app with the server will work only if you run it on your local WiFi Network.. so you should use LAN settings from Metro Budler. 
