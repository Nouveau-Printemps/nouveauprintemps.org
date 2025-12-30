dev: clean
    git clone https://git.anhgelus.world/anhgelus/small-web.git dev 
    cd dev && bun i && git apply ../*.patch && (git add * || echo "ok") && git commit --no-gpg-sign -am "PREVIOUS" 
    ln -s $PWD/data dev/data
    ln -s $PWD/public dev/public
    ln -s $PWD/config.toml dev/config.toml

build: clean
    git clone https://git.anhgelus.world/anhgelus/small-web.git build
    cd build && bun i && git apply ../*.patch && just build
    cp build/nouveauprintemps.org .
    rm -fr build

clean:
    rm -fr build || echo "no build"
    rm -fr dev || echo "no dev"

update-dev:
    cd dev && (git add * || echo "ok") && git commit --no-gpg-sign --amend -am "PREVIOUS"

create-patch:
    cd dev && git diff > NEW_PATCH.patch
    mv dev/NEW_PATCH.patch . 
    just update-dev
