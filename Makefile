MAIN_DIR = $(shell pwd)
BUILD_DIR = $(MAIN_DIR)/build
SOURCE_DIR = $(MAIN_DIR)/src
COUCHAPP_DIR = $(MAIN_DIR)/src/couchapp
TOOLS_DIR= $(SOURCE_DIR)/assets/util/buildscripts

PROFILE = $(MAIN_DIR)/conf/main.profile.js

DEV_DB = http://localhost:5984/citeplasmdev
TEST_DB = http://localhost:5984/citeplasmtest

all: clean dojo testing

clean:
	rm -rf "$(BUILD_DIR)"
	rm -rf "$(COUCHAPP_DIR)"/_attachments/index.html

dojo:
	#cd $(TOOLS_DIR); java -Xms256m -Xmx256m  \
    	#	-cp ../shrinksafe/js.jar:../closureCompiler/compiler.jar:../shrinksafe/shrinksafe.jar \
    	#	org.mozilla.javascript.tools.shell.Main  ../../dojo/dojo.js baseUrl=../../dojo \
    	#	load=build "profile=$(PROFILE)" "releaseDir=$(BUILD_DIR)"
	sh $(TOOLS_DIR)/build.sh --bin java -p "$(PROFILE)" --releaseDir "$(BUILD_DIR)"
	
	# copy static files
	cp "$(SOURCE_DIR)/assets/boot.js" "$(BUILD_DIR)/assets/boot.js"
	touch "$(BUILD_DIR)"/assets/blank.html
	cp "$(SOURCE_DIR)/index.html" "$(BUILD_DIR)/index.html"

testing:
	# change debug to no & change the assets host
	#sed -i "s/, *isDebug: *1//" "$(BUILD_DIR)/index.html"
	sed -i "s,http://dev/assets,http://assets,g" "$(BUILD_DIR)/index.html"
	sed -i "s,baseUrl: *'assets/',baseUrl: 'http://assets/',g" "$(BUILD_DIR)/assets/boot.js"
	
	# softlink the index.html file to the couchapp _attachments
	ln -s "$(BUILD_DIR)"/index.html "$(COUCHAPP_DIR)"/_attachments/index.html

	# push the couchapp
	cd $(COUCHAPP_DIR); couchapp push $(TEST_DB)

# generates and installs the appropriate configuration files to run in development
# mode on the localhost
config:
	cp conf/nginx.conf /tmp/nginx.conf
	sed -i 's,/path/to/,$(MAIN_DIR)/,g' /tmp/nginx.conf
	sudo cp -i /tmp/nginx.conf /etc/nginx/conf/nginx.conf
