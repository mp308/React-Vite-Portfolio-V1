// src/components/EV_GIT.js

import React, { Component } from 'react';

export class EV_GIT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      repos: [],
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/mp308')
      .then(response => response.json())
      .then(user => this.setState({ user }));

    fetch('https://api.github.com/users/mp308/repos')
      .then(response => response.json())
      .then(repos => this.setState({ repos }));
  }

  render() {
    const { user, repos } = this.state;

    return (
      <div className="p-4">
        {user && (
          <div className="text-center mb-8">
            <img
              src={user.avatar_url}
              alt="GitHub profile"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold font-mitr">{user.name}</h1>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        )}

        <h1 className="text-5xl  text-center my-4 text-white font-bebas"> - My GitHub Repositories -</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {repos.map(repo => (
            <div key={repo.id} className="bg-white p-4 rounded shadow-lg w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <h2 className="text-xl font-light font-bebas">{repo.name}</h2>
              <p className="text-gray-600">{repo.description}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-bebas"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default EV_GIT;
