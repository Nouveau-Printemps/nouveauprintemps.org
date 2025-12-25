dev:
    git clone https://git.anhgelus.world/anhgelus/small-web.git dev 
    cd dev && bun i && git apply ../*.patch && (git add * || echo "ok") && git commit --no-gpg-sign -am "PREVIOUS" 

build:
    git clone https://git.anhgelus.world/anhgelus/small-web.git build
    cd build && bun i && git apply ../*.patch && just build
    cp build/nouveauprintemps.org .
    rm -fr build

clean:
    rm -fr build || echo "no build"
    rm -fr dev || echo "no dev"
