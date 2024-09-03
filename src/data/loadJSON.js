export const loadJSON = async (path) => {
    const module = await import(/* @vite-ignore */ `./${path}`);
    return module.default;
  };