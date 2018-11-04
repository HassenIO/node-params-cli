export default (argv = []) =>
  argv.reduce((acc, el) => {
    const split = el.split('=');
    if (el.includes('=')) acc[split[0]] = split[1];
    return acc;
  }, {});
