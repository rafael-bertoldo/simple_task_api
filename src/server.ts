import { app } from ".";

const PORT: number = Number(process.env.PORT) || 3333;

app.listen(PORT, () => console.log(`App is running at port: ${PORT}`))