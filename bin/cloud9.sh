#!/usr/bin/env sh
CLOUD_USER="rmadsen"
CLOUD_DIR="~/Developer/Library/cloud9"
CLOUD_PORT="3333"
CLOUD_WORKSPACE="~/Google\ Drive/ruzz311/Google\ Drive/cloud9"
CLOUD_ACTION="open"
CLOUD_BEFORE=""
CLOUD_AFTER=""


case "$1" in
    -b)
        CLOUD_BEFORE="nohup "
        CLOUD_AFTER="> /dev/null 2>&1 &"
        ;;
    .)
        CLOUD_WORKSPACE=`pwd`
        CLOUD_AFTER="-a $CLOUD_ACTION"
        ;;
    *)
        if [ $1 ]; then
            CLOUD_WORKSPACE=$1
        fi
        CLOUD_AFTER="-a $CLOUD_ACTION"
        ;;
esac

echo "$CLOUD_BEFORE node $CLOUD_DIR/bin/cloud9.js -p $CLOUD_PORT -w $CLOUD_WORKSPACE $CLOUD_AFTER"
$CLOUD_BEFORE "node $CLOUD_DIR/bin/cloud9.js -p $CLOUD_PORT -w $CLOUD_WORKSPACE" $CLOUD_AFTER