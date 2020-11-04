import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit();

class About extends React.Component  {
    state = {
    		isLoading: true,
    		repoList: []
    }
    componentDidMount() {
    	octokit.repos.listForUser({username: 'saifieva98'}).then(({data}) => 
        {this.setState(
          {repoList: data, 
           isLoading: false}
        )});
      octokit.users.getByUsername({
        username: 'saifieva98',
      })
      .then(({ data }) => {
        this.setState({
          userList: data,
          userListLoading: true,
        });
      });
    }
    render() {
    	const {isLoading, repoList, userList,userListLoading } = this.state;
    	return(
    		<div>
    			<h1>{isLoading ? <CircularProgress/> : 'Обо мне'}</h1>
         {!userListLoading ? (
                <CircularProgress />) : 
                (<div><h2><a href={userList.html_url}>{userList.name}</a></h2><img src={userList.avatar_url} /></div>)}
    			{!isLoading && <ol> {repoList.map(repo =>(<li key={repo.id}><a href={repo.html_url} >
                    {repo.name}</a></li>))}</ol>}
    		</div>);
    }
};
export default About;