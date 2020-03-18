import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";
import Table from "./components/Table/Table";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        let response = await fetch("https://opentdb.com/api.php?amount=40", {
          method: "GET"
        });
        let questionsData = await response.json();
        setQuestions(questionsData.results);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getQuestions();
    console.log(questions);
  }, [isLoading]);
  const randomNumGen = (min, max) => {
    return Math.floor(Math.random() * max + min);
  };

  const randomNames = ["Karen", "Noctithra", "Coldflame", "Avalica", "Codex"];

  const finalDataArray = questions.map(question => ({
    ...question,
    iD: randomNumGen(5000, 10000),
    createdBy: randomNames[randomNumGen(0, randomNames.length - 1)]
  }));

  console.log(finalDataArray);

  const columns = [
    {
      Header: "ID",
      accessor: "iD",
      sortType: "basic"
    },
    {
      Header: "Category",
      accessor: "category",
      disableSortBy: true
    },
    {
      Header: "Type",
      accessor: "type",
      disableSortBy: true
    },
    {
      Header: "Difficulty",
      accessor: "difficulty",
      disableSortBy: true
    },
    {
      Header: "Question/Statement",
      accessor: "question",
      disableSortBy: true
    },
    {
      Header: "Created By",
      accessor: "createdBy",
      disableSortBy: true
    }
  ];

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="title-container">
        <h1>Browse Questions</h1>
      </div>
      <Table
        columns={columns}
        data={finalDataArray}
        defaultSorted={[
          {
            id: "iD",
            desc: true
          }
        ]}
        
      ></Table>
    </div>
  );
}

export default App;
