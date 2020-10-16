export const sortObjectsByPropertyAscending = (
  array: any[],
  property: string
) =>
  array
    .slice()
    .sort((previous, current) =>
      previous[property] > current[property] ? 1 : -1
    );
