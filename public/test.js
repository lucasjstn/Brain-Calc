function fn() {
  let data = `Name: <input type="text" name="name"><br>Comment:</br>
  <textarea row='5' cols='80'></textarea>
  <br>    <input type="submit" value="Post Comment">
  </br>
  `;
  document.getElementById("mylocation").innerHTML = data;
}
