import { PORT, HOST } from './common/config.js'
import app from './app.js'

app.listen(PORT, HOST, () =>
  console.log(`App is running on ${HOST}:${PORT}`)
);
