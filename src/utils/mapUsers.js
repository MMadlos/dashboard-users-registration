export function mapUserList(userList) {
  return userList.map((userData) => {
    const { picture, name, email, location, registered, login } = userData;
    const newData = {
      id: login.uuid,
      picture: picture.thumbnail,
      firstName: name.first,
      lastName: name.last,
      country: location.country,
      date: registered.date,
      email,
    };
    return newData;
  });
}
