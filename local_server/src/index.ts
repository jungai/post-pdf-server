import { app } from "app";
import closeWithGrace from "close-with-grace";
import type { CloseWithGraceAsyncCallback } from "close-with-grace";

const closeFn: CloseWithGraceAsyncCallback = async ({ err }) => {
    if (err) {
        app.log.error(err);
    }
    await app.close();
};

const closeListeners = closeWithGrace({ delay: 500 }, closeFn);

app.addHook("onClose", async (f, done) => {
    closeListeners.uninstall();
    done();
});

// 0.0.0.0 for docker (not enabled by default)
app.listen(process.env.PORT || 4000, "0.0.0.0", (err) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
});
