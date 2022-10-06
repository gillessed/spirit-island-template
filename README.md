# spirit-island-template

### Documentation

- [Adversary](_docs/adversary.md)
- [Spirit Board](_docs/board_front.md)
- [Cards](_docs/card.md)
- [Icons](_docs/icon.md)

### Getting Started

1. Create a new spirit group folder "my-name-spirits", and add that to `rendering/constants.js:SpiritGroups`.
2. Create a folder within there with the name of your spirit. Copy over existing card and board html files.
3. When you want to generate a pdf of a spirit, you can run a script to have it automatically create a pdf of your file.
   1. To do this you will need nodejs and npm installed.
   2. After installing those, go into rendering.
   3. Run `npm install`
4. Run `node render.js render-all` and your pdfs should end up in `spirit-pdfs`.

### Tips for Maintenance

1. Cloning the project with GIT instead of downloading it as a ZIP file make it easier to receive updates later on.
2. Don't modify the files in the folder "_docs", "_examples" and "_global". Your modifications might be lost when you get the latest version of the project. Instead, create new folders for your creations.

### Fonts

This project uses:

- JosefinSans-Regular: This font is bundled in the project and uses the Open Font License.
	- Used for: Special Rule and Innate Power names and rules text
- Lato Semibold Italic: This font is bundled in the project and uses the Open Font License.
	- Used for: Growth & Presence Track labels
- Mouse Memoirs: This font is bundled in the project and uses the Open Font License.
	- Used for: Headings and Spirit Name. Recommend using DK Snemand instead but this font is packaged with the template.
- DK Snemand Demo: Not included. You can download this font [here](https://www.dafont.com/dk-snemand.font).
	- Used for: Headings and Spirit Name.
- Gobold Extra2: Not included. You can download this font [here](https://www.dafont.com/fr/gobold.font).
	- Used for: Energy Icons and Card Play text

Note: Due to licensing, some of the fonts are not included in the project.

### License

All the code is available under the MIT License.

The fonts use their own license.

The images/icons come from the [Spirit Island Wiki](https://spiritislandwiki.com/index.php?title=Main_Page) which state:

> Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode) unless otherwise noted.
