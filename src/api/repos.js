import {Octokit} from '@octokit/core';
const octokit = new Octokit({ auth: `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` })
const response = await octokit.request('GET /user/repos'); 
const users = [];
response["data"].forEach(e =>users.push((e["created_at"])));
const created = response["data"].map(repository => `${repository.created_at}`)
const updated = response["data"].map(repository => `${repository.updated_at}`)
const commits = response["data"].map(repository => `${repository.commits_url}`)
console.log(created);
console.log(updated);
console.log(commits);
