# GeraintAnderson
This repository stores my personal website: www.GeraintAnderson.com.

# notes
This subfolder is a place to keep all my technical notes.  Eventually is will be incorporated into a few webpages for my reference.  The notes are stored as HTML for use online.

# snippets
This folder holds short code examples

# images
Holds images

# Deployment Steps
When deploying, the cgi-bin and public_html pages need to be independently deployed. Deploy using FTP due to the constraints of the hosting provider. From the web management panel, click to unlock the FTP access for 1 hour. Then, from the terminal on the local machine, navigate to the project home directory. Use lftp to upload the contents of the directories:

lftp -e "mirror -R cgi-bin cgi-bin" -u <username>,<password> <remote ip address>
lftp -e "mirror -R public_html public_html" -u <username>,<password> <remote ip address>
