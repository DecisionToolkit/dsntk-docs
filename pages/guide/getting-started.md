# Getting Started

## Install built-in examples

&#8203;<DsntkName/> provides a set of examples ready to play with.
To install the built-in examples in, e.g., the **examples** directory, just type:

```shell 
$ dsntk exs examples
```

## Evaluate FEEL expression

```shell
$ cd ./examples/e1
```

```shell
$ dsntk efe e1.ctx e1.feel
```

```text
3
```

^subcommand-efe-ref

## Evaluate DMN™ model

```shell
$ cd ./examples/e2
```

```shell
$ dsntk edm e2.ctx e2.dmn -i "Greeting Message"
```

```text
"Hello John Doe"
```

^subcommand-edm-ref

## Evaluate decision table

```shell
$ cd ./examples/e3
```

```shell
$ dsntk edt e3.ctx e3.dtb
```

```text
0.15
```

^subcommand-edt-ref

## Run as a service

```shell
$ cd ./examples/e2
```

```shell
$ dsntk srv -v -H 127.0.0.1 -D .
```

```text
Found 1 model.
Loaded 1 model.
Deployed 1 invocable.

Deployed invocables:
  io/dsntk/2_0001/compliance-level-2-test-0001/Greeting%20Message

dsntk 127.0.0.1:22022
```

Switch to another terminal and type:

```shell
$ curl -s -d '{"Full Name": "John Doe"}' -H 'Content-Type: application/json' -X POST http://127.0.0.1:22022/evaluate/io/dsntk/2_0001/compliance-level-2-test-0001/Greeting%20Message
```

Expected output:

```text
{"data":"Hello John Doe"}
```

^subcommand-srv-ref
