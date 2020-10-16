const getNameOf = <T>(obj: (prop: any) => any): keyof T => {
  const proxy = new Proxy(
    {},
    {
      get: (_target, key) => key
    }
  );
  return obj(proxy);
};

export default getNameOf
