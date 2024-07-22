import { createApp } from "@deroll/app";
import { createRouter } from "@deroll/router";

// create app
const app = createApp({ url: "http://localhost:5004" });

// create router
const router = createRouter({ app });
router.add<{ name: string }>(
    "hello/:name",
    ({ params: { name } }) => `Hello ${name}`,
);

app.addInspectHandler(router.handler);

// start app
app.start().catch((e) => process.exit(1));
