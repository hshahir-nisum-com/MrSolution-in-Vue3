

export default function() {
//   import axios from "axios";

 fetch("https://fakestoreapi.com/products/1")
   .then((res) => res.json())
   .then((json) => console.log(json));
}
