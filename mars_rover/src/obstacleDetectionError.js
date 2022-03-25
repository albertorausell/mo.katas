class ObstacleDetectionError extends Error {
    constructor(message) {
      super(message);
      this.name = "ObstacleDetectionError";
    }
  }

module.exports = ObstacleDetectionError;