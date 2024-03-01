import fetch from "node-fetch";

const wait = (ms = 500) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const fetchJson = async (url: string) => {
  let retries = 0;
  while (retries < 40) {
    await wait();

    try {
      const response = await fetch(url, {
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (err) {
      console.log(`Waiting for ${url} to be available`);
      console.log(err);
    }
    retries = retries + 1;
  }
  throw new Error(`Could not fetch ${url} within ${retries} retries`);
};
