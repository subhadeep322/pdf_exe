# Book PDF Downloader - Chrome Extension

![Uploading image.png…]()



A simple Chrome Extension to download any web page, article, or online book as a PDF file directly to your computer.

This tool is designed to save a local copy of content you can already see in your browser. It works by taking a snapshot of the fully loaded page and converting it into a single PDF file.

---

## Features

-   **Direct PDF Download**: Saves the file directly to your PC without opening the print dialog.
-   **Auto-Scroll Technology**: Automatically scrolls to the bottom of the page to ensure all "lazy-loaded" content and images are captured.
-   **Clean Filenames**: Automatically names the PDF file based on the web page's title.
-   **Simple Interface**: A clean, one-button popup to start the download process.

---

## How It Works

The extension injects the `html2pdf.js` library into the active browser tab. To handle very long pages (like online books), it first auto-scrolls to the very bottom to trigger the loading of all content. Once the page is fully loaded, it generates a PDF from the page's HTML body and initiates a download.

---

## Installation

Since this extension is not on the Chrome Web Store, you need to install it manually in Developer Mode.

1.  **Download the Code**: Click the green `Code` button on this repository's page and select **Download ZIP**.

2.  **Unzip the File**: Extract the contents of the ZIP file into a folder on your computer. You should have a folder containing `manifest.json`, `popup.html`, `icon.png`, etc.

3.  **Open Chrome Extensions**: Open Google Chrome and navigate to `chrome://extensions`.

4.  **Enable Developer Mode**: In the top-right corner of the extensions page, turn on the **Developer mode** switch.

5.  **Load the Extension**: Click the **Load unpacked** button that appears on the top-left.

6.  **Select the Folder**: In the file selection window, navigate to and select the folder where you unzipped the extension files.

The extension icon will now appear in your Chrome toolbar.

---

## How to Use

1.  **Navigate to the Page**: Go to the web page, article, or online book you want to download.

2.  **Click the Extension Icon**: Click the PDF Downloader icon in your Chrome toolbar.

3.  **Start the Download**: Click the **Download Now** button in the popup.

4.  **Wait!**: A red message bar will appear at the top of the web page. The extension will begin auto-scrolling. **Do not close the tab or interact with the page.** For very long books (1000+ pages), this process can take a few minutes and may temporarily freeze your browser. This is normal.

5.  **Download Complete**: Once the PDF is generated, your browser will automatically start downloading the file.

---

## ⚠️ Important Limitations

-   **Does NOT Bypass Paywalls**: This extension cannot download paid books you have not purchased. It can only save content that is **already visible** on your screen. If you see a "Buy Now" screen, that is what it will save.
-   **Memory Intensive**: Converting extremely long pages (over 1,500 pages) can consume a lot of RAM and may fail or crash the browser on older computers. If a direct download fails, the only alternative is to use your browser's built-in "Print -> Save as PDF" function.
-   **Protected Content**: It will not work on websites with strong DRM (Digital Rights Management) that prevent screen capturing or printing, such as the Kindle Cloud Reader.
-   **Chrome Internal Pages**: The extension cannot be used on internal Chrome pages like `chrome://extensions` or the New Tab page.

---

## License

This project is licensed under the MIT License.
