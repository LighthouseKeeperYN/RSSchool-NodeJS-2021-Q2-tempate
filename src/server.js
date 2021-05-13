import { PORT } from './common/config.js'
import app from './app.js'

app.listen(4000, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
