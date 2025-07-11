const redis = require("redis");
const { promisify } = require("util");
const { REDIS_URL } = require("../util/config");

const ADDED_TODOS_COUNT = "TODOS_COUNT";

let getAsync;
let setAsync;

if (!REDIS_URL) {
  const redisIsDisabled = () => {
    console.log("No REDIS_URL set, Redis is disabled");
    return null;
  };
  getAsync = redisIsDisabled;
  setAsync = redisIsDisabled;
} else {
  const client = redis.createClient({ url: REDIS_URL });

  getAsync = promisify(client.get).bind(client);
  setAsync = promisify(client.set).bind(client);

  getAsync(ADDED_TODOS_COUNT).then((numAddedTodos) => {
    if (!numAddedTodos) {
      setAsync(ADDED_TODOS_COUNT, 0); // hard-coded, based on mongo-init.js
    }
  });
}

module.exports = {
  getAsync,
  setAsync,
  ADDED_TODOS_COUNT,
};
