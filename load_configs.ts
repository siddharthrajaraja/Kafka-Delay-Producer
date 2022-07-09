import * as dotenv from "dotenv";
import path from "path";
import ENV from "types/env";
import ResponseMessage from "execptions/response_message";

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
      DELAY_API_SERVER_PORT: parseInt(config.DELAY_API_SERVER_PORT)
    };
  } else throw new Error(ResponseMessage.ERROR_LOADING_ENV_FILE);
}