import { PORT, HOST } from './common/config.js'
import app from './app.js'
import { connectToDB } from './helpers/db.helper.js'

connectToDB().then(() => {
  app.listen(PORT, HOST, () =>
    console.log(`App is running on ${HOST}:${PORT}`)
  );
})
