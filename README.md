# Brose Questions Clone

Coding challenge consisting in replicating a design given in the form of an image and adding some basic functionality.

## Technology used 

**React, React-Table, Hooks, Sass, Fetch API, Async/Await**

### Clone

Clone this repo to your local machine using https://github.com/carlostrujillosamper/browse-questions.git

### Set Up

>install npm in project directory 

```shell
$ npm install

```

### Run 

>in project directory 

```shell
$ npm start

```

## TODOs

- **Add more filtering options**

- Multi-select filter with tags 

- **Add tests**

- Using react-testing-library and react-hooks-testing-library

- **Clean API response**

- Find rest of cases where strings of characters where used to replace special characters such as "" and '.

```shell

  const finalDataArray = questions.map(q => ({
    ...q,
    question: q.question.replace(/&quot;/g, '\"').replace(/&#039;/g, '\''),
    iD: randomNumGen(5000, 10000),
    createdBy: randomNames[randomNumGen(0, randomNames.length - 1)]
  }));
```

### Author

Carlos Trujillo 










