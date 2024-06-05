export const getRiddle = async () => {
  const url = 'https://riddles-api.vercel.app/random';
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
