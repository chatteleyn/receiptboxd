async function getMovies(username) {
  const link = "https://letterboxd.com/" + username + "/rss/";
  const res = await fetch(link);
  const content = await res.text();
  console.log(res);
}
