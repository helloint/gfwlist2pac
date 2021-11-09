// Test only the proxy
var proxy = 'PROXY 172.16.0.33:1080;DIRECT;';
function FindProxyForURL(url, host) {
    return proxy;
}
