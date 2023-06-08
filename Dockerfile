# 2022年9月時点の最新版のNode
FROM node:18.10.0

# 作業ディレクトリの指定
WORKDIR next

# コンテナ起動時に実行するコマンド。
CMD [ "yarn", "build" ]
