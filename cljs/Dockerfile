# Use the latest official image, including recent build tools
FROM clojure:tools-deps

# Include the source code
COPY ./Day02/hello-world/ /tmp/hello-world/
WORKDIR /tmp/hello-world/

# Force a download of dependencies by compiling
# (expected to be overwritten at container runtime)
RUN clj -m cljs.main -O advanced -c hello-world.core

# Run ClojureScript at startup, and start a repl
CMD [\
  "clojure", \
    "-m", "cljs.main", \
    "-c", "hello-world.core", \
    "-r"\
  ]

# By default, the output is served at port 9000
EXPOSE 9000