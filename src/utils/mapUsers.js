export function mapUsers(userList) {
  const mappedData = userList.map((userData) => {
    const { picture, name, email, location, registered, login } = userData;
    const newData = { picture, name, email, location, registered, login };
    return newData;
  });

  return mappedData;
}
