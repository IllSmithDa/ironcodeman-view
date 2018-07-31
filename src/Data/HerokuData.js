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
    command: "heroku apps",
    description: "Lists all heroku app made under the current user"
  },
  {
    type: "Heroku Intro",
    command: "heroku apps:info",
    description: `provides information for a particular heroku app including
    git url, repo size, Dynos and web URL.`
  },
  {
    type: "Heroku Intro",
    command: "heroku create appname --buildpack https://github.com/mars/create-react-app-buildpack.git",
    description: "use this command instead of Heroku create appname to create heroku app called appname if you are using React.js"
  },
  {
    type: "Heroku Intro",
    command: "heroku git:remote -a appname2",
    description: "can switch to other existing apps which in this case is appname2 " 
  },
  {
    type: "Heroku Intro",
    command: "heroku apps:rename 'newname'",
    description: "Switches the current heroku appanme to 'newname'" 
  },
  {
    type: "Heroku Intro",
    command: "heroku apps:rename 'newname'",
    description: "Switches the current heroku appanme to 'newname'" 
  },
  {
    type: "Heroku Intro",
    command:"heroku apps:rename newname --app oldname",
    description: "switches the specific app name 'oldname' to 'newname'"
  },
  {
    type: "Heroku Intro",
    command: "heroku apps:destroy",
    decsription: "Deletes the current app"
  },
  {
    type: "Heroku Intro",
    command: "git remote add heroku git@heroku.com:project.git",
    description: `adds a heroku remote as a remote in the current local repository. The 'project.git' in this example 
    should be replaced with heroku url e.g myapp.herokuapp.com`
  },
  { 
    type: "Heroku Intro",
    command: "git push heroku master",
    description: "pushes the new Heroku app or any new commits to the Heroku app and deploys it to Heroku" 
  },
  { 
    type: "Heroku Intro",
    command: "git commit -m 'Comment here'",
    description: "commits the files that will pushed and deployed to Heroku" 
  },
  { 
    type: "Heroku Intro",
    command: "heroku restart",
    description: "Restarts the server. You can indicate specific app to restart using: heroku restart -a app_name" 
  },
  { 
    type: "Heroku Intro",
    command: "heroku logs -t",
    description: `Allows you to consistently recieve logs in real time allowing you to monitor requests and server 
    crashes in real time.`
  },
  { 
    type: "Heroku Intro",
    command: "heroku ps:scale web=0 --app appname",
    description: `sets heroku app appname to 0 running dynos which ultimately means 0 servers to
    stop public access to the app without removing app` 
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
  { 
    type: "Heroku Python",
    command: `heroku run python manage.py migrate`,
    description: `stores changes you have made in a migration. It needs to run for new projects and 
    whenever the schema for database updates`
  },
  {
    type: "Heroku Python",
    command: "heroku run python manage.py createsuperuser",
    description: `creates a super user for the heroku app`
  },
  { 
    type: "Heroku Python",
    command: "heroku run python manage.py shell",
    description: "run the python shell" 
  },
  { 
    type: "Heroku Python",
    command: `heroku run python manage.py loaddata testapp/testdata.json`,
    description: `loads the fixtures or the database dumps into database`
  },
  {
    type: "Heroku Python",
    command: `./manage.py dumpdata > testdata.json`,
    description: `dumps the entire database into testdata.json`
  },
];

export default HerokuData;