const DjangoData = [
  {
    type: "Django Intro",
    command: "virtualenv env",
    description: "creates the env folder with all the necessary files to run a virtual environment"
  },
  {
    type: "Django Intro",
    command: ". env/bin/activate",
    description: "activate the environment with activate as the key folder to start the virtual environment up" 
  },
  {
    type: "Django Intro",
    command: "pip install django",
    description: "now that you have set up and activated the environment, you can now easily install django into the environment context" 
  },
  {
    type: "Django Intro",
    command: "python -m django --version",
    description: "checks Django version" 
  },
  { 
    type: "Django Intro",
    command: "pip install -r requirements.txt",
    description: `installs the dependences off of the requirement.txt file. 
    Important for installing any needed dependencies. Similar to npm install to 
    install required dependencies`
  },
  {
    type: "Django Intro",
    command: "django-admin startproject appname",
    description: "creates a new Django project called 'appname'"
  },
  { 
    type: "Django Intro",
    command: "/manage.py runserver",
    description: `starts up the python/django based server. Make sure that the 
    manage.py file can be found when typing 'ls' or 'dir' in the terminal before 
    you start up server. Usually located in the main app folder itself`
  },
  { 
    type: "Django Intro",
    command: "python manage.py runserver 0:8000",
    description: "you can specify port number like this by adding number at the end of command" 
  },
  { 
    type: "Django Intro",
    command: "ctrl + c",
    description: `shuts down the server if it is running` 
  },
  {
    type: "Django Intro",
    command: "./manage.py shell",
    description: "starts up the python shell and test Django api."
  },
  { 
    type: "Django Intro",
    command: "./manage.py startapp appname",
    description: "starts a new app called appname. Make sure to use this command when manage.py is there in the terminal location" 
  },
  { 
    type: "Django Intro",
    command: ".python manage.py createsuperuser",
    description: `creates a user who can login into the admin site of the django app. Will ask 
    you to enter a email and password.` 
  },
  { 
    type: "Django Database",
    command: "./manage.py makemigrations appname",
    description: `makemigrations tells Django that you have made changes to your models
    and that you would like these changes stored as migrations` 
  },
  {
    type: "Django Database",
    command: "./manage.py sqlmigrate polls 0001",
    description: `sqlmigrate command takes migration names and returns their SQL. 
    It does not run the actual migration itself. Note that primary keys are added 
    automatically and appends _id to the foreign key field name.`
  },
  { 
    type: "Django Database",
    command: "./manage.py check",
    description: "check for problems in your project without making migrations or touching the database." 
  },
  { 
    type: "Django Database",
    command: "./manage.py migrate",
    description: `migrate takes all migrations that haven't been applied using a special table 
    in your database called django_migrations and runs them against your database. It basically 
    synchronize changes made in model with the schema in the database. At this point you are making 
    a commit to the migrations made` 
  },
  {
    type: "Django Database",
    command: "./manage.py sqlmigrate polls 0001",
    description: `sqlmigrate command takes migration names and returns their SQL. 
    It does not run the actual migration itself. Note that primary keys are added 
    automatically and appends _id to the foreign key field name.`
  },
  { 
    type: "Django Shell",
    command: "./manage.py shell",
    description: "starts up the python shell and test Django api." 
  },
  { 
    type: "Django Shell",
    command: "from polls.models import Class1, Class2",
    description: `Import the model classes Class1 and Class2`
  },
  {
    type: "Django Shell",
    command: "Class1.objects.all()",
    description: `returns all objects, instances of the type 'Class1'`
  },
  { 
    type: "Django Shell",
    command: ".from django.utils import timezone",
    description: "imports the provided timezone from django itself" 
  },
  { 
    type: "Django Shell",
    command: `cs1 = Class1(class1_text="What's new?", pub_date=timezone.now())`,
    description: `Create a new instance of Class1. Support for time zones is enabled in 
    the default settings file, so Django expects a datetime with tzinfo for pub_date. 
    Use timezone.now() instead of datetime.datetime.now() and it will do the right thing.`
  },
  {
    type: "Django Shell",
    command: "cs1.save()",
    description: `Save the object into the database`
  },
  { 
    type: "Django Shell",
    command: "cs1.id",
    description: "returns the id number of object cs1" 
  },
  { 
    type: "Django Shell",
    command: `cs1.class1_text`,
    description: `Access model field values via Python attributes. Will return "What's new?" in this case`
  },
  {
    type: "Django Shell",
    command: `cs1.question_text = "Nothing much"`,
    description: `Changes the value value of the attribute question_text of object cs1. You have to call
    cs1.save() after to actually save the changes you made to the value. `
  },
  { 
    type: "Django Heroku",
    command: `heroku run python manage.py migrate`,
    description: `stores changes you have made in a migration. It needs to run for new projects and 
    whenever the schema for database updates`
  },
  {
    type: "Django Heroku",
    command: "heroku run python manage.py createsuperuser",
    description: `creates a super user for the heroku app`
  },
  { 
    type: "Django Heroku",
    command: "heroku run python manage.py shell",
    description: "run the python shell" 
  },
  { 
    type: "Django Heroku",
    command: `heroku run python manage.py loaddata testapp/testdata.json`,
    description: `loads the fixtures or the database dumps into database`
  },
  {
    type: "Django Heroku",
    command: `./manage.py dumpdata > testdata.json`,
    description: `dumps the entire database into testdata.json`
  },
];

export default DjangoData;