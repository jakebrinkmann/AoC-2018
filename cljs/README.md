# ClojureScript Solutions


## Running

Use the `clojure:tools-deps` which is a recent official tool for
some lein/boot use cases:

```bash
docker run --rm -it \
  -p 9000:9000 \
  -v "${PWD}/Day02/hello-world:/tmp/hello-world" \
  -w "/tmp/hello-world" \
  clojure:tools-deps \
  bash
```

```bash
clojure \
  `# --main invokes the cljs.main function` \
  -m cljs.main \
  `# supports arguments: --compile the hello-world.core namespace` \
  -c hello-world.core \
  `# launch a --repl when compilation completes` \
  -r
```

* Running `clojure` instead of `clj` runs without `rlwrap` (which complains
  about terminal width in docker)
* Repeat: `sudo rm -rf Day02/hello-world/{.cpcache,out}`
* Use `-O advanced` to `--optimize` using Google Closure Compiler

Use this helpful docker image:

```bash
docker build -t day2 .

docker run -ti --rm \
  -p 9000:9000 \
  -v "$PWD/Day02/hello-world/src:/tmp/hello-world/src:ro" \
  -v "$PWD/Day02/hello-world/deps.edn:/tmp/hello-world/deps.edn:ro" \
  day2
```

## References

* https://clojurescript.org/guides/quick-start
* https://hub.docker.com/_/clojure
* https://clojure.org/guides/deps_and_cli
