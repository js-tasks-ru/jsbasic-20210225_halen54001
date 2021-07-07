function makeFriendsList(array) {
  let mappedUserNames = array.map(
    (person) => `${person.firstName} ${person.lastName}`
  );
  let list = document.createElement("ul");
  for (let i = 0; i < mappedUserNames.length; i++) {
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(mappedUserNames.join(" ")));
    list.appendChild(item);
  }
  return list;
}
