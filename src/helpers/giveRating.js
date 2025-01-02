export const giveRating = (rating) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(1);
    } else {
      stars.push(0);
    }
  }

  return stars;
}
