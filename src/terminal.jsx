// src/Terminal.js
import React, { useState } from "react";
import "./Terminal.css";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [currentDir, setCurrentDir] = useState("root");

  const projects = ["Project1", "Project2", "Project3"];

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  console.log("History of Terminal ",history.length)

  const handleCommand = (command) => {
    switch (command.trim()) {
      case "":
        return ""; // Ignore empty commands
      case "help":
        return "Available commands: help, clear, echo [message], cd [directory], see all";
      case "clear":
        setHistory([]);
        setCurrentDir("root");
        return "";
      case "cd project":
        setCurrentDir("project");
        return "Entered project directory";
      case "see all":
        if (currentDir === "project") {
          return `Projects: ${projects.join(", ")}`;
        } else {
          return 'Command not found. Type "help" for a list of commands.';
        }
      default:
        if (command.startsWith("echo ")) {
          return command.slice(5);
        }
        return `Command "${command}" not found. Type "help" for a list of commands.`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commandOutput = handleCommand(input);
    const newHistory = [...history, `> ${input}`, commandOutput];
    setHistory(newHistory);
    setInput("");
  };

  const getPrompt = () => {
    if (currentDir === "project") {
      return "MyPortfolio project >";
    } else {
      return "MyPortfolio >";
    }
  };

  return (
    <div className="terminal">
      <div className="output">
        {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <span className="prompt">{getPrompt()}</span>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          autoFocus
          className="input"
        />
      </form>
    </div>
  );
};

export default Terminal;