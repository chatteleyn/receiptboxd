async function getMovies(username) {
  const link = "https://letterboxd.com/" + username + "/rss/";
  const res = await fetch(link);
  const content = await res.text();
  console.log(res);
}

function getDiaryData(username) {
  const uri = `https://letterboxd.com/${username}/rss/`;

  return fetch(uri)
    .then((response) => {
      // if 404 we're assuming that the username does not exist or have a public RSS feed
      if (response.status === 404) {
        throw new Error(
          `No RSS feed found for username by "${username}" at Letterboxd`
        );
      } else if (response.status !== 200) {
        throw new Error("Something went wrong");
      }

      return response.text();
    })
    .then((xml) => {
      const $ = cheerio.load(xml, { xmlMode: true });

      const items = [];

      $("item").each((i, element) => {
        items[i] = processItem($(element));
      });
      console.log(items);
      return items;
    });
}
