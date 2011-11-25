#!/bin/bash
git push aws master;
ssh mauricio@aws.appjango.com 'cd /opt/static-web/iaProject/;git pull origin master'
