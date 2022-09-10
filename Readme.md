# Typescript Public Exports Demo

The goal of this package is to create a reproduction of issues I am seeing getting typescript to understand exports fields in a package.

The repo consists of a pacakge that declares public entrypoints using the `exports` field in package.json, and an app built with typescript that consumes the package.
