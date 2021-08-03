const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/chatroom" : "/",
    lintOnSave: true,
    chainWebpack: (config) => {
        // 路径别名
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@styles", resolve("src/styles"))
            .set("@c", resolve("src/components"))
            .set("@api", resolve("src/api"))
            .set("@store", resolve("src/store"))
            .set("@router", resolve("src/router"))
            .end();
    },
    devServer: {
        proxy: getProxyConfig(),
    },
};

function getProxyConfig() {
    const env = process.env.NODE_ENV.trim() || "development";
    if (env == "development") {
        return {
            "/api/*": {
                target: "http://127.0.0.1:7001",
                // ws: true,
                changeOrigin: true,
                logLevel: "debug",
                pathRewrite: {
                    "^/api/": "/",
                },
            },
            "/socket.io": {
                target: "http://127.0.0.1:7001",
                changeOrigin: true,
                ws: true,
                logLevel: "debug",
            },
        };
    }

    return {
        "/api/*": {
            target: "http://182.92.81.247",
            // ws: true,
            changeOrigin: true,
            // logLevel: "debug"
        },
        "/socket.io": {
            target: "http://182.92.81.247",
            changeOrigin: true,
            ws: true,
            // logLevel: "debug",
        },
    };
}
