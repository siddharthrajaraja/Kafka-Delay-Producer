import * as dotenv from "dotenv";
import path from "path";
import ENV from "types/env";
import ResponseMessage from "constants/response-message";

/**
 * This function loads the .env file from root dir
 * and created [[ENV]] variables to run the server
 *
 * @returns {@link ENV}
 */
export default function loadConfigs(): ENV {
  const config = dotenv.config({
    path: path.resolve(__dirname, "./.env"),
  }).parsed;

  if (config !== undefined) {
    return {
      DELAY_API_SERVER_HOST: config.DELAY_API_SERVER_HOST,
      DELAY_API_SERVER_PORT: parseInt(config.DELAY_API_SERVER_PORT),
      KAFKA_PRODUCER_HOST: config.KAFKA_PRODUCER_HOST,
      KAFKA_PRODUCER_PORT: parseInt(config.KAFKA_PRODUCER_PORT),
      REDIS_SUBSCRIBER_HOST: config.REDIS_SUBSCRIBER_HOST,
      REDIS_SUBSCRIBER_PORT: parseInt(config.REDIS_SUBSCRIBER_PORT),
      MONGODB_URL: config.MONGODB_URL,
      MONGODB_DATABASE: config.MONGODB_DATABASE,
      REDIS_PUBLISH_CHANNEL: config.REDIS_PUBLISH_CHANNEL,
      REDIS_PUBLISH_MESSAGE_ROUTE: config.REDIS_PUBLISH_MESSAGE_ROUTE,
      KAFKA_PRODUCER_MESSAGE_ROUTE: config.KAFKA_PRODUCER_MESSAGE_ROUTE,
      KAFKA_BROKERS: config.KAFKA_BROKERS.split(","),
      KAFKA_CLIENT_ID: config.KAFKA_CLIENT_ID,
    };
  } else throw new Error(ResponseMessage.ERROR_LOADING_ENV_FILE);
}
