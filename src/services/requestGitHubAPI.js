export const requestSearchList = (userName, quantity = 5) => {
  const header = {
    accept: 'application/vnd.github.v3+json',
  };
  return (
    fetch(`https://api.github.com/search/users?q=${userName}&per_page=${quantity}`, header)
      .then((response) => response.json())
  );
}

export const requestUserData = (userName) => {
  const header = {
    accept: 'application/vnd.github.v3+json',
  };
  return (
    fetch(`https://api.github.com/users/${userName}`, header)
      .then((response) => response.json())
  );
}

export const requestRepositories = (userName) => {
  const header = {
    accept: 'application/vnd.github.v3+json',
  };
  return (
    fetch(`https://api.github.com/users/${userName}/repos`, header)
      .then((response) => response.json())
  );
}
