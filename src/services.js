import { models } from './mongoose';

export const apiCounts = async (url) => {
  const api = await models.HitApi.findOne({
    api: url,
  });
  let count = 0;
  if (api) {
    count = api.count;
  }
  return count;
};
