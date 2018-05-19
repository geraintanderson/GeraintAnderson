#!/usr/bin/env python
#########################################################
# Created by:	Geraint Anderson
# Created on:	20th July 2015
#
# Description:	This program is used to accept member
# details for an example of complex web form submission.
#########################################################

import cgi, cgitb, json

print "Content-type: text/html\n\n"
print "<html>"

form = cgi.FieldStorage()

member_name_arr = []
member_date_arr = []

member_count = (len(form)-1)/2 # There are 2 entries per person, plus the group name

for i in range(member_count):
    print "%s has been a member since %s<br>" % (
    form['members[' + str(i) + '][name]'].value,
    form['members[' + str(i) + '][date]'].value
	)

# TO DO: Make a JSON object for this form

print "</html>"
