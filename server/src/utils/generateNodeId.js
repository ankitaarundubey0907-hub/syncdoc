const generateNodeId = () => {
    return (
        "node_" +
        Date.now() +
        "_" +
        Math.random().toString(36).substring(2, 10)
    );
};

module.exports = generateNodeId;