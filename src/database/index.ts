import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then(option => {
  const newOptions = option as IOptions;
  newOptions.host = 'database';
  createConnection({
    ...option,
  });
})
