const FmmpegController = require("./ffmpegController");
const StorageController = require("./storageController");

module.exports = class ManagerController {
  constructor() {
    this.ffmpegController = new FmmpegController();
    this.storageController = new StorageController();
  }

  createMosaic(params) {
    const { filePaths, duration } = params;

    const destPaths = {};
    // Descargar archivos con promise all
    const destMergedFile = this.ffmpegController.mergeFile(files);

    try {
      console.log(files, duration);
    } catch (e) {
      // llamar a excepcion filter
    }
  }
};
