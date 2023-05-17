setInterval(() => {
  const port = process.env.APP_PORT || 3000;
  console.log(`${new Date().getTime()} - hello from docker on port ${port}`);
}, 3000);
