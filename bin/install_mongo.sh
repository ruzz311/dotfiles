#!/bin/bash
echo '';
echo 'sudo port install mongodb...';
sudo port -d install mongodb;

echo ''
echo 'Creating necessary directories for config:';
echo '    sudo mkdir /opt/local/var/db/mongodb_data';
	sudo mkdir /opt/local/var/db/mongodb_data;
echo '    sudo mkdir /opt/local/var/log/mongodb';
	sudo mkdir /opt/local/var/log/mongodb;
echo '    sudo touch /opt/local/var/log/mongodb/mongodb.log';
	sudo touch /opt/local/var/log/mongodb/mongodb.log;
echo '    sudo mkdir /opt/local/etc/mongodb/';
	sudo mkdir /opt/local/etc/mongodb/;

echo ''
echo 'Directory setup complete!'
echo '	Configuration file: /opt/local/etc/mongodb/mongod.conf'

#= Store data alongside MongoDB instead of the default, /data/db/
dbpath = '/opt/local/var/db/mongodb_data';
bind_ip = 127.0.0.1;	#= Only accept local connections
fork = true;			#= Running as daemon

echo '';
echo 'Set MongoDB path to /opt/local/etc/mongodb/';
echo 'Only accept local connections ( 127.0.0.1 )';
echo 'MongoDB set to run as background daemon (fork=true)';

#= Take log
logpath = '/opt/local/var/log/mongodb/mongodb.log';
logappend = true;

echo '';
echo '\\//\\//\\//\\//\\//\\//\\//\\//';
echo '\\//\\//\\//\\//\\//\\//\\//\\//';
echo '';
echo 'COMPLETE!'
echo 'If you experienced any errors, check the log file: cd opt/local/var/log/mongodb/mongodb.log';
echo '';
echo 'Add the following lines to you user shell-script profile (or ~/.bash_profile)';
echo '#========== Mongo Server Functions ( start / stop )';
echo 'alias mongostart="sudo mongod -f /opt/local/etc/mongodb/mongod.conf"';
echo 'mongostop_func () {';
echo 'local mongopid=`less /opt/local/var/db/mongodb_data/mongod.lock`;';
echo '	if [[ $mongopid =~ [[:digit:]] ]]; then';
echo '		sudo kill -15 $mongopid;';
echo '		echo mongod process $mongopid terminated;';
echo '	else';
echo '		echo mongo process $mongopid not exist;';
echo '	fi';
echo '}';
echo 'alias mongostop="mongostop_func"';
echo '';