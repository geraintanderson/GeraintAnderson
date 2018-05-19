#!/bin/bash
# Used to generate the content. Run this from the application root directory.
echo "Building the static pages"

# Clear existing files
rm public_html/*

# Building the homepage index.html
cat src/index.html >
