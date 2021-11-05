module.exports = {
  Admins: ["759755438459453440"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "m", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  Invite: "https://discord.com/api/oauth2/authorize?client_id=906178578205507654&permissions=8&scope=bot%20applications.commands", //Donot change..
  Token: process.env.Token, //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "906178578205507654", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "mUHUHMGfJAkHvAeQUNCbL9Lk41mVzn9r", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Secure", //Safety for your bot its like a password
  IconURL:
    "https://cdn.discordapp.com/avatars/906178578205507654/704fea6a173920caffb535f102c2063b.png?size=40", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass",
    // I have already Provided you with a lavalink Server. 😁
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "69f7e4073c6f434f8a01fcd96abf17c6", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "1a7c3b4b856247ce9a2f2c0bdb7fd478", //Spotify Client Secret
    // I have Provided a Spotify Server too. 😁
  },
};
