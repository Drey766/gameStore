export const loadJSON = async (path) => {
    const module = await import(/* @vite-ignore */ `../data/${path}`);
    return module.default;
  };