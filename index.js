var config = require('config-node')(),
    bunyan = require('bunyan'),
    redis = require('redis'),

    clientId = config.clientId,
    logLevel = config.logLevel || 'info',
    log = bunyan.createLogger({ name: clientId, level: logLevel }),

    redisClient = redis.createClient({
        host: config.redis.host,
        port: config.redis.port
    });

redisClient.config("SET", "notify-keyspace-events", "KEz");
redisClient.on('psubscribe', function (pattern, count) {
    log.info({ pattern: pattern, count: count }, 'psubscribe successful');
});
redisClient.on('pmessage', function (pattern, channel, message) {
    log.info(
        { pattern: pattern, channel: channel, message: message },
        'Message received.'
        );
});

redisClient.psubscribe('__key*__:*');