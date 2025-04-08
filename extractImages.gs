/**
 * Extracts all images from a Google Doc and saves them to a specified folder.
 *
 * @param {string} sourceId - The ID of the Google Doc to extract images from
 * @param {string} destinationId - (Optional) The ID of the folder to save images to
 */
function getDocImages(sourceId, destinationId) {
  const sourceFile = DriveApp.getFileById(sourceId);
  const sourceName = sourceFile.getName();
  const images = DocumentApp.openById(sourceId).getBody().getImages();

  // If no destination folder ID is provided, create a new folder
  if (!destinationId) {
    // First check if file has parents
    const parents = sourceFile.getParents();
    if (parents.hasNext()) {
      const parentId = parents.next().getId();
      const newFolder = DriveApp.getFolderById(parentId).createFolder('images');
      destinationId = newFolder.getId();
    } else {
      // If no parent folder, create folder in root of My Drive
      const newFolder = DriveApp.createFolder('images');
      destinationId = newFolder.getId();
    }
  }

  const saveTo = DriveApp.getFolderById(destinationId);

  // Handle case where there are no images
  if (images.length === 0) {
    Logger.log("No images found in the document.");
    return;
  }

  images.forEach((img, idx) => {
    const blob = img.getAs('image/png');
    const fileName = `${sourceName}_${idx + 1}`;
    saveTo.createFile(blob).setName(fileName);
  });

  Logger.log(`Successfully extracted ${images.length} images to folder with ID: ${destinationId}`);
}

/**
 * Example function to run the image extraction
 */
function runExtraction() {
  try {
    getDocImages("1ufMIM7vQUOf0vrgZG7ThP1lh6p750KuUY1yR--E91jQ");
    Logger.log("Image extraction completed successfully");
  } catch (e) {
    Logger.log("Error during image extraction: " + e.toString());
  }
}
