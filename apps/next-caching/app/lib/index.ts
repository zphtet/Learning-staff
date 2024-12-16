"use server";

const url = "https://jsonplaceholder.typicode.com/users";
const getRandomNumber = () => {
  return Math.floor(Math.random() * 5) + 1;
};

export const getPerson = async (id: string) => {
  //   return  fetch(`${url}/${id}`, {
  //     method: "GET",
  //   });

  return new Promise((res) => {
    setTimeout(() => {
      res({
        message: `Fetched ${id}`,
      });
    }, 1000 * getRandomNumber());
  });
};

export const getAllPersons = async () => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const allPromses = ids.map((id) => getPerson(id.toString()));
  return Promise.all(allPromses);
};
