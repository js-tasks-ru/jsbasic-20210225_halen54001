function showSalary(users, age) {
  let usersAgefilter = users.filter(function (person) {
    if (person.age <= age) {
      return person;
    }
  });
  let mappedUsers = usersAgefilter.map(
    (person) => `${person.name}, ${person.balance}`
  );
  return mappedUsers.join("\n");
}
