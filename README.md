# gfwlist2pac
`gfwlist.pac` will be published immediately when user rules (`user-rules.txt`) or proxy server (in `.github/workflows/ci.yml`) updated,
or check `gfwlist` once a day to keep up to date.

## How to use
* GitHub Raw: https://raw.githubusercontent.com/helloint/gfwlist2pac/master/gfwlist.pac  (It will be blocked from GFW from time to time)
* jsDelivr: https://cdn.jsdelivr.net/gh/helloint/gfwlist2pac@master/gfwlist.pac (It will download if you directly open the URL)

## Instruction
This repo is forked from `petronny/gfwlist2pac`, and I did some customization:
* Use GitHub Actions to do the build
* Use genpac `user-rules.txt` to maintain the whitelist/blacklist
* Customized proxy server address `172.16.0.33:1080` in `.github/workflows/ci.yml`

## Feel free to Fork
You can fork this repo, and then custom proxy server address and reset `user-rules.txt` according to your needs.
Then the Pac file will be https://raw.githubusercontent.com/your-name/gfwlist2pac/master/gfwlist.pac
