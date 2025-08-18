import React, { useState } from 'react';
import '../App.css';

const projects = [
  { projectName: 'Fitts_Law', projectLink: 'https://github.com/jnncode/Fitts_Law' },
  { projectName: 'Qlick', projectLink: 'https://github.com/jnncode/Qlick' }
];

const EnterInput = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const commands = {
    help: {
      description: "List Commands",
      action: () => {
        setOutput([
          "projects",
          "resume",
          "linkedin",
          "github",
          "clear",
          "?"
        ]);
      }
    },
    projects: {
      description: "Show Projects",
      action: () => {
        setOutput(projects.map((p, index) => (
          <div key={index}>
            <a href={p.projectLink} target="_blank" rel="noopener noreferrer">
              {p.projectName}
            </a>
          </div>
        )));
      }
    },
    resume: {
      description: "Download Resume",
      action: () => {
        setOutput([
          <a
            href="../assets/Resume.pdf"
            download="J_Nguyen_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            key="resume-link"
          >
            Download J's Resume
          </a>
        ]);
      }
    },
    linkedin: {
      description: "Open LinkedIn",
      action: () => {
        window.open("https://www.linkedin.com/in/j-nguyen-145ba7222/", "_blank");
      }
    },
    github: {
      description: "Open GitHub",
      action: () => {
        window.open("https://github.com/jnncode", "_blank");
      }
    },
    clear: {
      description: "Clear",
      action: () => {
        setOutput([]);
      }
    },
    '?': {
      description: "Secret command",
      action: () => {
        alert("SKADOOSH!");
      }
    }
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const command = input.trim().toLowerCase();
      const cmd = commands[command];

      if (cmd && typeof cmd.action === 'function') {
        cmd.action();
      } else {
        setOutput(prev => [...prev, `'${command}' is not recognized as a valid command.`]);
      }

      setInput('');
    }
  };

  return (
    <div>
      <label htmlFor="input">C:\Users\User&gt;&nbsp;</label>
      <input
        type="text"
        className="input"
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyPress}
        placeholder="type 'help' to begin"
        maxLength={10}
      />
      <div className="output">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
};

function Code() {
  return (
    <div className="container">
      <EnterInput />
    </div>
  );
}

export default Code;
