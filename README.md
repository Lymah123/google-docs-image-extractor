# Google Docs Image Extractor

A Google Apps Script that automatically extracts all images from a Google Doc and saves them to a specified Google Drive folder.

## Features

- Extract all images from a specified Google Docs
- Convert images to PNG format
- Automatically creates a new folder for the images if no destination is specified
- Name each image using the document name and an incremental number
- Error handling for files without parent folders and documents with no images.
- Provides execution logs for monitoring.

## Usage

### Basic Usage

Extract images from a Google Doc and save to a new folder

```
getDocImages("YOUR_GOOGLE_DOC_ID_HERE");

```

### Advanced Usage

Extract images from a Google Doc and save to a specific folder.

```
getDocImages("YOUR_GOOGLE_DOC_ID_HERE", "YOUR_DESTINATION_FOLDER_ID_HERE");

```

## Running the script

1. Open Google Apps Script at [script.google.com](https://script.google.com/)
2. Create a new project
3. Copy and paste the script code
4. Modify the document ID in the `runExtraction()`function
5. Run the function

## Installation

1. Open your Google Doc
2. Go to Extensions > App Script
3. Copy and paste the script code
4. Save the project
5. Run the `runExtraction()` function

## How It Works

The script works by:

1. Finding the specified Google Doc
2. Extracting all images from the document's body
3. Creating a folder for the images(or using a specified folder)
4. Converting each image to PNG format
5. Saving the images with organized naming

## Contributing

Feel free to submit issues or pul requests to improve the script.
