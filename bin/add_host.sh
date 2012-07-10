#!/bin/bash

subl /private/etc/hosts;
wait;
echo "hosts domain added";
subl /usr/local/apache2/conf/extra/httpd-vhosts.conf;
wait;
echo "Apache virtual host added";
sudo /usr/sbin/apachectl restart;
wait;
echo "Apache restarted";
