#!/bin/bash
current_path=${PWD}
buster_path=$current_path'/npm/buster/'
nodejs_path=$current_path'/node/bin/'
conf_file='.conf'


if [ ! -f $conf_file ];
then
	echo 'PATH='$PATH:$buster_path:$nodejs_path >> ~/.profile
	touch .conf
	source ~/.profile
fi

