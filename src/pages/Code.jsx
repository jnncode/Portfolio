import React from 'react'
import '../App.css'
import { useState } from 'react';

function Project(props) {
  return (
    <li>
      <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
        {props.projectName}
      </a>
    </li>
  );
}

const projects = [
  { projectName: 'Moderna Santa Paravia', projectLink: 'https://github.com/jnncode/Moderna_Santa_Paravia' },
  { projectName: 'Run Astro', projectLink: 'https://github.com/jnncode/Run_Astro' },
  { projectName: 'Fitts_Law', projectLink: 'https://github.com/jnncode/Fitts_Law' },
  { projectName: 'Qlick', projectLink: 'https://github.com/jnncode/Qlick' }
];

const EnterInput = () => {
  const [input, setInput] = useState('');
  const [showProjects, setShowProjects] = useState(false);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && input.trim().toLowerCase() === 'help') {
      setShowProjects(true);
      setInput(''); 
    }
  };

  return (
    <div>
      <label htmlFor='input'>C:\Users\User&gt;&nbsp;</label>
      <input
        type='text'
        className='input'
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyPress}
        placeholder="type 'help' to begin"
      />
      {showProjects && (
        <ul>
          {projects.map((project, index) => (
            <Project key={index} projectName={project.projectName} projectLink={project.projectLink} />
          ))}
        </ul>
      )}
    </div>
  );
};

function Code() {
  return (
    <>
      <div className='container'>
        {/* <h1 id='code-content'></h1> */}
        <EnterInput />
      </div>
    </>
  );
}

export default Code
