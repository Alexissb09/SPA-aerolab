const URL = "https://coding-challenge-api.aerolab.co/products";

export const getData = async () => {
  try {
    const request = await fetch(URL, {
      method: "GET",
      url: "https://coding-challenge-api.aerolab.co/products",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4YmM1YTRhNDkwZTAwMjFhOTllMGUiLCJpYXQiOjE2NjM2MTQwNDJ9.IFscsLiczYj6ji8GyoSqYMyQR3Jv5oruVmSj3Bu92FU",
      },
    });

    const data = await request.json();

    return data;
  } catch (error) {
    return console.log("Fetch error", error);
  }
};
