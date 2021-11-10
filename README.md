# gfwlist2pac
`gfwlist.pac` will be published immediately when `user-rules.txt` updated,
and also once a day to keep `gfwlist` up to date.

## How to use
1. Just reference the PAC file: https://raw.githubusercontent.com/helloint/gfwlist2pac/master/gfwlist.pac
2. Maintain `user-rules.txt`

## Instruction
This repo is forked from `petronny/gfwlist2pac` and has some customization:
* Use GitHub Actions to do the build
* Use genpac `user-rules.txt` to maintain the whitelist/blacklist
* Customized proxy server address `172.16.0.33:1080` in `.github/workflows/ci.yml`

## Feel free to Fork
You can fork this repo, and then custom proxy server address and reset `user-rules.txt` according to your needs.
Then the Pac file will be https://raw.githubusercontent.com/your-name/gfwlist2pac/master/gfwlist.pac
