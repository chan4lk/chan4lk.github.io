import React, { useState, useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import './Project.css';
import GithubRepoCard from '../../components/githubRepoCard/GithubRepoCard';
import Button from '../../components/button/Button';
import { openSource } from '../../portfolio';

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    getRepoData();
  });

  function getRepoData() {
    const client = new ApolloClient({
      uri: 'https://api.github.com/graphql',
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${window.atob(process.env.REACT_APP_TOKEN)}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
          {
            repositoryOwner(login: "${openSource.githubUserName}") {
              ... on User {
                repositories(first: 7, orderBy: {field:UPDATED_AT, direction:DESC} ) {
                  edges {
                    node {
                      nameWithOwner
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        setrepoFunction(result.data.repositoryOwner.repositories.edges);
        console.log(result);
      });
  }

  function setrepoFunction(array) {
    setrepo(array);
  }

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          if (v.node.nameWithOwner !== 'chan4lk/chan4lk') {
            return <GithubRepoCard repo={v} key={v.node.id} />;
          } else {
            return null;
          }
        })}
      </div>
      <Button
        text={'More Projects'}
        className="project-button"
        href="https://github.com/chan4lk"
        newTab={true}
      />
    </div>
  );
}
