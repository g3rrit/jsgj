#!/bin/bash

cp "$(dirname "$0")/tsconfig.json" tsconfig.json

read -r -d '' build_script <<-EOF

#!/bin/bash
npx tsc

EOF
echo "$build_script" > build.sh

cat "$(dirname "$0")/index.html" | sed '/id="engine"/d' > index.html

sudo chmod +x build.sh

mkdir src
read -r -d '' main_script <<-EOF

start(() => {
  console.log('Hello, world2');
});

EOF
echo "$main_script" > src/main.js

mkdir static
mkdir static/assets
mkdir static/assets/images

./build.sh
