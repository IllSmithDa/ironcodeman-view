const HerokuData = [
  { 
    type: "Heroku Intro",
    command: "heroku login",
    description: "login to Heroku account. Prepare to give username and password" 
  },
  {
    type: "Heroku Intro",
    command: "heroku create appname",
    description: "creates a Heroku app called appname"
  },
  {
    type: "Heroku Intro",
    command: "heroku create appname --buildpack https://github.com/mars/create-react-app-buildpack.git",
    description: "use this command instead of Heroku create appname to create heroku app called appname if you are using react."
  },
  {
    type: "Heroku Intro",
    command: "heroku git:remote -a appname2",
    description: "can switch to other existing apps such as appname2 in this example" 
  },
  { 
    type: "Heroku Intro",
    command: "git push heroku master",
    description: "pushes the newly added Heroku app to be deployed through Heroku" 
  },
  { 
    type: "Heroku Intro",
    command: "git commit -m 'Comment here'",
    description: "commits the files to be pushed to Heroku" 
  },
  { 
    type: "Heroku Intro",
    command: "heroku ps:scale web=0 --app appname",
    description: `sets heroku app appname to 0 running dynos which ultimately means 0 servers to
    stop public access to app without removing app` 
  },
  {
    type: "Heroku Intro",
    command: "heroku ps:scale web=1 --app appname",
    description: "sets heroku app appname to 1 running dyno or 1 server allowing public access to app"
  },
  {
    type: "Heroku Intro",
    command: "heroku domains:add yourdomain.com",
    description: "Adds the custom domain 'yourdomain.com' to your Heroku app"
  },
];

export default HerokuData;