const button = document.querySelector("button");

const testFunc = () => {
  console.log("button clicked");
};

const getResidence = () => {
  axios
    .get("https://swapi.dev/api/planets?search=Alderaan")
    .then((res) => {
      console.log(res.data.results[0].residents.length);
      for (let i = 0; i < res.data.results[0].residents.length; i++) {
        // console.log(res.data.residents[i]);
        axios
          .get(res.data.results[0].residents[i])
          .then((resident) => {
            const x = document.createElement("div");
            x.innerText = resident.data.name;
            document.body.appendChild(x);
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};

button.addEventListener("click", getResidence);
