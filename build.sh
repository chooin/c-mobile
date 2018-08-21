#!/bin/bash

echo "请选择需要编译的环境: (\033[35m默认 web\033[0m)"
echo "\t \033[35m 1) \033[0m 编译 c-mobile"
echo "\t \033[35m 2) \033[0m 编译 web，并发布"
echo "\t \033[35m 0) \033[0m 退出"
read BUILD_ENV

if [ "$BUILD_ENV" = '0' ]
then
  exit;
fi

case "$BUILD_ENV" in
  1)
    rm -rf ./dist/*
    yarn
    yarn run build
    ;;
  *)
    cd mobile
    yarn
    yarn run build
    cd -
    cdn deploy production
    ;;
esac
