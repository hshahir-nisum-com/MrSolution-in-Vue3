export default async function() {
  let data;
  await fetch("https://fakestoreapi.com/products/")
    .then(res => res.json())
    .then(json => {
      data = json;
      console.log(json);
    })
    .catch(err => {
      console.error(err);
    });
  return data;
}
