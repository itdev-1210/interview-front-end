# Interview: Front-end (Drupal)

### Background
This exercise is to test your Drupal and Front-end skills. In this repository
you will find:
1. Drupal installation that you can setup with the instruction
shared below
2. Links to PSDs and JPG files: [Here](https://drive.google.com/drive/folders/1fCEq4JLqH5taSY21VS5vm3AjkOhOlVeH?usp=sharing).

The Drupal installation will configure everything you need to get started. All
you need to do is setup content and start theming based on the PSDs.

### Prerequisites
- You have LAMP stack running on your machine. We would recommend one of these tools:
    - [DrupalVM](https://www.drupalvm.com/)
    - [Lando](https://docs.devwithlando.io)
    - [Acquia DevDesktop](https://dev.acquia.com/downloads)
    - [MAMP](https://www.mamp.info/en/)
    - [XAMPP](https://www.apachefriends.org/index.html)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/en/)

### Installation
- Install Drupal core and contrib modules using: `composer install`
- Update `settings.php` to define the database connection.
- Setup the website with configuration import: `drush site-install config_installer config_installer_sync_configure_form.sync_directory=../config/sync --account-name=admin --account-pass=admin --yes`
    - Your user name and password to login to Drupal would be `admin` and `admin`.
- Setup and usage instructions for the theme can be found [here](web/themes/custom/company/README.md).

### Content setup
- Create at least 5 sample `Article` and `Testimonial` nodes.
- Create a `Landing Page` content type node and populate it as per the designs.
- Populate content for:
    - Main Menu
    - Social Links Menu
    - Copyrights block

### Submission
* Set up your github.com account if you don't already have one.
* Clone the repository
* Push your changes as a public repo in GitHub and submit the link
