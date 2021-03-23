function showSalary(users, age) {
  let usersAgefilter = users.filter((person) => person.age <= age);
  let mappedUsers = usersAgefilter.map(
    (person) => `${person.name}, ${person.balance}`
  );
  return mappedUsers.join("\n");
}
