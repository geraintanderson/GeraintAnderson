#!/bin/bash
# Used to generate the content. Run this from the application root directory.
echo "Building the static pages"

# Setting directory variables
srcDir="src"
outDir="public_html"

# Clear existing files
rm -r ${outDir}/*

# Create public images and assets directory
mkdir ${outDir}/images
mkdir ${outDir}/assets
cp ${srcDir}/images/* ${outDir}/images
cp ${srcDir}/assets/* ${outDir}/assets

# Copy global styles and scripts
cp ${srcDir}/index.js ${srcDir}/index.css ${srcDir}/favicon.ico ${outDir}/

# Building the homepage index.html
cat ${srcDir}/header.html > ${outDir}/index.html
echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"homepage.css\">" >> ${outDir}/index.html
cat ${srcDir}/nav-bar.html ${srcDir}/index/homepage.html ${srcDir}/footer.html >> ${outDir}/index.html
cp ${srcDir}/index/homepage.css ${outDir}/homepage.css

# Building the profile page
cat ${srcDir}/header.html > ${outDir}/profile.html
echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"profile.css\">" >> ${outDir}/profile.html
cat ${srcDir}/nav-bar.html ${srcDir}/profile/profile.html ${srcDir}/footer.html >> ${outDir}/profile.html
cp ${srcDir}/profile/profile.css ${outDir}/profile.css

# Building the CV
cat ${srcDir}/header.html > ${outDir}/cv.html
echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"cv.css\">" >> ${outDir}/cv.html
cat ${srcDir}/nav-bar.html ${srcDir}/cv/cv.html ${srcDir}/footer.html >> ${outDir}/cv.html
cp ${srcDir}/cv/cv.css ${outDir}/cv.css

# Building the portfolio page
cat ${srcDir}/header.html > ${outDir}/portfolio.html
cat ${srcDir}/nav-bar.html ${srcDir}/portfolio/portfolio.html ${srcDir}/footer.html >> ${outDir}/portfolio.html

# Building the articles page
cat ${srcDir}/header.html > ${outDir}/articles.html
echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"articles.css\">" >> ${outDir}/articles.html
cat ${srcDir}/nav-bar.html ${srcDir}/articles/articles.html ${srcDir}/footer.html >> ${outDir}/articles.html
cp ${srcDir}/articles/articles.css ${outDir}/articles.css

# Building the individual articles

cat ${srcDir}/header.html > ${outDir}/tabbed-box-component.html
echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"tabbed-box-component.css\">" >> ${outDir}/tabbed-box-component.html
cat ${srcDir}/nav-bar.html ${srcDir}/articles/tabbed-box-component.html >> ${outDir}/tabbed-box-component.html
echo "<script src=\"tabbed-box-component.js\"></script>" >> ${outDir}/tabbed-box-component.html
cat ${srcDir}/footer.html >> ${outDir}/tabbed-box-component.html
cp ${srcDir}/articles/tabbed-box-component.css ${outDir}/tabbed-box-component.css
cp ${srcDir}/articles/tabbed-box-component.js ${outDir}/tabbed-box-component.js
