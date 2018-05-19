#!/bin/bash
# Used to generate the content. Run this from the application root directory.
echo "Building the static pages"

# Setting directory variables
srcDir="src"
outDir="public_html"

# Clear existing files
rm ${outDir}/*

# Copy global styles and scripts
cp ${srcDir}/index.js ${srcDir}/index.css ${srcDir}/favicon.ico ${outDir}/

# Building the homepage index.html
cat ${srcDir}/header.html > ${outDir}/index.html
echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"homepage.css\">" >> ${outDir}/index.html
cat ${srcDir}/nav-bar.html ${srcDir}/index/homepage.html ${srcDir}/footer.html >> ${outDir}/index.html
cp ${srcDir}/index/homepage.css ${outDir}/homepage.css

# Building the profile page
cat ${srcDir}/header.html > ${outDir}/profile.html
cat ${srcDir}/nav-bar.html ${srcDir}/profile/profile.html ${srcDir}/footer.html >> ${outDir}/profile.html

# Building the CV
cat ${srcDir}/header.html > ${outDir}/cv.html
cat ${srcDir}/nav-bar.html ${srcDir}/cv/cv.html ${srcDir}/footer.html >> ${outDir}/cv.html

# Building the portfolio page
cat ${srcDir}/header.html > ${outDir}/portfolio.html
cat ${srcDir}/nav-bar.html ${srcDir}/portfolio/portfolio.html ${srcDir}/footer.html >> ${outDir}/portfolio.html

# Building the writings page
cat ${srcDir}/header.html > ${outDir}/writings.html
cat ${srcDir}/nav-bar.html ${srcDir}/writings/writings.html ${srcDir}/footer.html >> ${outDir}/writings.html
