.PHONY: default install build-all

default:
	make install

install:
	pnpm -r i

build-all:
	pnpm -r run build
