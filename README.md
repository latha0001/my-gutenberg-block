# My Gutenberg Block

A simple WordPress plugin that creates a custom Gutenberg block. This block can be used to extend the functionality of your WordPress site, providing custom options and features that can be added easily through the block editor.

## Features

- Registers a custom block in the WordPress block editor.
- Utilizes JavaScript (React) and PHP to define the block's behavior.
- Custom styling and editor experience for seamless user interaction.
- Responsive design, ready for use in any theme.

## Requirements

- WordPress 5.0 or higher.
- Node.js (for development environment).
- npm (for managing packages and running build scripts).
- A working local or remote WordPress environment with Gutenberg enabled.

## Installation

### 1. Clone the repository

Clone the project to your local machine:

```bash
git clone https://github.com/latha0001/my-gutenberg-block
cd my-gutenberg-block
```

### 2. Install dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### 3. Run the development environment

Start the development environment to begin working on the block:

```bash
npm run start
```

This will start the Webpack development server and watch for changes in the source files.

### 4. Activate the plugin

1. Go to the WordPress admin panel.
2. Navigate to **Plugins > Add New**.
3. Click **Upload Plugin** and select the `my-gutenberg-block` folder.
4. Click **Activate**.

## Usage

After activating the plugin, follow these steps to add the block to your posts or pages:

1. Open the WordPress editor (post or page).
2. Click the **Add Block** button (+).
3. Search for your custom block by its name.
4. Add it to your content.

You can now customize the block through the block settings and the editor UI.

## Development

### Build for production

Once you are done with the development, run the build command to prepare your project for production:

```bash
npm run build
```

This will optimize and minify the assets, ready for deployment.

### Scripts

- `npm run start`: Start the development server and watch for file changes.
- `npm run build`: Build the plugin for production with optimized assets.

## Contributing

Feel free to fork this project, create issues, and submit pull requests if you would like to contribute.

## License

This project is licensed under the MIT License.
