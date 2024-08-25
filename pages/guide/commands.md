---
outline: 'deep'
---

# Command Line

## Cheat Sheet

|           |           DMN<br/>MODEL            |     FEEL<br/>EXPRESSION      |      DECISION</br>TABLE      |           EXAMPLES           |
|----------:|:----------------------------------:|:----------------------------:|:----------------------------:|:----------------------------:|
|  EVALUATE |    [**edm**](subcommand-edm.md)    | [**efe**](subcommand-efe.md) | [**edt**](subcommand-edt.md) |                              | 
|     PARSE |    [**pdm**](subcommand-pdm.md)    | [**pfe**](subcommand-pfe.md) | [**pdt**](subcommand-pdt.md) |                              |
|      TEST |    [**tdm**](subcommand-tdm.md)    | [**tfe**](subcommand-tfe.md) | [**tdt**](subcommand-tdt.md) |                              |
|    EXPORT |    [**xdm**](subcommand-xdm.md)    | [**xfe**](subcommand-xfe.md) | [**xdt**](subcommand-xdt.md) |                              |
| RECOGNIZE |                                    |                              | [**rdt**](subcommand-rdt.md) |                              |
|     SERVE | [**srv**](commands/command-srv.md) |                              |                              |                              |
|      SAVE |                                    |                              |                              | [**exs**](subcommand-exs.md) |

## Commands

### srv

Runs the <DsntkName/> as a service.

To learn more about [**srv**](commands/command-srv.md) command, type:
 
```shell
$ dsntk help srv
```
 
or refer to [Serving DMN™ models](commands/command-srv.md).


### edm

Evaluates the DMN™ model.

To display all available options of the **edm** command, enter:

```shell
$ dsntk help edm
```

^subcommand-edm-ref

### edt

Evaluates decision table. To display all available options of the **edt** command, enter:

```shell
$ dsntk help edt
```

^subcommand-edt-ref

### efe

Evaluates FEEL expression. To display all available options of the **efe** command, enter:

```shell
$ dsntk help efe
```

^subcommand-efe-ref

### pdm

Parses DMN model. To display all available options of the **pdm** command, enter:

```shell
$ dsntk help pdm
```

^subcommand-pdm-ref

### pdt

Parses decision table. To display all available options of the **pdt** command, enter:

```shell
$ dsntk help pdt
```

^subcommand-pdt-ref

### pfe

Parses FEEL expression. To display all available options of the **pfe** command, enter:

```shell
$ dsntk help pfe
```

^subcommand-pfe-ref

### tdm

Tests DMN model. To display all available options of the **tdm** command, enter:

```shell
$ dsntk help tdm
```

^subcommand-tdm-ref

### tdt

Tests decision table. To display all available options of the **tdt** command, enter:

```shell
$ dsntk help tdt
```

^subcommand-tdt-ref

### tfe

Tests FEEL expression. To display all available options of the **fte** command, enter:

```shell
$ dsntk help tfe
```

^subcommand-tfe-ref

### xdm

Exports DMN model. To display all available options of the **xdm** command, enter:

```shell
$ dsntk help xdm
```

^subcommand-xdm-ref

### xdt

Exports decision table. To display all available options of the **xdt** command, enter:

```shell
$ dsntk help xdt
```

^subcommand-xdt-ref

### xfe

Exports FEEL expression. To display all available options of the **xfe** command, enter:

```shell
$ dsntk help xfe
```

^subcommand-xfe-ref

### rdt

Recognizes decision table. To display all available options of the **rdt** command, enter:

```shell
$ dsntk help rdt
```

^subcommand-rdt-ref

### exs

Saves the examples. To display all available options of the **exs** command, enter:

```shell
$ dsntk help exs
```

^subcommand-exs-ref

## Options

### --help

Print help.

```shell
$ dsntk --help
```

or (short option)

```shell
$ dsntk -h
```

### --version

Print version.

```shell
$ dsntk --version
```
or (short option)

```shell
$ dsntk -V
```
