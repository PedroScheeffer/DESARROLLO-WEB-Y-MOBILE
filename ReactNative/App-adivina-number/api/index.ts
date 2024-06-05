export const getJokes = async () => {
  const url = 'https://official-joke-api.appspot.com/jokes/ten';
  try {
    const response = await fetch(url);
    if (response.ok) {
      const payload = await response.json();
      return payload;
    } else {
      console.error('An error happened');
      return [];
    }
  } catch (error) {
    console.error(error);
  }
};
