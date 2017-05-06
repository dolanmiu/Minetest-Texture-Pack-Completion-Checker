# Minetest Texture Pack Completion Checker

# How to use

## Normal Checking
You can check against the well reknowned `Summerfields` texture pack, or check against [`minetest-core`](src/api/game/core-files.ts) and [`minetest-game`](src/api/game/core-files.ts) texture lists. The latter is preferred over testing over `Summerfields`.

### Test against Summerfields

#### To get information and details about the repo

```url
https://minetest-checker.herokuapp.com/<OWNER>/<REPO>
```

#### To get a pretty badge for the repo

```url
https://minetest-checker.herokuapp.com/<OWNER>/<REPO>.svg
```

### Test against `minetest-game` [static texture list](src/api/game/core-files.ts)

#### To get information and details about the repo

```url
https://minetest-checker.herokuapp.com/game/<OWNER>/<REPO>
```

#### To get a pretty badge for the repo

```url
https://minetest-checker.herokuapp.com/game/<OWNER>/<REPO>.svg
```

### Test against `minetest-core` [static texture list](src/api/core/core-files.ts)

#### To get information and details about the repo

```url
https://minetest-checker.herokuapp.com/core/<OWNER>/<REPO>
```

#### To get a pretty badge for the repo

```url
https://minetest-checker.herokuapp.com/core/<OWNER>/<REPO>.svg
```

## Mod Checking

### Farming Mod

#### To get information and details about the repo

```url
https://minetest-checker.herokuapp.com/farming/<OWNER>/<REPO>
```

#### To get a pretty badge for the repo

```url
https://minetest-checker.herokuapp.com/farming/<OWNER>/<REPO>.svg
```

### Awards Mod

#### To get information and details about the repo

```url
https://minetest-checker.herokuapp.com/awards/<OWNER>/<REPO>
```

#### To get a pretty badge for the repo

```url
https://minetest-checker.herokuapp.com/awards/<OWNER>/<REPO>.svg
```

### Nether Mod

#### To get information and details about the repo

```url
https://minetest-checker.herokuapp.com/nether/<OWNER>/<REPO>
```

#### To get a pretty badge for the repo

```url
https://minetest-checker.herokuapp.com/nether/<OWNER>/<REPO>.svg
```

## Dynamic Mod Checking

This will enable checking of **every** mod. However, it is slower because there is no caching involved. It does all the computation when requested. If possible, use the above!

#### To get information and details about the repo

```url
https://minetest-checker.herokuapp.com/mod/<MOD-OWNER>/<MOD-REPO>/<OWNER>/<REPO>
```

#### To get a pretty badge for the repo

```url
https://minetest-checker.herokuapp.com/mod/<MOD-OWNER>/<MOD-REPO>/<OWNER>/<REPO>.svg
```

Made with ❤️ by Dolan Miu
