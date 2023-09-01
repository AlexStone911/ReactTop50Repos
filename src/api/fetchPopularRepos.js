export const fetchPopularRepos = (language) => {
   const encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');
   return fetch(encodeURI)
       .then(response => response.json())
       .then(response => response.items)
       .catch(error => console.error(error));
}