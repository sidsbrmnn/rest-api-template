process.on("uncaughtException", (error) => {
    console.log("Uncaught exception occured:", error);
    process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
    console.log("Unhandled rejection at", promise, "Reason:", reason);
    process.exit(1);
});
