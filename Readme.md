# Typescript Public Exports Demo

The goal of this package is to create a reproduction of issues I was seeing getting typescript to understand `exports` field in a package.

The repo consists of a pacakge that declares public entrypoints using the `exports` field in package.json, and an app built with typescript that consumes the package.

# The Fix -- Typescript v4.7

I had to do a few things to get the submodule import working:

* Upgrade to `typescript@4.7`
* set `"moduleResolution": "nodenext"`

Typescript v4.7 included official support for the `exports` field. Oddly enough, it was actually the `.` import (or said another way, `import {wait} from 'package'`) that wasn't working once I was on the proper TS version. The submodule worked once I got the right TS version.

To get the root import working, I had to update the consuming `app/tsconfig.json` with `"moduleResolution": "nodenext"`. I don't think the exports field is meant to be unique to ECMAScript Modules, but apparently typescript was not satisfied with the default `"moduleResolution": "node"` setting.


