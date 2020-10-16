const getNameOf = <T>(object: (prop: any) => any): keyof T => {
  const proxy = new Proxy(
    {},
    {
      get: (_target, key) => key,
    }
  );
  return object(proxy);
};

export default getNameOf;
