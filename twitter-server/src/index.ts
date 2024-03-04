import { initServer } from "./app";


async function init() {
    const app = await initServer();
    const port = 8000;
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}

init();
