TodoApp
=======

A simple Todo Application made with Angular.js (client side) and Flask as Server.

## Requirements
- Sqlite
- Python 3

## Quick Start
```
  git clone https://github.com/Cognilytics/todoapp.git
  cd todoapp
  <create and use virtualenv if desired>
  pip install -r requirements.txt
  python todoapp.py
```
Open browser to http://localhost:3000

## Structure
```
├── api.py							< Flask Restful Api File >
├── bower.json						< Bower File >
├── config.py							< Flask configuration file >
├── models.py							< SQLAlchemy Models >
├── requirements.txt					< Python Requirements File >
├── static							< Static Folder >
│   ├── images
│   │   └── checkbox.png
│   ├── lib								< Bower Libraries >
│   ├── scripts							< Angular Stuff >
│   │   ├── app.js
│   │   ├── controllers						< Angular Controllers >
│   │   │   └── todos.js
│   │   ├── directives						< Angular Directives >
│   │   │   ├── keypressEnter.js					< Directive for ng-enter >
│   │   │   └── keypressEscape.js					< Directive for ng-escape >
│   │   └── services
│   │       └── TodoService.js
│   └── styles							< CSS Stuff >
│       └── main.css
├── templates							< Flask Rendered Templates >
│   └── index.html						
├── test.db							< SQLite Database >
├── tests.py
└── todoapp.py						< Flask Main File >
```